import { mergeSort } from '../../src';
import sortingInputs from '../utils/sortingInputs';

describe('mergeSort', () => {
  sortingInputs({ algorithm: mergeSort, test, expect });
});
