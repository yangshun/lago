import GraphNode from './GraphNode';

class GraphEdge<T> {
  public nodeA: GraphNode<T>;

  public nodeB: GraphNode<T>;

  public weight: number;

  /**
   * Initialize an Edge.
   * @param {GraphNode} nodeA start node
   * @param {GraphNode} nodeB end node
   * @param {number} weight weight of the edge A-B.
   */
  constructor(nodeA: GraphNode<T>, nodeB: GraphNode<T>, weight: number = 0) {
    this.nodeA = nodeA;
    this.nodeB = nodeB;
    this.weight = weight;
  }

  /**
   * Get Edge Key.
   * @return {String} The key for given Edge.
   */
  getKey() {
    return `${this.nodeA.value}_${this.nodeB.value}`;
  }
}

export default GraphEdge;
