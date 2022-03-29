import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Login } from './index';
import { words } from './words';
import { defaultProps, populatedProps } from './mock_data';
import { BrowserRouter } from 'react-router-dom';

const { loginButton, errorMessage } = words;

describe('Login', () => {
  it('should not display error message', () => {
    const { queryByText } = render(
      <BrowserRouter>
        <Login {...defaultProps} />
      </BrowserRouter>
    );

    expect(queryByText(errorMessage)).toBeNull();
  });

  it('should call onFormSubmit when Log In is clicked', () => {
    const onFormSubmit = jest.fn();
    const { getByRole } = render(
      <BrowserRouter>
        <Login {...populatedProps} onFormSubmit={onFormSubmit} />
      </BrowserRouter>
    );

    fireEvent.click(getByRole('button', { name: loginButton }));

    expect(onFormSubmit).toHaveBeenCalled();
  });

  it('should display invalid login message if request failed on submit', () => {
    const { queryByText } = render(
      <BrowserRouter>
        <Login {...populatedProps} errorMessage={errorMessage} />
      </BrowserRouter>
    );

    expect(queryByText(errorMessage)).toBeTruthy();
  });
});
