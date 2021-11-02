type Graph = {
  [vertex: string]: { [vertex: string]: number };
};

/**
 * Finds shortest path in a directed weighted graph with positive or negative edge weights (but with no negative cycles) between each edge
 *
 * @param {Graph} graph mapping of vertex to each neighboring vertex and corresponding weights
 * @returns {{[vertex: string]: {[vertex: string]: number;}}}
 */
export default function floydWarshallAlgorithm(graph: Graph): {
  [vertex: string]: { [vertex: string]: number };
} {
  // Create an object of sive V * V such that distnace[fromVertex][toVertex] = shortestPath. It is a matrix indexable by vertex
  const distances = Object.keys(graph).reduce((obj, vertex) => {
    obj[vertex] = Object.keys(graph).reduce((obj2, vertexneighbors) => {
      obj2[vertexneighbors] = Infinity;
      return obj2;
    }, {} as { [vertex: string]: number });
    return obj;
  }, {} as { [vertex: string]: { [vertex: string]: number } });

  //Set distance from self to 0
  for (const vertex in graph) {
    distances[vertex][vertex] = 0;
  }

  // Set each edge to other edge to be the weight between them
  for (const vertex in graph) {
    const neighboringVertices = graph[vertex];
    for (const neighborVertex in neighboringVertices) {
      distances[vertex][neighborVertex] = graph[vertex][neighborVertex];
    }
  }

  // Go through graph and update distances if a shorter path is found
  for (let k in graph) {
    for (let j in graph) {
      for (let i in graph) {
        if (distances[i][j] > distances[i][k] + distances[k][j])
          distances[i][j] = distances[i][k] + distances[k][j];
      }
    }
  }
  return distances;
}
