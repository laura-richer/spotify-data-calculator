import { render } from '@testing-library/svelte';
import { expect, test, describe } from 'vitest';
import CalculateTime from '$lib/components/calculator/CalculateTime.svelte';

describe('Calculate time functions', () => {
	test('should correctly convert data from GB to Bits', () => {
		const { component } = render(CalculateTime);

		const bits = component.convertDataGbToBits(1, 'GB');
		const expectedBits = 8589934592;

		expect(bits).toEqual(expectedBits);
	});

	test('should correctly convert bits to seconds', () => {
		const { component } = render(CalculateTime);

		const seconds = component.calculateSecondsFromBits(8589934592, 24);
		const expectedSeconds = 357913.9413333333;

		expect(seconds).toEqual(expectedSeconds);
	});

	test('should correctly seconds to days and hours', () => {
		const { component } = render(CalculateTime);

		const daysAndHours = component.convertSecondsToDaysAndHours(357913.9413333333);
		const expectedDaysAndHours = {
			days: 4,
			hours: 3
		};

		expect(daysAndHours).toEqual(expectedDaysAndHours);
	});

	test('should pluralise values if required', () => {
		const { component } = render(CalculateTime);

		const pluraliseDays = component.pluralize(2, 'day');
		const pluraliseHours = component.pluralize(2, 'hour');

		const expectedDays = 'days';
		const expectedHours = 'hours';

		expect(pluraliseDays).toEqual(expectedDays);
		expect(pluraliseHours).toEqual(expectedHours);
	});

	test('should not pluralise values if value is 1', () => {
		const { component } = render(CalculateTime);

		const pluraliseDays = component.pluralize(1, 'day');
		const pluraliseHours = component.pluralize(1, 'hour');

		const expectedDays = 'day';
		const expectedHours = 'hour';

		expect(pluraliseDays).toEqual(expectedDays);
		expect(pluraliseHours).toEqual(expectedHours);
	});
});
