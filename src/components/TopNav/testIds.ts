import {
  querySelectorGenerator,
  writeSelectorGenerator,
} from '../../utils/testQueries';

export const testIds = {
  profileMenu: null,
  pageMenu: null,
};

export const WriteSelectors = writeSelectorGenerator(testIds);
export const QuerySelectors = querySelectorGenerator(testIds);
