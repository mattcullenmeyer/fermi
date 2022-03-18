import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Signup } from './index';
import { words } from './words';
import { populatedProps } from './mock_data';

const { createAccount } = words;

describe('Signup', () => {
  it('should call onFormSubmit when Create Account is clicked', () => {
    const onFormSubmit = jest.fn((event) => event.preventDefault());
    const { getByRole } = render(
      <Signup {...populatedProps} onFormSubmit={onFormSubmit} />
    );

    fireEvent.click(getByRole('button', { name: createAccount }));
    expect(onFormSubmit).toHaveBeenCalled();
  });
});
