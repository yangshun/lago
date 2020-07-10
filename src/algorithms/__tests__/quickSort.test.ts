import quickSort from '../quickSort';
import sortingInputs from '../../utils/sortingInputs';

describe('quickSort', () => {
  sortingInputs({ algorithm: quickSort, test, expect });
});
