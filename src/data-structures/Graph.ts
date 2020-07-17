import GraphNode from './GraphNode';
import GraphEdge from './GraphEdge';

class Graph<T> {
  public nodes: any;

  public edges: any;

  public isDirected: Boolean;

  /**
   * Initialize Graph with a boolean value for directed-ness.
   * @param {Boolean} isDirected decides whether the graph is directed or not.
   */
  constructor(isDirected: Boolean = false) {
    this.nodes = {};
    this.edges = {};
    this.isDirected = isDirected;
  }

  /**
   * Add a Node to the Graph.
   * @param {GraphNode} newNode The node to be added to the Graph.
   */
  addNode(newNode: GraphNode<T>) {
    this.nodes[newNode.value] = newNode;
  }

  /**
   * Add an Edge to the Graph
   * @param {GraphEdge} edge The Edge to be added to the graph.
   */
  addEdge(edge: GraphEdge<T>) {
    const startNode = edge.nodeA;
    const endNode = edge.nodeB;

    if (!this.nodes[startNode.value]) {
      this.addNode(startNode);
    }
    if (!this.nodes[endNode.value]) {
      this.addNode(endNode);
    }
    if (!this.edges[edge.getKey()]) {
      this.edges[edge.getKey()] = edge;
    }
    startNode.setAdj(endNode);
    if (!this.isDirected) {
      endNode.setAdj(startNode);
    }
  }

  /**
   * Get all the nodes in the Graph
   * @return {Array} The Array consisting of nodes
   */
  getAllNodes(): Array<T> {
    return Object.values(this.nodes);
  }

  /**
   * Get All the Edges in the graph
   * @return {Array} The Array consisting of all the edges in the graph
   */
  getAllEdges(): Array<T> {
    return Object.values(this.edges);
  }
}

export default Graph;
