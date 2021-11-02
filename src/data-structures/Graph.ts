class Graph<T, V> {
  private _nodes: Map<
    T,
    {
      to: Map<T, V>;
      // Maintain a set of incoming nodes so that removal of nodes is more convenient.
      from: Set<T>;
    }
  >;

  /**
   * Initialize a Hash-based graph.
   */
  constructor() {
    this._nodes = new Map();
  }

  /**
   * Add a node to the graph.
   * @param {T} value The value of the node to be added.
   */
  addNode(value: T): this {
    if (this._nodes.has(value)) {
      return this;
    }

    this._nodes.set(value, {
      to: new Map<T, V>(),
      from: new Set<T>(),
    });

    return this;
  }

  /**
   * Removes a node from the graph.
   * @param {T} value The node to be removed.
   */
  removeNode(value: T): this {
    const incoming = this._getIncomingNodes(value);
    incoming.forEach((incomingNode) => {
      this.removeEdge(incomingNode, value);
    });

    this._nodes.delete(value);
    return this;
  }

  /**
   * Get the number of nodes in the graph.
   */
  get size(): number {
    return this._nodes.size;
  }

  /**
   * Add an edge to the graph.
   * @param {T} valueA The first node of the edge.
   * @param {T} valueB The second node of the edge.
   * @param {V} weight The weight of the edge.
   */
  addEdge(valueA: T, valueB: T, weight: V): this {
    this.addNode(valueA);
    this.addNode(valueB);
    const nodeA = this._nodes.get(valueA);
    (nodeA?.to as Map<T, V>).set(valueB, weight);
    (this._nodes.get(valueB)?.from as Set<T>).add(valueA);
    return this;
  }

  /**
   * Removes an edge from the graph.
   * @param {T} valueA The first node of the edge.
   * @param {T} valueB The second node of the edge.
   */
  removeEdge(valueA: T, valueB: T): this {
    const nodeA = this._nodes.get(valueA)?.to;
    if (nodeA == null) {
      return this;
    }
    nodeA.delete(valueB);

    (this._nodes.get(valueB)?.from as Set<T>).delete(valueA);
    return this;
  }

  /**
   * Get weight of an edge.
   * @param {T} valueA The first node of the edge.
   * @param {T} valueB The second node of the edge.
   */
  getEdgeWeight(valueA: T, valueB: T): V | undefined {
    const nodeA = this._nodes.get(valueA)?.to;
    if (nodeA == null) {
      return undefined;
    }

    return nodeA.get(valueB);
  }

  /**
   * Test if there is an edge from node A to B.
   * @param {T} valueA The first node of the edge.
   * @param {T} valueB The second node of the edge.
   */
  isAdjacent(valueA: T, valueB: T): boolean {
    const neighbors = this.getNeighbors(valueA);
    return neighbors.includes(valueB);
  }

  /**
   * Get the neighbors of a node.
   * @param {T} value The value of the node.
   */
  getNeighbors(value: T): ReadonlyArray<T> {
    const neighbors = this._nodes.get(value)?.to;
    return Array.from(neighbors != null ? neighbors.keys() : []);
  }

  /**
   * Get the nodes which has an edge to the node.
   * @param {T} value The value of the node.
   */
  private _getIncomingNodes(value: T): ReadonlyArray<T> {
    const incoming = this._nodes.get(value)?.from;
    return Array.from(incoming != null ? incoming : []);
  }
}

export default Graph;
