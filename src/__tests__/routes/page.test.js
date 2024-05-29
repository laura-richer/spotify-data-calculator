import { render, fireEvent, screen } from '@testing-library/svelte';
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
  })

  test('should reset form values if calculator type is changed', () => {});

  test('should hide calculator result if audio quality is changed', () => {});

  test('should hide calculator result if calculator type is changed', () => {});
});
