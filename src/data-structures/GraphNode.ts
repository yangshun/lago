class GraphNode<T> {
  public value: T;

  public adjNodes: any;

  /**
   * Initialize Graph Node.
   * @param {*} value The value to be stored in the graph node.
   */
  constructor(value: T) {
    if (value === undefined) {
      throw new TypeError("Node value can't be undefined");
    } else if (!value) {
      throw new Error("Node value can't be null");
    }
    this.value = value;
    this.adjNodes = new Array<GraphNode<T>>();
  }

  /**
   * Set Adjacent node to current node.
   * @param {GraphNode<T>} node node to be set as adjacent of the current node
   */
  setAdj(node: GraphNode<T>) {
    this.adjNodes.push(node);
  }

  /**
   * Check if current node is connected to a given node.
   * @param {GraphNode} target The node to search for in the neighbors of current node.
   * @return {Boolean} True if given node is a neighbor, false if otherwise.
   */
  hasNeighbor(target: GraphNode<T>): Boolean {
    const neighbors: Array<GraphNode<T>> = this.adjNodes;
    const res = neighbors.find(node => node.value === target.value);
    if (res) {
      return true;
    }
    return false;
  }

  /**
   * Get all neighbors of the current graph node.
   * @return {Array} All the nodes connected to given node.
   */
  getAllNeighbors(): Array<T> {
    return this.adjNodes;
  }
}

export default GraphNode;
