import { render, screen, userEvent } from '@testing-library/svelte';
import { test, describe, expect, vi } from 'vitest';

import Calculator from '$lib/components/calculator/Calculator.svelte';

describe('Calculator', () => {

  // test('calculate button should be initially disabled', () => {
  //   render(Calculator, { store: mockStore});

  //   const calculatorButton = screen.queryByText('Calculate');

  //   expect(calculatorButton.classList).toContain('btn--disabled');
  // });

  test('calculate button should become active on form input', () => {

  });

  test('calculate button should become disabled if form input is emptied', () => {

  });

  test('should show result if calculator button is clicked', () => {

  });

  test('should recalculate result if value is changed', () => {

  });

  test('should restart the calculator if restart is clicked', () => {

  });
});
