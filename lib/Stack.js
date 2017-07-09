class Stack {
  constructor() {
    this._items = [];
  }

  push(el) {
    this._items.push(el);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this._items.pop();
  }

  size() {
    return this._items.length;
  }

  isEmpty() {
    return this._items.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this._items[this._items.length - 1];
  }
}

export default Stack;
