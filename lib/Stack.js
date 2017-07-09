class Stack {
    constructor() {
        this.items = [];
    }
    push(el) {
        this.items.push(el);
    }
    pop() {
        return this.items.pop();
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    peek() {
        return this.items[this.items.length - 1];
    }
}

module.exports = Stack;
