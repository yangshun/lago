import heapSort from '../heapSort';
import sortingInputs from '../../utils/sortingInputs';

describe('heapSort', () => {
  sortingInputs({ algorithm: heapSort, test, expect });
});
