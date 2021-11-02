type Vertex = string;
type Weight = number;
type Graph = Record<string, Record<string, Weight>>;

/**
 * If a target is not provided, finds the single-source shortest path distance from the source vertex with positive or negative edge weights
 * (but with no negative weight cycles).
 * Else, it returns the shortest path as well as its distance from source vertex to target vertex.
 * In the case of negative weight cycles, if target is defined, then negative infinity and empty array path will be returned,
 * else, all distances from A will be returned with negative infinity.
 *
 * @param {Graph} graph Vertex with its fields being the neighboring vertices and value being the weight from vertex to neighboring vertices
 * @param {Vertex} source Starting vertex in graph
 * @param {Vertex} target Ending vertex in graph
 * @return {Record<string, number> | [number, Array<Vertex>]} An object mapping of the distance from the source vertex or an array containing the distance
 * and an array containing the path from source to target vertex
 */
function bellmanFord(
  graph: Graph,
  source: Vertex,
  target?: Vertex,
): Record<string, number> | [number, Array<Vertex>] {
  const vertices = Object.keys(graph);
  // if graph is empty, immediately return
  if (vertices.length === 0) {
    return target ? [0, []] : {};
  }

  if (!vertices.includes(source) || (target && !vertices.includes(target))) {
    return target ? [-Infinity, []] : {};
  }

  const distances = getDistances(vertices, source);
  const predecessor = getPredecessor(vertices);

  // requires only n - 1 iteration
  for (let i = 0; i < vertices.length - 1; i++) {
    for (let startVertex of vertices) {
      const neighbors = graph[startVertex];
      for (let endVertex in neighbors) {
        const weight = graph[startVertex][endVertex];
        // relaxation
        if (distances[startVertex] + weight < distances[endVertex]) {
          distances[endVertex] = distances[startVertex] + weight;
          predecessor[endVertex] = startVertex;
        }
      }
    }
  }

  // checks for any negative weight cycles. If true returns all distances as -Infinity as a sign negative weight cycles
  for (let startVertex of vertices) {
    const neighbors = graph[startVertex];
    for (let endVertex in neighbors) {
      const weight = graph[startVertex][endVertex];
      // if relaxation occurs here, negative weight cycles detected
      if (distances[startVertex] + weight < distances[endVertex]) {
        return target ? [-Infinity, []] : negativeWeightCycles(vertices);
      }
    }
  }

  if (!target) {
    return distances;
  }

  const shortestDistance = distances[target];
  const path = getPath(predecessor, source, target);
  return [shortestDistance, path];
}

/**
 * Returns an Object mapping of nodes to distance with values all being negative infinity to represent a negative weight cycle being present.
 *
 * @param {Array<Vertex>} vertices An array of all vertices in the graph
 * @return {Record<string, number>} An object mapping of nodes with values being negative infinity
 */
function negativeWeightCycles(vertices: Array<Vertex>): Record<string, number> {
  return vertices.reduce((acc, curr) => {
    acc[curr] = -Infinity;
    return acc;
  }, {} as Record<string, number>);
}

/**
 * Initializes the distance mapping from source to rest of the vertices.
 *
 * @param {Array<Vertex>} vertices An array of all vertices in the graph
 * @param {Vertex} source Starting vertex in graph
 * @return {Record<string, number>} An object mapping of source to rest of vertices
 */
function getDistances(
  vertices: Array<Vertex>,
  source: Vertex,
): Record<string, number> {
  const distances = vertices.reduce((acc, curr) => {
    acc[curr] = Infinity;
    return acc;
  }, {} as Record<string, number>);
  distances[source] = 0;
  return distances;
}

/**
 * Returns an array denoting the path from start vertex to end vertex.
 *
 * @param {Object} predecessor Mapping of child vertex pointing to parent vertex
 * @param {Vertex} source Starting vertex in graph
 * @param {Vertex} target End vertex in graph
 * @return {Array<String>} An array containing the path from source to target vertex
 */
function getPath(
  predecessor: Record<string, string | undefined>,
  source: Vertex,
  target: Vertex,
): Array<string> {
  const path = [target];
  while (target && target !== source) {
    const next = predecessor[target];
    target = next ?? source; // if next is undefined, it reaches source
    path.push(target);
  }
  return path.reverse();
}

/**
 * Generates a default object mapping of child vertex pointing to parent vertex which will be defaulted to undefined initially.
 *
 * @param {Array<Vertex>} vertices An array of all vertices in the graph
 * @return {Record<string, Vertex | undefined>} An object mapping of child vertex pointing to parent vertex
 */
function getPredecessor(
  vertices: Array<Vertex>,
): Record<string, Vertex | undefined> {
  const predecessor = {} as Record<string, Vertex | undefined>;
  for (let vertex of vertices) {
    predecessor[vertex] = undefined;
  }
  return predecessor;
}

export default bellmanFord;
