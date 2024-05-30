import { render, fireEvent, userEvent, screen } from '@testing-library/svelte';
import { expect, test, describe } from 'vitest';
import { tick } from 'svelte';

import Page from '../../routes/+page.svelte';

describe('Page', () => {
  test('should not render calculator on page load', () => {
    render(Page);
    const calculateButton = screen.queryByText('Calculate');
    expect(calculateButton).not.toBeInTheDocument();
  });

  test('should render calculator after audio quality and calculator type are selected', async () => {
    render(Page);

    const firstAudioQualityButton = screen.getByText('Low');
    const firstCalculatorTypeButton = screen.getByText('Calculate Time');
    let calculator = screen.queryByText('Calculate');

    fireEvent.click(firstAudioQualityButton);
    await tick();
    expect(calculator).not.toBeInTheDocument();

    fireEvent.click(firstCalculatorTypeButton);
    await tick();

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
    fireEvent.click(calculatorTypeButton);
    await tick();

    calculatorTitle = screen.getByText('How much time you would like to listen for? I will tell you how much mobile data you need.');
    expect(calculatorTitle).toBeInTheDocument();
  });

  test('calculate button should be initially disabled', async () => {
    render(Page);

    const firstAudioQualityButton = screen.getByText('Low');
    const firstCalculatorTypeButton = screen.getByText('Calculate Time');

    fireEvent.click(firstAudioQualityButton);
    await tick();

    fireEvent.click(firstCalculatorTypeButton);
    await tick();

    const calculatorButton = screen.queryByText('Calculate');

    expect(calculatorButton.classList).toContain('btn--disabled');
  });

  test('should calculate the correct amount of data needed to listen for specified time', async () => {
    // Render the component
    render(Page);

    const daysInput = '2';
    const hoursInput = '6';
    const expectedDataUsageGB = '1';

    const firstAudioQualityButton = screen.getByText('Low');
    const firstCalculatorTypeButton = screen.getByText('Calculate Data');

    fireEvent.click(firstAudioQualityButton);
    await tick();

    fireEvent.click(firstCalculatorTypeButton);
    await tick();

    const daysInputField = screen.getByLabelText('Days');
    const hoursInputField = screen.getByLabelText('Hours');

    await fireEvent.input(daysInputField, { target: { value: daysInput } });
    await fireEvent.input(hoursInputField, { target: { value: hoursInput } });

    const calculateButton = screen.getByText('Calculate');
    await fireEvent.click(calculateButton);

    const resultElement = screen.getByText(`${expectedDataUsageGB} GB`);

    expect(resultElement).toBeInTheDocument();
  });

  test('should reset form values if calculator type is changed', () => {});

  test('should hide calculator result if audio quality is changed', () => {});

  test('should hide calculator result if calculator type is changed', () => {});
});
