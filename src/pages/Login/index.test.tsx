import React from 'react';
import { render, fireEvent } from '../../utils/test-utils';
import { Login } from './index';
import { words } from './words';
import { defaultProps, populatedProps } from './mock_data';

const { loginButton, errorMessage } = words;

describe('Login', () => {
  it('should not display error message', () => {
    const { queryByText } = render(<Login {...defaultProps} />);

    expect(queryByText(errorMessage)).toBeNull();
  });

  it('should call onFormSubmit when Log In is clicked', () => {
    const onFormSubmit = jest.fn();
    const { getByRole } = render(
      <Login {...populatedProps} onFormSubmit={onFormSubmit} />
    );

    fireEvent.click(getByRole('button', { name: loginButton }));

    expect(onFormSubmit).toHaveBeenCalled();
  });

  it('should display invalid login message if request failed on submit', () => {
    const { queryByText } = render(
      <Login {...populatedProps} errorMessage={errorMessage} />
    );

    expect(queryByText(errorMessage)).toBeTruthy();
  });
});
