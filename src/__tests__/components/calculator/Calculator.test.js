import { render, screen, fireEvent } from '@testing-library/svelte';
import { test, describe, expect } from 'vitest';
import { tick } from 'svelte';

import Calculator from '$lib/components/calculator/Calculator.svelte';

const initialCalculationResult = async () => {
  render(Calculator);

  const daysInput = '2';
  const hoursInput = '6';

  const daysInputField = screen.getByLabelText('Days');
  const hoursInputField = screen.getByLabelText('Hours');

  fireEvent.input(daysInputField, { target: { value: daysInput } });
  fireEvent.input(hoursInputField, { target: { value: hoursInput } });
  await tick();
}

describe('Calculator', () => {
  test('should show result if calculate button is clicked', async () => {
    render(Calculator);

    const calculateButton = screen.getByText('Calculate');

    await fireEvent.click(calculateButton);

    const resultText = screen.getByText('0 GB');

    expect(resultText).toBeInTheDocument();
  });
});

describe('Calculator button', () => {
  test('should be disabled on component render', () => {
    render(Calculator);

    const calculateButton = screen.getByText('Calculate');
    expect(calculateButton.classList).toContain('btn--disabled');
  });

  test('should become active on form input', async () => {
    await initialCalculationResult();

    const calculateButton = screen.getByText('Calculate');
    expect(calculateButton.classList).not.toContain('btn--disabled');
  });

  test('should become disabled if form input is emptied', async () => {
    await initialCalculationResult();

    const daysInputField = screen.getByLabelText('Days');
    const hoursInputField = screen.getByLabelText('Hours');

    fireEvent.input(daysInputField, { target: { value: '' } });
    fireEvent.input(hoursInputField, { target: { value: '' } });
    await tick();

    const calculateButton = screen.getByText('Calculate');
    expect(calculateButton.classList).toContain('btn--disabled');
  });
});
