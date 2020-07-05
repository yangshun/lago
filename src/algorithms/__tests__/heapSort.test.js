import heapSort from '../heapSort';
import sortingInputs from '../../utils/sortingInputs.ts';

describe('heapSort', () => {
  sortingInputs({ algorithm: heapSort, test, expect });
});
