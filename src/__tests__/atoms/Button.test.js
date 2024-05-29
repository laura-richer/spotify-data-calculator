import { render } from '@testing-library/svelte';
import { expect, test, describe } from 'vitest';

import Button from '$lib/atoms/Button.svelte'

describe('Button', () => {
  test('button displays text text', () => {
    const buttonText = 'Click me';
    const { container } = render(Button, {
      props: {
        buttonText,
      }
    });

    const button = container.querySelector("button");
    expect(button.innerHTML).toBe('Click me')
  });

  test('button has correct type', () => {
    const buttonType = 'primary';
    const { container } = render(Button, {
      props: {
        buttonType,
      }
    });

    const button = container.querySelector("button");
    expect(button.classList).toContain('btn--primary')
  });

  test('button is disabled if disabled prop is true', () => {
    const buttonDisabled = true;
    const { container } = render(Button, {
      props: {
        buttonDisabled,
      }
    });

    const button = container.querySelector("button");
    expect(button.classList).toContain('btn--disabled')
  });

  test('button has active class added if selected prop is true', () => {
    const buttonSelected = true;
    const { container } = render(Button, {
      props: {
        buttonSelected,
      }
    });

    const button = container.querySelector("button");
    expect(button.classList).toContain('btn--active')
  });
})
