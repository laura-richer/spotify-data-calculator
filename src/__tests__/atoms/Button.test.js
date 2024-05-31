import { render } from '@testing-library/svelte';
import { expect, test, describe } from 'vitest';

import Button from '$lib/atoms/Button.svelte';

describe('Button', () => {
	test('should display text', () => {
		const buttonText = 'Click me';
		const { container } = render(Button, {
			props: {
				buttonText
			}
		});

		const button = container.querySelector('button');
		expect(button.innerHTML).toBe('Click me');
	});

	test('should have correct type', () => {
		const buttonType = 'primary';
		const { container } = render(Button, {
			props: {
				buttonType
			}
		});

		const button = container.querySelector('button');
		expect(button.classList).toContain('btn--primary');
	});

	test('should be disabled if disabled prop is true', () => {
		const buttonDisabled = true;
		const { container } = render(Button, {
			props: {
				buttonDisabled
			}
		});

		const button = container.querySelector('button');
		expect(button.classList).toContain('btn--disabled');
	});

	test('should have active class added if selected prop is true', () => {
		const buttonSelected = true;
		const { container } = render(Button, {
			props: {
				buttonSelected
			}
		});

		const button = container.querySelector('button');
		expect(button.classList).toContain('btn--active');
	});
});
