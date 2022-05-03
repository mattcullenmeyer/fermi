import {
  querySelectorGenerator,
  writeSelectorGenerator,
} from '../../utils/testQueries';

export const testIds = {
  emailTextField: null,
  passwordTextField: null,
};

export const WriteSelectors = writeSelectorGenerator(testIds);
export const QuerySelectors = querySelectorGenerator(testIds);
