import {
  querySelectorGenerator,
  writeSelectorGenerator,
} from '../../utils/testQueries';

const testSelectors = {
  profileMenu: null,
  accessButtons: null,
  pageMenu: null,
  storeLink: null,
  libraryLink: null,
  storeMenuItem: null,
  libraryMenuItem: null,
  loginMenuItem: null,
  signupMenuItem: null,
  profileMenuItem: null,
  logoutMenuItem: null,
};

export const WriteSelectors = writeSelectorGenerator(testSelectors);
export const QuerySelectors = querySelectorGenerator(testSelectors);
