import quickSort from '../quickSort';
import sortingInputs from '../../utils/sortingInputs.ts';

describe('quickSort', () => {
  sortingInputs({ algorithm: quickSort, test, expect });
});
