import { render, fireEvent, screen } from '@testing-library/svelte';
import { expect, test, describe } from 'vitest';
import { tick } from 'svelte';

import Page from '../../routes/+page.svelte';

const durationValues = {
  days: 2,
  hours: 6,
}

const initialCalculatorRender = async (calculatorType) => {
  render(Page);

  const audioQualityButton = screen.getByText('Low');
  const calculatorTypeButton = screen.getByText(`Calculate ${calculatorType}`);

  fireEvent.click(audioQualityButton);
  fireEvent.click(calculatorTypeButton);
  await tick();
}

const inputDurationValues = async () => {
  const daysInputField = screen.getByLabelText('Days');
  const hoursInputField = screen.getByLabelText('Hours');

  fireEvent.input(daysInputField, { target: { value: durationValues.days } });
  fireEvent.input(hoursInputField, { target: { value: durationValues.hours } });
  await tick();
}

const calculateResult = async () => {
  const calculateButton = screen.getByText('Calculate');
  await fireEvent.click(calculateButton);
};

describe('Page interactions', () => {
  test('should not render calculator on load', () => {
    render(Page);
    const calculateButton = screen.queryByText('Calculate');
    expect(calculateButton).not.toBeInTheDocument();
  });

  test('should render calculator after audio quality and calculator type are selected', async () => {
    render(Page);

    const audioQualityButton = screen.getByText('Low');
    const calculatorTypeButton = screen.getByText('Calculate Time');
    let calculator = screen.queryByText('Calculate');

    await fireEvent.click(audioQualityButton);
    expect(calculator).not.toBeInTheDocument();

    await fireEvent.click(calculatorTypeButton);
    calculator = screen.queryByText('Calculate');

    expect(calculator).toBeInTheDocument();
  });

  test('should render correct calculator type based on selected calculator type', async () => {
    await initialCalculatorRender('Time');

    let calculatorTitle = screen.getByText('How much data you have left? I will tell you how long you can listen for.');
    expect(calculatorTitle).toBeInTheDocument();

    const calculatorTypeButton = screen.getByText('Calculate Data');
    await fireEvent.click(calculatorTypeButton);

    calculatorTitle = screen.getByText('How much time you would like to listen for? I will tell you how much mobile data you need.');
    expect(calculatorTitle).toBeInTheDocument();
  });

  test('should disable calculate button after selecting a different calculator type', async () => {
    await initialCalculatorRender('Data');

    let calculatorButton = screen.queryByText('Calculate');
    expect(calculatorButton.classList).toContain('btn--disabled');

    const calculatorTypebutton = screen.getByText('Calculate Time');

    await fireEvent.click(calculatorTypebutton);

    calculatorButton = screen.queryByText('Calculate');
    expect(calculatorButton.classList).toContain('btn--disabled');
  });

  test('should hide calculator result if audio quality is changed', async () => {
    await initialCalculatorRender('Data');
    await inputDurationValues();
    await calculateResult();

    const resultElement = screen.getByText('1 GB');
    expect(resultElement).toBeInTheDocument();

    const audioAualityButton = screen.getByText('Medium');
    await fireEvent.click(audioAualityButton);

    expect(resultElement).not.toBeInTheDocument();
  });

  test('should retain form input value if audio quality is changed after calculation', async () => {
    await initialCalculatorRender('Data');
    await inputDurationValues();
    await calculateResult();

    const audioQualityButton = screen.getByText('Medium');
    await fireEvent.click(audioQualityButton);

    const daysInputField = screen.getByLabelText('Days');
    const hoursInputField = screen.getByLabelText('Hours');

    expect(daysInputField.value).toBe(durationValues.days.toString());
    expect(hoursInputField.value).toBe(durationValues.hours.toString());
  });

  test('should hide calculator result if calculator type is changed', async () => {
    await initialCalculatorRender('Data');
    await inputDurationValues();
    await calculateResult();

    const resultElement = screen.getByText('1 GB');
    expect(resultElement).toBeInTheDocument();

    const calculatorTypeButton = screen.getByText('Calculate Time');
    await fireEvent.click(calculatorTypeButton);

    expect(resultElement).not.toBeInTheDocument();
  });

  test('should reset form values if calculator type is changed', async () => {
    await initialCalculatorRender('Data');
    await inputDurationValues();
    await calculateResult();

    const calculatorTypebutton = screen.getByText('Calculate Time');
    await fireEvent.click(calculatorTypebutton);

    const gbInputField = screen.getByLabelText('GB');
    expect(gbInputField.value).toBe('');
  });

  test('should reset the form if the reset button is clicked', async () => {
    await initialCalculatorRender('Data');
    await inputDurationValues();
    await calculateResult();

    let resetButton = screen.getByText('Restart');
    expect(resetButton).toBeInTheDocument();

    await fireEvent.click(resetButton);

    resetButton = screen.queryByText('Restart');
    expect(resetButton).not.toBeInTheDocument();

    const audioQualityButton = screen.getByText('Low');
    const calculatorTypeButton = screen.getByText('Calculate Time');

    expect(audioQualityButton.classList).not.toContain('btn--active');
    expect(calculatorTypeButton.classList).not.toContain('btn--active');
  });
});

describe('Calculations', () => {
  test('should calculate the correct amount of data needed to listen for specified time', async () => {
    await initialCalculatorRender('Data');
    await inputDurationValues();
    await calculateResult();

    const expectedDataUsageGB = '1';
    const resultElement = screen.getByText(`${expectedDataUsageGB} GB`);

    expect(resultElement).toBeInTheDocument();
  });

  test('should calculate the correct amount of time you can listen based on your data input ', async () => {
    await initialCalculatorRender('Time');

    const gbInputField = screen.getByLabelText('GB');

    fireEvent.input(gbInputField, { target: { value: '5' } });

    await calculateResult();

    const expectedTime = '20 days and 17 hours';
    const resultElement = screen.getByText(expectedTime);

    expect(resultElement).toBeInTheDocument();
  });

  test('should recalculate result if value is changed', async () => {
    await initialCalculatorRender('Time');

    const gbInputField = screen.getByLabelText('GB');
    fireEvent.input(gbInputField, { target: { value: '5' } });

    await calculateResult();

    const initialCalculationResult = '20 days and 17 hours';

    fireEvent.input(gbInputField, { target: { value: '1' } });
    const calculateButton = screen.getByText('Calculate');
    await fireEvent.click(calculateButton);

    const secondCalculationResult = screen.getByText('4 days and 3 hours');

    expect(secondCalculationResult.innerHTML).not.toBe(initialCalculationResult);
  });
});

