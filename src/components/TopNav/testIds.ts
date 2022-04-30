import {
  querySelectorGenerator,
  writeSelectorGenerator,
} from '../../utils/testQueries';

export const testIds = {
  profileMenu: null,
  accessButtons: null,
  pageMenu: null,
  libraryMenu: null,
  loginMenu: null,
  signupMenu: null,
  storeLink: null,
  libraryLink: null,
};

export const WriteSelectors = writeSelectorGenerator(testIds);
export const QuerySelectors = querySelectorGenerator(testIds);
