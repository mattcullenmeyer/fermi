import {
  querySelectorGenerator,
  writeSelectorGenerator,
} from '../../utils/testQueries';

export const testSelectors = {
  emailTextField: null,
  usernameTextField: null,
  passwordTextField: null,
};

export const WriteSelectors = writeSelectorGenerator(testSelectors);
export const QuerySelectors = querySelectorGenerator(testSelectors);
