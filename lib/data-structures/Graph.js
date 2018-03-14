class Graph {
  /**
   * @constructor
   * @param {Array} edges Array with graph edges.
   * @param {Number} nodesCount Number of nodes in graph.
   */
  constructor(edges, nodesCount) {
    this.edges = edges || [];
    this.nodesCount = nodesCount || 0;
  }

  getEdgesLength() {
    return this.edges.length;
  }
}

export default Graph;
