import mergeSort from '../mergeSort';
import sortingInputs from '../../utils/sortingInputs.ts';

describe('mergeSort', () => {
  sortingInputs({ algorithm: mergeSort, test, expect });
});
