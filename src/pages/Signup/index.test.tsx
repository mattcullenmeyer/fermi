import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Signup } from './index';
import { words } from './words';
import { defaultProps, populatedProps } from './mock_data';

const {
  createAccount,
  invalidEmail,
  emailUnavailable,
  invalidPassword,
  signupErrorMessage,
} = words;

describe('Signup', () => {
  it('should not display any error messages', () => {
    const { queryByText } = render(<Signup {...defaultProps} />);

    expect(queryByText(invalidEmail)).toBeNull();
    expect(queryByText(emailUnavailable)).toBeNull();
    expect(queryByText(invalidPassword)).toBeNull();
    expect(queryByText(signupErrorMessage)).toBeNull();
  });

  it('should call onFormSubmit when Create Account is clicked', () => {
    const onFormSubmit = jest.fn();
    const { getByRole } = render(
      <Signup {...populatedProps} onFormSubmit={onFormSubmit} />
    );

    fireEvent.click(getByRole('button', { name: createAccount }));

    expect(onFormSubmit).toHaveBeenCalled();
  });

  it('should display invalid email message if it fails validator', () => {
    const { queryByText, getByRole } = render(
      <Signup {...populatedProps} emailErrorMessage={invalidEmail} />
    );

    expect(getByRole('button', { name: createAccount })).toBeDisabled();
    expect(queryByText(invalidEmail)).toBeTruthy();
  });

  it('should display email unavailable message if it is already taken', () => {
    const { queryByText, getByRole } = render(
      <Signup {...populatedProps} emailErrorMessage={emailUnavailable} />
    );

    expect(getByRole('button', { name: createAccount })).toBeDisabled();
    expect(queryByText(emailUnavailable)).toBeTruthy();
  });

  it('should display invalid password message if it is less than 10 characters', () => {
    const { queryByText, getByRole } = render(
      <Signup {...populatedProps} passwordErrorMessage={invalidPassword} />
    );

    expect(getByRole('button', { name: createAccount })).toBeDisabled();
    expect(queryByText(invalidPassword)).toBeTruthy();
  });

  it('should display signup error message if request failed on submit', () => {
    const { queryByText, getByRole } = render(
      <Signup {...populatedProps} signupErrorMessage={signupErrorMessage} />
    );

    expect(getByRole('button', { name: createAccount })).toBeEnabled();
    expect(queryByText(signupErrorMessage)).toBeTruthy();
  });
});
