import React from 'react';
import { render } from '../../utils/test-utils';
import { TopNav } from './index';
import { QuerySelectors } from './testIds';

describe('TopNav', () => {
  describe('PageMenu', () => {
    it('should show login and signup menus when not logged in', () => {
      const { queryByTestId } = render(<TopNav isLoggedIn={false} />);

      expect(queryByTestId(QuerySelectors.loginMenu)).toBeTruthy();
      expect(queryByTestId(QuerySelectors.signupMenu)).toBeTruthy();
      expect(queryByTestId(QuerySelectors.libraryMenu)).toBeNull();
    });

    it('should show library menu when logged in', () => {
      const { queryByTestId } = render(<TopNav isLoggedIn={true} />);

      expect(queryByTestId(QuerySelectors.loginMenu)).toBeNull();
      expect(queryByTestId(QuerySelectors.signupMenu)).toBeNull();
      expect(queryByTestId(QuerySelectors.libraryMenu)).toBeTruthy();
    });
  });

  describe('NavigationButtons', () => {
    it('should display library link when logged in', () => {
      const { queryByTestId } = render(<TopNav isLoggedIn={true} />);

      expect(queryByTestId(QuerySelectors.storeLink)).toBeTruthy();
      expect(queryByTestId(QuerySelectors.libraryLink)).toBeTruthy();
    });

    it('should not display library link when not logged in', () => {
      const { queryByTestId } = render(<TopNav isLoggedIn={false} />);

      expect(queryByTestId(QuerySelectors.storeLink)).toBeTruthy();
      expect(queryByTestId(QuerySelectors.libraryLink)).toBeNull();
    });
  });

  describe('ProfileMenu', () => {
    it('should display profile menu when logged in', () => {
      const { queryByTestId } = render(<TopNav isLoggedIn={true} />);

      expect(queryByTestId(QuerySelectors.profileMenu)).toBeTruthy();
      expect(queryByTestId(QuerySelectors.accessButtons)).toBeNull();
    });
  });

  describe('AccessButtons', () => {
    it('should display access buttons when not logged in', () => {
      const { queryByTestId } = render(<TopNav isLoggedIn={false} />);

      expect(queryByTestId(QuerySelectors.profileMenu)).toBeNull();
      expect(queryByTestId(QuerySelectors.accessButtons)).toBeTruthy();
    });
  });
});
