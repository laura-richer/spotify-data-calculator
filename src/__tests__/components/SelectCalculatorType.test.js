import { render, fireEvent, screen } from '@testing-library/svelte';
import { expect, test, describe } from 'vitest';
import { tick } from 'svelte';

import { calculatorTypes } from '$lib/constants/calculator-types.js';
import SelectedCalculatorType from '$lib/components/SelectCalculatorType.svelte';

describe('Select calculator type', () => {
  test('renders a button for each calculator type', async () => {
    const { container } = render(SelectedCalculatorType);

    const calculatorTypeButtons = container.querySelectorAll('button');

    expect(calculatorTypeButtons.length).toBe(calculatorTypes.length);
  });

  test('should render calculator type buttons with no active state', () => {
    const { container } = render(SelectedCalculatorType);

    const calculatorTypeButtons = container.querySelectorAll('button');

    calculatorTypeButtons.forEach(button => {
      expect(button.classList).not.toContain('btn--active')
    })
  })

  test('should apply active state to button after click', async () => {
    const { container } = render(SelectedCalculatorType);

    const calculatorTypeButtons = container.querySelectorAll('button');

    const firstButton = screen.getByText('Calculate Time');

    fireEvent.click(firstButton);
    await tick();

    calculatorTypeButtons.forEach(button => {
      if (button !== firstButton) expect(button.classList).not.toContain('btn--active');
      else expect(button.classList).toContain('btn--active');
    })
  });
});

