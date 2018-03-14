class GraphEdge {
  /**
   *
   * @constructor
   * @param {Number} e Start node of edge.
   * @param {Number} v End node of edge.
   * @param {Number} distance Distance of edge in graph.
   */
  constructor(e, v, distance) {
    this.from = e;
    this.to = v;
    this.distance = distance;
  }
}

export default GraphEdge;
