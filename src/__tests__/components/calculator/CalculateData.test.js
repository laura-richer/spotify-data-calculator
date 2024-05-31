import { render } from '@testing-library/svelte';
import { expect, describe, test } from 'vitest';

import CalculateData from '$lib/components/calculator/CalculateData.svelte';

describe('Calculate data functions', () => {
	test('should convert days and hours to total hours correctly', () => {
		const { component } = render(CalculateData);

		const result = component.convertInputToHours(1, 12);
		const expected = 36;

		expect(result).toEqual(expected);
	});

	test('should convert total hours to seconds correctly', () => {
		const { component } = render(CalculateData);

		const result = component.convertHoursToSeconds(36);
		const expected = 129600;

		expect(result).toEqual(expected);
	});

	test('should convert bitrate to bits per second correctly', () => {
		const { component } = render(CalculateData);

		const result = component.convertBitrateToBps(24);
		const expected = 24000;

		expect(result).toEqual(expected);
	});

	test('should calculate data usage in MB', () => {
		const { component } = render(CalculateData);

		const result = component.calculateDataUsageInMb(129600, 24000);
		const expected = 370.78857421875;

		expect(result).toEqual(expected);
	});

	test('convert MB to GB and return whole number', () => {
		const { component } = render(CalculateData);

		const result = component.convertDataMbToGb(370.78857421875);
		const expected = 1;

		expect(result).toEqual(expected);
	});
});
