import {
  querySelectorGenerator,
  writeSelectorGenerator,
} from '../../utils/testQueries';

const testSelectors = {
  emailTextField: null,
  passwordTextField: null,
};

export const WriteSelectors = writeSelectorGenerator(testSelectors);
export const QuerySelectors = querySelectorGenerator(testSelectors);
