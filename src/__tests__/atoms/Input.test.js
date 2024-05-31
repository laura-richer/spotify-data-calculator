import { render, screen } from '@testing-library/svelte';
import { expect, test, describe } from 'vitest';

import Input from '$lib/atoms/Input.svelte';

describe('Input', () => {
  test('should show field name', () => {
    const fieldName = 'Field name';
    render(Input, {
      props: {
        fieldName,
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

  test('should render label in correct position', () => {});

  test('should emit input on value change', () => {});

  test('should empty field and emit on focus', () => {});
});
