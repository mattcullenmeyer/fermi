import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Login } from './index';
import { words } from './words';

const { loginButton } = words;

const defaultProps = {
  email: '',
  password: '',
  errorMessage: '',
  onEmailChange: () => {},
  onPasswordChange: () => {},
  onFormSubmit: () => {},
};

describe('Login', () => {
  it('should call onFormSubmit when Log In is clicked', () => {
    const onFormSubmit = jest.fn();
    const { getByRole } = render(
      <Login {...defaultProps} onFormSubmit={onFormSubmit} />
    );

    fireEvent.click(getByRole('button', { name: loginButton }));
    expect(onFormSubmit).toHaveBeenCalled();
  });
});
