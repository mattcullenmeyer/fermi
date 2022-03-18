import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Login } from './index';
import { words } from './words';
import { populatedProps } from './mock_data';

const { loginButton } = words;

describe('Login', () => {
  it('should call onFormSubmit when Log In is clicked', () => {
    const onFormSubmit = jest.fn();
    const { getByRole } = render(
      <Login {...populatedProps} onFormSubmit={onFormSubmit} />
    );

    fireEvent.click(getByRole('button', { name: loginButton }));
    expect(onFormSubmit).toHaveBeenCalled();
  });
});
