import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Signup } from './index';
import { words } from './words';
import { defaultProps, populatedProps } from './mock_data';
import { BrowserRouter } from 'react-router-dom';

const {
  createAccount,
  invalidEmail,
  emailUnavailable,
  invalidPassword,
  signupErrorMessage,
} = words;

describe('Signup', () => {
  it('should not display any error messages', () => {
    const { queryByText } = render(
      <BrowserRouter>
        <Signup {...defaultProps} />
      </BrowserRouter>
    );

    expect(queryByText(invalidEmail)).toBeNull();
    expect(queryByText(emailUnavailable)).toBeNull();
    expect(queryByText(invalidPassword)).toBeNull();
    expect(queryByText(signupErrorMessage)).toBeNull();
  });

  it('should call onFormSubmit when Create Account is clicked', () => {
    const onFormSubmit = jest.fn();
    const { getByRole } = render(
      <BrowserRouter>
        <Signup {...populatedProps} onFormSubmit={onFormSubmit} />
      </BrowserRouter>
    );

    fireEvent.click(getByRole('button', { name: createAccount }));

    expect(onFormSubmit).toHaveBeenCalled();
  });

  it('should display invalid email message if it fails validator', () => {
    const { queryByText, getByRole } = render(
      <BrowserRouter>
        <Signup {...populatedProps} emailErrorMessage={invalidEmail} />
      </BrowserRouter>
    );

    expect(getByRole('button', { name: createAccount })).toBeDisabled();
    expect(queryByText(invalidEmail)).toBeTruthy();
  });

  it('should display email unavailable message if it is already taken', () => {
    const { queryByText, getByRole } = render(
      <BrowserRouter>
        <Signup {...populatedProps} emailErrorMessage={emailUnavailable} />
      </BrowserRouter>
    );

    expect(getByRole('button', { name: createAccount })).toBeDisabled();
    expect(queryByText(emailUnavailable)).toBeTruthy();
  });

  it('should display invalid password message if it is less than 10 characters', () => {
    const { queryByText, getByRole } = render(
      <BrowserRouter>
        <Signup {...populatedProps} passwordErrorMessage={invalidPassword} />
      </BrowserRouter>
    );

    expect(getByRole('button', { name: createAccount })).toBeDisabled();
    expect(queryByText(invalidPassword)).toBeTruthy();
  });

  it('should display signup error message if request failed on submit', () => {
    const { queryByText, getByRole } = render(
      <BrowserRouter>
        <Signup {...populatedProps} signupErrorMessage={signupErrorMessage} />
      </BrowserRouter>
    );

    expect(getByRole('button', { name: createAccount })).toBeEnabled();
    expect(queryByText(signupErrorMessage)).toBeTruthy();
  });
});
