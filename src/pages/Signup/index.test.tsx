import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Signup } from './index';
import { words } from './words';
import { populatedProps } from './mock_data';

const { createAccount } = words;

describe('Signup', () => {
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
      <Signup {...populatedProps} emailErrorMessage={words.invalidEmail} />
    );

    expect(getByRole('button', { name: createAccount })).toBeDisabled();
    expect(queryByText(words.invalidEmail)).toBeTruthy();
    expect(queryByText(words.emailUnavailable)).toBeNull();
    expect(queryByText(words.invalidPassword)).toBeNull();
    expect(queryByText(words.signupErrorMessage)).toBeNull();
  });

  it('should display email unavailable message if it is already taken', () => {
    const { queryByText, getByRole } = render(
      <Signup {...populatedProps} emailErrorMessage={words.emailUnavailable} />
    );

    expect(getByRole('button', { name: createAccount })).toBeDisabled();
    expect(queryByText(words.invalidEmail)).toBeNull();
    expect(queryByText(words.emailUnavailable)).toBeTruthy();
    expect(queryByText(words.invalidPassword)).toBeNull();
    expect(queryByText(words.signupErrorMessage)).toBeNull();
  });

  it('should display invalid password message if it is less than 10 characters', () => {
    const { queryByText, getByRole } = render(
      <Signup
        {...populatedProps}
        passwordErrorMessage={words.invalidPassword}
      />
    );

    expect(getByRole('button', { name: createAccount })).toBeDisabled();
    expect(queryByText(words.invalidEmail)).toBeNull();
    expect(queryByText(words.emailUnavailable)).toBeNull();
    expect(queryByText(words.invalidPassword)).toBeTruthy();
    expect(queryByText(words.signupErrorMessage)).toBeNull();
  });

  it('should display signup error message if request failed on submit', () => {
    const { queryByText, getByRole } = render(
      <Signup
        {...populatedProps}
        signupErrorMessage={words.signupErrorMessage}
      />
    );

    expect(getByRole('button', { name: createAccount })).toBeEnabled();
    expect(queryByText(words.invalidEmail)).toBeNull();
    expect(queryByText(words.emailUnavailable)).toBeNull();
    expect(queryByText(words.invalidPassword)).toBeNull();
    expect(queryByText(words.signupErrorMessage)).toBeTruthy();
  });
});
