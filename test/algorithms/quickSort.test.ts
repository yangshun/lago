import { quickSort } from '../../src';
import sortingInputs from '../utils/sortingInputs';

describe('quickSort', () => {
  sortingInputs({ algorithm: quickSort, test, expect });
});
