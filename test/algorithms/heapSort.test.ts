import { heapSort } from '../../src';
import sortingInputs from '../utils/sortingInputs';

describe('heapSort', () => {
  sortingInputs({ algorithm: heapSort, test, expect });
});
