import { render, screen } from '@testing-library/svelte';
import { expect, test, describe } from 'vitest';

import Input from '$lib/atoms/Input.svelte';

describe('Input', () => {
	test('should show field name', () => {
		const fieldName = 'Field name';
		render(Input, {
			props: {
				fieldName
			}
		});

		const renderedFieldName = screen.getByText('Field name');
		expect(renderedFieldName).toBeInTheDocument();
	});

	// test('should field label that matches input id', () => {
	//   const fieldLabel = 'fieldLabel';
	//   const fieldName = 'Field name';
	//   render(Input, {
	//     props: {
	//       fieldLabel,
	//       fieldName,
	//     }
	//   });

	//   const renderedFieldLabel = screen.getByText('Field name');
	//   expect(renderedFieldLabel.for).toBe(fieldLabel);
	// });

	test('should render label in correct position', () => {
		const fieldLabelPosition = 'left';
		const { container } = render(Input, {
			props: {
				fieldLabelPosition
			}
		});

		const input = container.querySelectorAll('.input');
		expect(input[0].classList).toContain('input--left');
	});

	// test('should emit input on value change', async () => {
	//   const onValueChange = vi.fn();

	//   const { component, container } = render(Input);
	//   component.$on('input', onValueChange);

	//   const input = container.querySelector('input');
	//   await fireEvent.input(input, { target: { value: '1' } });

	//   expect(onValueChange).toHaveBeenCalledOnce();
	// });

	// test('should empty field and emit on focus', async () => {
	//   const onFieldFocus = vi.fn();

	//   const { component, container } = render(Input);

	//   const input = container.querySelector('input');
	//   component.input.$on('focus', onFieldFocus);
	//   await fireEvent.focus(input);

	//   expect(onFieldFocus).toHaveBeenCalledOnce();
	// });
});
