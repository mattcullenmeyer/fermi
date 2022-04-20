import { querySelectorGenerator } from './../../utils/testQueries';
import { writeSelectorGenerator } from '../../utils/testQueries';

export const testids = ['profileMenu', 'pageMenu'];

export const WriteSelectors = writeSelectorGenerator(testids);
export const QuerySelectors = querySelectorGenerator(testids);
