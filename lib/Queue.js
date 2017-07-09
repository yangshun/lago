class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(el) {
        this.items.push(el);
    }
    dequeue() {
        return this.items.shift();
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    front() {
        return this.items[0];
    }
    back() {
        return this.items[this.items.length - 1];
    }
}

module.exports = Queue;
