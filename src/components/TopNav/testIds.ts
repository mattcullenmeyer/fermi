import {
  querySelectorGenerator,
  writeSelectorGenerator,
} from '../../utils/testQueries';

export const testIds = {
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

export const WriteSelectors = writeSelectorGenerator(testIds);
export const QuerySelectors = querySelectorGenerator(testIds);
