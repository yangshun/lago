class BinaryTreeNode {
  constructor(value) {
    this._value = value;
    this._left = null;
    this._right = null;
  }

  getValue() {
    return this._value;
  }

  setValue(value) {
    this._value = value;
  }

  getLeft() {
    return this._left;
  }

  setLeft(leftChild) {
    this._left = leftChild;
  }

  getRight() {
    return this._right;
  }

  setRight(rightChild) {
    this._right = rightChild;
  }

  size() {
    let result = 1;
    result += this._right ? this._right.size() : 0;
    result += this._left ? this._left.size() : 0;
    return result;
  }

  height() {
    let result = 0;
    if (this._right) {
      result = this._right.height() + 1;
    }
    if (this._left) {
      result = Math.max(result, this._left.height() + 1);
    }
    return result;
  }

  isLeaf() {
    return !(this._left || this._right);
  }
}

export default BloomFilter;
