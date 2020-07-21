import GraphNode from './GraphNode';
import GraphEdge from './GraphEdge';

interface GraphNodes<T> {
  [key: string]: GraphNode<T>;
}

interface GraphEdges<T> {
  [key: string]: GraphEdge<T>;
}

class Graph<T> {
  private _nodes: GraphNodes<T>;

  private _edges: GraphEdges<T>;

  public isDirected: Boolean;

  /**
   * Initialize Graph with a boolean value for directed-ness.
   * @param {Boolean} isDirected decides whether the graph is directed or not.
   */
  constructor(isDirected: Boolean = false) {
    this._nodes = {};
    this._edges = {};
    this.isDirected = isDirected;
  }

  /**
   * Add a Node to the Graph.
   * @param {GraphNode<T>} newNode The node to be added to the Graph.
   */
  addNode(newNode: GraphNode<T>) {
    this._nodes[String(newNode.key)] = newNode;
  }

  /**
   * Add an Edge to the Graph
   * @param {GraphEdge<T>} edge The Edge to be added to the graph.
   */
  addEdge(edge: GraphEdge<T>) {
    const startNode = edge.nodeA;
    const endNode = edge.nodeB;

    if (!this._nodes[startNode.key]) {
      this.addNode(startNode);
    }

    if (!this._nodes[endNode.key]) {
      this.addNode(endNode);
    }

    if (!this._edges[edge.getKey()]) {
      this._edges[edge.getKey()] = edge;
    }

    startNode.setAdj(endNode);

    if (!this.isDirected) {
      endNode.setAdj(startNode);
    }
  }

  /**
   * Get all the nodes in the Graph
   * @return {Array<GraphNode<T>>} The Array consisting of nodes
   */
  getAllNodes(): Array<GraphNode<T>> {
    return Object.values(this._nodes);
  }

  /**
   * Get All the Edges in the graph
   * @return {Array<GraphEdge<T>>} The Array consisting of all the edges in the graph
   */
  getAllEdges(): Array<GraphEdge<T>> {
    return Object.values(this._edges);
  }
}

export default Graph;
