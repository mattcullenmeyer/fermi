import React from 'react';
import { render } from '../../utils/test-utils';
import { TopNav } from './index';
import { QuerySelectors } from './testids';

describe('TopNav', () => {
  it('should display ProfileMenu when logged in', () => {
    const { queryByTestId } = render(<TopNav isLoggedIn={true} />);

    expect(queryByTestId(QuerySelectors.profileMenu)).toBeTruthy();
  });
});
