import SegmentTreeNode from './SegmentTreeNode';

export type MergeFunction<T> = (a: T, b: T) => T;

class SegmentTree<T> {
  root: SegmentTreeNode<T>;
  mergeFn: MergeFunction<T>;

  /**
   * @constructor
   * @param {Array<T>} seq
   * @param {MergeFunction<T>} mergeFn A function to combine or choose between two elements, such as sum, min, max, etc.
   */
  constructor(seq: Array<T>, mergeFn: MergeFunction<T>) {
    this.mergeFn = mergeFn;
    this.root = this._buildImpl(seq, 0, seq.length - 1);
  }

  /**
   * @param {Array<T>} seq
   * @param {number} from The starting index for this part of the tree
   * @param {number} to The ending index for this part of the tree
   * @return {SegmentTreeNode<T>}
   */
  protected _buildImpl(
    seq: Array<T>,
    from: number,
    to: number,
  ): SegmentTreeNode<T> {
    if (from === to) {
      return new SegmentTreeNode(seq[from], from, to);
    }

    // Like a binary tree, but based on index order
    // instead of the value sort order.
    const mid = Math.floor((from + to) / 2);

    const left = this._buildImpl(seq, from, mid);
    const right = this._buildImpl(seq, mid + 1, to);

    const node = new SegmentTreeNode<T>(
      this.mergeFn(left.value, right.value),
      from,
      to,
    );

    node.left = left;
    node.right = right;

    return node;
  }

  /**
   * Get the result of the mergeFn for a range of indexes.
   * @param {number} from Inclusive start index
   * @param {number} to Exclusive end index
   * @return {T | null}
   */
  query(from: number, to: number): T | null {
    return this._queryImpl(this.root, from, to);
  }

  /**
   * Get the result of the mergeFn for a range of indexes.
   * @param {SegmentTreeNode<T>} node Current node in the recursive search
   * @param {number} from Inclusive start index
   * @param {number} to Exclusive end index
   * @return {T | null}
   */
  protected _queryImpl(
    node: SegmentTreeNode<T>,
    from: number,
    to: number,
  ): T | null {
    // Node outside range
    if (node.to < from || to < node.from) {
      return null;
    }

    // Node entirely within range
    if (from <= node.from && node.to <= to) {
      return node.value;
    }

    // Partially with range? Well, let's check on the kids
    const leftValue =
      node.left !== null
        ? this._queryImpl(node.left as SegmentTreeNode<T>, from, to)
        : null;
    const rightValue =
      node.right !== null
        ? this._queryImpl(node.right as SegmentTreeNode<T>, from, to)
        : null;

    if (leftValue === null) {
      return rightValue;
    }

    if (rightValue === null) {
      return leftValue;
    }

    return this.mergeFn(leftValue, rightValue);
  }
}

/**
 * Thanks to LeetCode for the example and code that
 * helped me finally understand this structure!
 *
 * https://leetcode.com/articles/a-recursive-approach-to-segment-trees-range-sum-queries-lazy-propagation/
 */

export default SegmentTree;
