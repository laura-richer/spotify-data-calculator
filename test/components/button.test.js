import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/svelte";
import Button from '../../src/components/Button.svelte';

const buttonText = 'Test button';
const buttonHoverColor = 'red';

describe('Button component', function () {
  it('renders to match snapshot', () => {
    const result = Button;
    expect(result).toMatchSnapshot()
  });

  it('renders in the DOM', () => {
    render(Button);
    expect(Button).toBeTruthy();
  });

  // it('should be a button element', () => {
  //   render(Button, { buttonText });
  //   const button = screen.getByText(buttonText);
  //   expect(button.tag).toEqual('button');
  // });

  it('should render with primary class by default', () => {
    render(Button, { buttonText });
    const button = screen.getByText(buttonText);

    expect(button).toHaveClass('btn');
    expect(button).toHaveClass('btn--primary');
  });

  it('should render with green active state by default', () => {
    render(Button, { buttonText });
    const button = screen.getByText(buttonText);

    expect(button).toHaveClass('btn');
    expect(button).toHaveClass('btn-hover--green');
  });

  it('should not have active class by default', () => {
    render(Button, { buttonText });
    const button = screen.getByText(buttonText);

    expect(button).not.toHaveClass('btn--active');
  });

  it('should render correct classes with props', () => {
    render(Button, { buttonText, buttonHoverColor, buttonType: 'compact' });
    const button = screen.getByText(buttonText);

    expect(button).toHaveClass('btn');
    expect(button).toHaveClass('btn--compact');
    expect(button).toHaveClass(`btn-hover--${buttonHoverColor}`);
    expect(button.innerHTML).toBe(buttonText);
  });

  it('should render active class when active prop is passed', () => {
    render(Button, { buttonText, active: true });
    const button = screen.getByText(buttonText);

    expect(button).toHaveClass('btn');
    expect(button).toHaveClass('btn--active');
  });

  // it('should have a colour variable to match the active prop color', () => {
  //   render(Button, { buttonText, buttonHoverColor, active: true });
  //   const button = screen.getByText(buttonText);

  //   expect(button).toHaveClass(`btn-focus--${buttonHoverColor}`);
  //   expect(button).toHaveStyle(`color: var(--color-${buttonHoverColor})`);
  // });

  // it('should emit click when clicked', async () => {
  //   render(Button, { buttonText });
  //   const button = screen.getByText(buttonText);

  //   await fireEvent.click(button);

  // });
});



