import { render, fireEvent, screen } from '@testing-library/svelte';
import { expect, test, describe } from 'vitest';
import { tick } from 'svelte';

import Page from '../../routes/+page.svelte';

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
    render(Page);

    const audioQualityButton = screen.getByText('Low');
    let calculatorTypeButton = screen.getByText('Calculate Time');

    fireEvent.click(audioQualityButton);
    fireEvent.click(calculatorTypeButton);
    await tick();

    let calculatorTitle = screen.getByText('How much data you have left? I will tell you how long you can listen for.');
    expect(calculatorTitle).toBeInTheDocument();

    calculatorTypeButton = screen.getByText('Calculate Data');
    await fireEvent.click(calculatorTypeButton);

    calculatorTitle = screen.getByText('How much time you would like to listen for? I will tell you how much mobile data you need.');
    expect(calculatorTitle).toBeInTheDocument();
  });

  test('should disable calculate button after selecting a different calculator type', async () => {
    render(Page);

    const audioQualityButton = screen.getByText('Low');
    let calculatorTypebutton = screen.getByText('Calculate Data');

    fireEvent.click(audioQualityButton);
    fireEvent.click(calculatorTypebutton);
    await tick();

    let calculatorButton = screen.queryByText('Calculate');
    expect(calculatorButton.classList).toContain('btn--disabled');

    calculatorTypebutton = screen.getByText('Calculate Time');

    await fireEvent.click(calculatorTypebutton);

    calculatorButton = screen.queryByText('Calculate');
    expect(calculatorButton.classList).toContain('btn--disabled');
  });

  test('should reset form values if calculator type is changed', () => {});

  test('should hide calculator result if audio quality is changed', () => {});

  test('should hide calculator result if calculator type is changed', () => {});

  test('should reset the form if the reset button is clicked', () => {});
});

describe('Calculations', () => {
  test('should calculate the correct amount of data needed to listen for specified time', async () => {
    render(Page);

    const daysInput = '2';
    const hoursInput = '6';
    const expectedDataUsageGB = '1';

    const firstAudioQualityButton = screen.getByText('Low');
    const firstCalculatorTypeButton = screen.getByText('Calculate Data');

    fireEvent.click(firstAudioQualityButton);
    fireEvent.click(firstCalculatorTypeButton);
    await tick();

    const daysInputField = screen.getByLabelText('Days');
    const hoursInputField = screen.getByLabelText('Hours');

    fireEvent.input(daysInputField, { target: { value: daysInput } });
    fireEvent.input(hoursInputField, { target: { value: hoursInput } });
    await tick();

    const calculateButton = screen.getByText('Calculate');
    await fireEvent.click(calculateButton);

    const resultElement = screen.getByText(`${expectedDataUsageGB} GB`);

    expect(resultElement).toBeInTheDocument();
  });

  test('should calculate the correct amount of time you can listen based on your data input ', async () => {
    render(Page);

    const audioQualityButton = screen.getByText('Low');
    const calculatorTypebutton = screen.getByText('Calculate Time');

    fireEvent.click(audioQualityButton);
    fireEvent.click(calculatorTypebutton);
    await tick();

    const gbInputField = screen.getByLabelText('GB');
    const dataInput = '5';

    fireEvent.input(gbInputField, { target: { value: dataInput } });

    const calculateButton = screen.getByText('Calculate');
    await fireEvent.click(calculateButton);

    const expectedTime = '20 days and 17 hours';
    const resultElement = screen.getByText(expectedTime);

    expect(resultElement).toBeInTheDocument();
  });

  test('should recalculate result if value is changed', async () => {
    render(Page);

    const audioQualityButton = screen.getByText('Low');
    const calculatorTypebutton = screen.getByText('Calculate Time');

    fireEvent.click(audioQualityButton);
    fireEvent.click(calculatorTypebutton);
    await tick();

    const gbInputField = screen.getByLabelText('GB');

    fireEvent.input(gbInputField, { target: { value: '5' } });

    let calculateButton = screen.getByText('Calculate');
    await fireEvent.click(calculateButton);

    const initialCalculationResult = '20 days and 17 hours';

    fireEvent.input(gbInputField, { target: { value: '1' } });
    calculateButton = screen.getByText('Calculate');
    await fireEvent.click(calculateButton);

    const secondCalculationResult = screen.getByText('4 days and 3 hours');

    expect(secondCalculationResult.innerHTML).not.toBe(initialCalculationResult);
  });
});

