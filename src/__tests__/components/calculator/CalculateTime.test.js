import { render } from '@testing-library/svelte';
import { expect, test, describe, vi } from 'vitest';
import CalculateTime from '$lib/components/calculator/CalculateTime.svelte';

describe('Calculate time', () => {
  // test('should calculate the correct time needed', () => {
  //   const { component } = render(CalculateTime, { store: mockStore });

  //   const input = {
  //     days: '2',
  //     hours: '3',
  //   };

  //   const result = component.calculateTime(input);
  //   const expected = 3;
  //   expect(result).toEqual(expected);
  // });

  // test('should format duration correctly', () => {
  //   const { component } = render(CalculateTime);

  //   const result = component.formatDuration({days: '1', hours: '5'});
  //   const expected = '1 day and 5 hours';
  //   expect(result).toEqual(expected);
  // }),

  test('should pluralise values if required', () => {
    const { component } = render(CalculateTime);

    const pluraliseResult = component.pluralize(2, 'day');
    const expected = 'days'
    expect(pluraliseResult).toEqual(expected);
  });

  test('should not pluralise values if value is 1', () => {
    const { component } = render(CalculateTime);

    const pluraliseResult =
     component.pluralize(1, 'day');
    const expected = 'day'
    expect(pluraliseResult).toEqual(expected);
  });
});
