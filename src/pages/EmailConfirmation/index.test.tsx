import React from 'react';
import { render, fireEvent } from '../../utils/test-utils';
import { EmailConfirmation } from '.';
import { defaultProps } from './mock_data';
import { words } from './words';

const { confirmEmail, expiredLink } = words;

describe('EmailConfirmation', () => {
  describe('ConfirmEmail', () => {
    it('should display email confirm page without any alerts on initial load', () => {
      const { queryByText } = render(<EmailConfirmation {...defaultProps} />);

      expect(queryByText(confirmEmail.heading)).toBeTruthy();
      expect(queryByText(confirmEmail.successMessage)).toBeNull();
      expect(queryByText(confirmEmail.failureMessage)).toBeNull();
    });

    it('should call onClickConfirmEmail when button is clicked', () => {
      const onClickConfirmEmail = jest.fn();
      const { getByRole } = render(
        <EmailConfirmation
          {...defaultProps}
          onClickConfirmEmail={onClickConfirmEmail}
        />
      );

      fireEvent.click(getByRole('button', { name: confirmEmail.button }));
      expect(onClickConfirmEmail).toHaveBeenCalled();
    });

    it('should display email confirm page with success alert after successful confirmation', () => {
      const { queryByText } = render(
        <EmailConfirmation {...defaultProps} networkRequestStatus="success" />
      );

      expect(queryByText(confirmEmail.heading)).toBeTruthy();
      expect(queryByText(confirmEmail.successMessage)).toBeTruthy();
      expect(queryByText(confirmEmail.failureMessage)).toBeNull();
    });

    it('should display email confirm page with failure alert after failed confirmation', () => {
      const { queryByText } = render(
        <EmailConfirmation {...defaultProps} networkRequestStatus="failure" />
      );

      expect(queryByText(confirmEmail.heading)).toBeTruthy();
      expect(queryByText(confirmEmail.successMessage)).toBeNull();
      expect(queryByText(confirmEmail.failureMessage)).toBeTruthy();
    });
  });

  describe('ExpiredLink', () => {
    it('should display expired link page without any alerts on initial load', () => {
      const { queryByText } = render(
        <EmailConfirmation {...defaultProps} isExpiredLink={true} />
      );

      expect(queryByText(expiredLink.heading)).toBeTruthy();
      expect(queryByText(expiredLink.successMessage)).toBeNull();
      expect(queryByText(expiredLink.failureMessage)).toBeNull();
    });

    it('should call onClickResendEmail when button is clicked', () => {
      const onClickResendEmail = jest.fn();
      const { getByRole } = render(
        <EmailConfirmation
          {...defaultProps}
          isExpiredLink={true}
          onClickResendEmail={onClickResendEmail}
        />
      );

      fireEvent.click(getByRole('button', { name: expiredLink.button }));
      expect(onClickResendEmail).toHaveBeenCalled();
    });

    it('should display expired link page with success alert after successful resend', () => {
      const { queryByText } = render(
        <EmailConfirmation
          {...defaultProps}
          isExpiredLink={true}
          networkRequestStatus="success"
        />
      );

      expect(queryByText(expiredLink.heading)).toBeTruthy();
      expect(queryByText(expiredLink.successMessage)).toBeTruthy();
      expect(queryByText(expiredLink.failureMessage)).toBeNull();
    });

    it('should display expired link page with failure alert after failed resend', () => {
      const { queryByText } = render(
        <EmailConfirmation
          {...defaultProps}
          isExpiredLink={true}
          networkRequestStatus="failure"
        />
      );

      expect(queryByText(expiredLink.heading)).toBeTruthy();
      expect(queryByText(expiredLink.successMessage)).toBeNull();
      expect(queryByText(expiredLink.failureMessage)).toBeTruthy();
    });
  });
});
