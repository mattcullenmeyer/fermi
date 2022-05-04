import React from 'react';
import { render } from '../../utils/test-utils';
import { TopNav } from './index';
import { QuerySelectors } from './testSelectors';

const {
  loginMenuItem,
  signupMenuItem,
  storeMenuItem,
  libraryMenuItem,
  profileMenu,
  storeLink,
  libraryLink,
  accessButtons,
} = QuerySelectors;

describe('TopNav', () => {
  describe('PageMenu', () => {
    it('should show login and signup menus when not logged in', () => {
      const { queryByTestId } = render(<TopNav isLoggedIn={false} />);

      expect(queryByTestId(loginMenuItem)).toBeTruthy();
      expect(queryByTestId(signupMenuItem)).toBeTruthy();
      expect(queryByTestId(storeMenuItem)).toBeTruthy();
      expect(queryByTestId(libraryMenuItem)).toBeNull();
    });

    it('should show library menu when logged in', () => {
      const { queryByTestId } = render(<TopNav isLoggedIn={true} />);

      expect(queryByTestId(loginMenuItem)).toBeNull();
      expect(queryByTestId(signupMenuItem)).toBeNull();
      expect(queryByTestId(storeMenuItem)).toBeTruthy();
      expect(queryByTestId(libraryMenuItem)).toBeTruthy();
    });
  });

  describe('NavigationButtons', () => {
    it('should display library link when logged in', () => {
      const { queryByTestId } = render(<TopNav isLoggedIn={true} />);

      expect(queryByTestId(storeLink)).toBeTruthy();
      expect(queryByTestId(libraryLink)).toBeTruthy();
    });

    it('should not display library link when not logged in', () => {
      const { queryByTestId } = render(<TopNav isLoggedIn={false} />);

      expect(queryByTestId(storeLink)).toBeTruthy();
      expect(queryByTestId(libraryLink)).toBeNull();
    });
  });

  describe('ProfileMenu', () => {
    it('should display profile menu when logged in', () => {
      const { queryByTestId } = render(<TopNav isLoggedIn={true} />);

      expect(queryByTestId(profileMenu)).toBeTruthy();
      expect(queryByTestId(accessButtons)).toBeNull();
    });
  });

  describe('AccessButtons', () => {
    it('should display access buttons when not logged in', () => {
      const { queryByTestId } = render(<TopNav isLoggedIn={false} />);

      expect(queryByTestId(profileMenu)).toBeNull();
      expect(queryByTestId(accessButtons)).toBeTruthy();
    });
  });
});
