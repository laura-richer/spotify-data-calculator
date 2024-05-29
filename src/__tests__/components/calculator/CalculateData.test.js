import { render } from '@testing-library/svelte';
import { expect, test, describe, vi } from 'vitest';
import CalculateData from '$lib/components/calculator/CalculateData.svelte';

// const mockStore = {
//   selectedAudioQuality: 96,
//   subscribe: vi.fn(),
// };

describe('Calculate data', () => {
  // test('should calculate the correct data usage in GB', () => {
  //   const { component } = render(CalculateData, { store: mockStore });

  //   const input = {
  //     days: '2',
  //     hours: '3',
  //   };

  //   const result = component.calculateTime(input);
  //   const expected = 3;
  //   expect(result).toEqual(expected);
  // });

  test('should convert days and hours to total hours correctly', () => {
    const { component } = render(CalculateData);

    const result = component.convertToHours(2, 3);
    const expected = 51; // Expected result: 2 days * 24 hours/day + 3 hours = 51 hours

    expect(result).toEqual(expected);
  });
});
