class GraphNode<T> {
  private _value: T;

  public _neighbors: Array<GraphNode<T>>;

  /**
   * Initialize Graph Node.
   * @param {T} value The value to be stored in the graph node.
   */
  constructor(value: T) {
    if (value === undefined || value === null) {
      throw new TypeError('Node value cannot be undefined or null');
    }

    this._value = value;
    this._neighbors = [];
  }

  get value(): T {
    return this._value;
  }

  get key(): string {
    return String(this._value);
  }

  /**
   * Get all neighbors of the current graph node.
   * @return {Array} All the nodes connected to given node.
   */
  get neighbors(): Array<GraphNode<T>> {
    return this._neighbors;
  }

  /**
   * Associate given node with another node as immediate neighbor.
   * @param {GraphNode} node node to be set as adjacent of the current node.
   */
  setAdj(node: GraphNode<T>) {
    this._neighbors.push(node);
  }

  /**
   * Check if current node is connected to a given node.
   * @param {GraphNode} target The node to search for in the neighbors of current node.
   * @return {Boolean} True if given node is a neighbor, false if otherwise.
   */
  hasNeighbor(target: GraphNode<T>): Boolean {
    return !!this._neighbors.find(node => node.value === target.value);
  }
}

export default GraphNode;
