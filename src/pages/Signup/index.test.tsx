import React from 'react';
import { render, fireEvent } from '../../utils/test-utils';
import { Signup } from './index';
import { words } from './words';
import { defaultProps, populatedProps } from './mock_data';

describe('Signup', () => {
  it('should not display any error messages', () => {
    const { queryByText } = render(<Signup {...defaultProps} />);

    expect(queryByText(words.invalidEmail)).toBeNull();
    expect(queryByText(words.emailUnavailable)).toBeNull();
    expect(queryByText(words.invalidUsername)).toBeNull();
    expect(queryByText(words.usernameUnavailable)).toBeNull();
    expect(queryByText(words.invalidPassword)).toBeNull();
    expect(queryByText(words.signupErrorMessage)).toBeNull();
  });

  it('should call onFormSubmit when Create Account is clicked', () => {
    const onFormSubmit = jest.fn();
    const { getByRole } = render(
      <Signup {...populatedProps} onFormSubmit={onFormSubmit} />
    );

    fireEvent.click(getByRole('button', { name: words.createAccount }));

    expect(onFormSubmit).toHaveBeenCalled();
  });

  it('should display invalid email message if it fails validator', () => {
    const { queryByText, getByRole } = render(
      <Signup {...populatedProps} emailErrorMessage={words.invalidEmail} />
    );

    expect(getByRole('button', { name: words.createAccount })).toBeDisabled();
    expect(queryByText(words.invalidEmail)).toBeVisible();
  });

  it('should display email unavailable message if it is already taken', () => {
    const { queryByText, getByRole } = render(
      <Signup {...populatedProps} emailErrorMessage={words.emailUnavailable} />
    );

    expect(getByRole('button', { name: words.createAccount })).toBeDisabled();
    expect(queryByText(words.emailUnavailable)).toBeVisible();
  });

  it('should display invalid username message if it is less that 3 characters', () => {
    const { queryByText, getByRole } = render(
      <Signup
        {...populatedProps}
        passwordErrorMessage={words.invalidUsername}
      />
    );

    expect(getByRole('button', { name: words.createAccount })).toBeDisabled();
    expect(queryByText(words.invalidUsername)).toBeVisible();
  });

  it('should display username unavailable message if it is already taken', () => {
    const { queryByText, getByRole } = render(
      <Signup
        {...populatedProps}
        usernameErrorMessage={words.usernameUnavailable}
      />
    );

    expect(getByRole('button', { name: words.createAccount })).toBeDisabled();
    expect(queryByText(words.usernameUnavailable)).toBeVisible();
  });

  it('should display invalid password message if it is less than 10 characters', () => {
    const { queryByText, getByRole } = render(
      <Signup
        {...populatedProps}
        passwordErrorMessage={words.invalidPassword}
      />
    );

    expect(getByRole('button', { name: words.createAccount })).toBeDisabled();
    expect(queryByText(words.invalidPassword)).toBeVisible();
  });

  it('should display signup error message if request failed on submit', () => {
    const { queryByText, getByRole } = render(
      <Signup
        {...populatedProps}
        signupErrorMessage={words.signupErrorMessage}
      />
    );

    expect(getByRole('button', { name: words.createAccount })).toBeEnabled();
    expect(queryByText(words.signupErrorMessage)).toBeVisible();
  });
});
