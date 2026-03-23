const graph = {
  a: { b: 3, c: 1 },
  b: { e: 6 },
  c: { d: 2, f: 9 },
  d: { e: 3 },
  e: { g: 4 },
  f: { e: 12 },
  g: {}
}

const dijkstra = (graph, start) => {
  const distance = {}
  const visited = new Set()

  for (const vertex in graph) {
    distance[vertex] = Infinity
  }

  distance[start] = 0

  while (visited.size < Object.keys(graph).length) {
    let closestVertex = null;
    let smallestDist = Infinity


    for (const vertex in distance) {
      if (!visited.has(vertex) && distance[vertex] < smallestDist) {
        smallestDist = distance[vertex]
        closestVertex = vertex
      }
    }

    if (closestVertex === null) {
      break
    }

    visited.add(closestVertex)

    for (const neighbour in graph[closestVertex]) {
      const weight = graph[closestVertex][neighbour]
      const newWeight = distance[closestVertex] + weight

      if (newWeight < distance[neighbour]) {
        distance[neighbour] = newWeight
      }
    }
  }

  return distance
}

console.log(dijkstra(graph, 'a'))