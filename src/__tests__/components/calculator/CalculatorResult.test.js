import { render, screen } from '@testing-library/svelte';
import { test, describe, expect } from 'vitest';
import CalculatorResult from '$lib/components/calculator/CalculatorResult.svelte';

describe('Calculator result', () => {
	test('should show restart button', () => {
		render(CalculatorResult);

		const resetButton = screen.getByText('Restart');
		expect(resetButton).toBeInTheDocument();
	});
});
