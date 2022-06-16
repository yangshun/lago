export default class Heap {
  private heap: number[] = [];
  static readonly HeapType = { Min: 'Min', Max: 'Max' } as const;
  private compare: (value1: number, value2: number) => boolean;
  constructor(type: typeof Heap.HeapType.Min | typeof Heap.HeapType.Max) {
    this.compare =
      type === Heap.HeapType.Min
        ? (value1: number, value2: number) => value1 < value2
        : (value1: number, value2: number) => value1 > value2;
  }
  get size(): number {
    return this.heap.length;
  }
  isEmpty(): boolean {
    return this.size === 0;
  }
  private getRightChildIndex(index: number): number {
    return 2 * index + 2;
  }
  private getLeftChildIndex(index: number): number {
    return 2 * index + 1;
  }
  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }
  private hasLeftChild(index: number): boolean {
    return this.getLeftChildIndex(index) < this.heap.length;
  }
  private hasRightChild(index: number): boolean {
    return this.getRightChildIndex(index) < this.heap.length;
  }
  private hasParent(index: number): boolean {
    return this.getParentIndex(index) >= 0;
  }

  private swap(index1: number, index2: number): void {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }
  peek(): number | null {
    return this.isEmpty() ? null : this.heap[0];
  }
  extract(): number | null {
    if (this.isEmpty()) return null;

    this.swap(0, this.size - 1);
    const result = this.heap.pop()!;
    this.heapifyDown();
    return result;
  }
  insert(value: number): void {
    this.heap.push(value);
    this.heapifyUp();
  }
  private heapifyUp(): void {
    let index = this.heap.length - 1;
    let parentIndex = this.getParentIndex(index);
    while (
      this.hasParent(index) &&
      this.compare(this.heap[index], this.heap[parentIndex])
    ) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }
  private heapifyDown(): void {
    let index = 0;
    let leftChildIndex = this.getLeftChildIndex(index);
    let rightChildIndex = this.getRightChildIndex(index);
    while (
      (this.hasLeftChild(index) &&
        !this.compare(this.heap[index], this.heap[leftChildIndex])) ||
      (this.hasRightChild(index) &&
        !this.compare(this.heap[index], this.heap[rightChildIndex]))
    ) {
      const comparableIndex =
        this.hasRightChild(index) &&
        !this.compare(this.heap[leftChildIndex], this.heap[rightChildIndex])
          ? rightChildIndex
          : leftChildIndex;
      this.swap(index, comparableIndex);
      index = comparableIndex;
      leftChildIndex = this.getLeftChildIndex(index);
      rightChildIndex = this.getRightChildIndex(index);
    }
  }
}
