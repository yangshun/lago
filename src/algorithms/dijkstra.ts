import PriorityQueue from '../data-structures/PriorityQueue';
type Vertex = string;
type Weight = number;
interface DirectedWeightedGraph {
  [vertex: string]: { [vertex: string]: Weight };
}
/**
 * Performs Dijkstra's Algorithm on a graph; giving the path form source to destination with the smallest cost
 * @param {DirectedWeightedGraph} graph mapping of vertex to each neighboring vertex and corresponding weights
 * @param {Vertex} source starting point in graph
 * @param {Vertex} destination ending point in graph
 * @returns {Array<Vertex>} the path from source to destination with the least cost
 */
function dijkstraAlgorithm(
  graph: DirectedWeightedGraph,
  source: Vertex,
  destination: Vertex,
): Array<Vertex> {
  // If the graph doesn't have a start and an end there is no solution
  if (graph[source] === undefined || graph[destination] === undefined)
    return [];

  let currentVertex: Vertex = null as any as Vertex;
  const verticesToVisit = new PriorityQueue<Vertex>(
    (a, b) => graph[currentVertex][b] - graph[currentVertex][a],
  );
  // const numVertices = Object.keys(graph).length;
  const previousVertices: { [from: string]: Vertex } = {}; //Keep track of best path for each vertex
  const visitedVertices = new Set<Vertex>();
  const distances = Array.from(Object.keys(graph)).reduce((obj, [vertex]) => {
    obj[vertex] = Infinity;
    return obj;
  }, {} as { [vertex: string]: number });

  // Start from source
  distances[source] = 0;
  verticesToVisit.enqueue(source);

  // While I have not reached destination
  while (!visitedVertices.has(destination)) {
    //Get next vertex
    currentVertex = verticesToVisit.dequeue();

    // If there is no more vertices to visit then there is no solution
    if (currentVertex === undefined) {
      return [];
    }

    for (const otherVertex in graph[currentVertex]) {
      // If I have not seen this vertex before, set to be visited later
      if (!visitedVertices.has(otherVertex)) {
        verticesToVisit.enqueue(otherVertex);
      }

      const newlyFoundDistance =
        distances[currentVertex] + graph[currentVertex][otherVertex];

      if (newlyFoundDistance < distances[otherVertex]) {
        distances[otherVertex] = newlyFoundDistance;
        previousVertices[otherVertex] = currentVertex;
      }
    }

    //Mark this vertex as visited
    visitedVertices.add(currentVertex);
  }

  // Get best path from source to destination
  const path = [];
  currentVertex = destination;
  while (currentVertex !== source) {
    path.push(currentVertex);
    currentVertex = previousVertices[currentVertex];
  }
  path.push(source);
  return path.reverse();
}
export default dijkstraAlgorithm;
