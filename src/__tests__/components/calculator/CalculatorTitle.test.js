import { render } from '@testing-library/svelte';
import { expect, test, describe } from 'vitest';

import CalculatorTitle from '$lib/components/calculator/CalculatorTitle.svelte';

describe('Calculator title', () => {
  test('should render the calculator title', () => {
    const { container } = render(CalculatorTitle, {
      props: {
        title: 'Calculator Title',
      }
    });

    const title = container.querySelector('.calculator-title');

    expect(title).toBeInTheDocument();
    expect(title?.innerHTML).toBe('Calculator Title');
  })
})
