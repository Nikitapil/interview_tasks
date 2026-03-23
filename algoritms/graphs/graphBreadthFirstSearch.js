// find the way

const graph = {
  a: ['b', 'c'],
  b: ['e'],
  c: ['d', 'f'],
  d: ['e'],
  e: ['g'],
  f: ['e'],
  g: []
}

const bfs = (graph, start, end) => {
  const visited = new Set()
  const queue = [start]

  while (queue.length > 0) {
    const node = queue.shift()
    visited.add(node)
    const current = graph[node]
    for (let i = 0; i < current.length; i++) {
      if (current[i] === end) {
        return visited
      } else if (!visited.has(current[i])) {
        queue.push(current[i])
      }
    }
  }

  return visited
}

console.log(bfs(graph, 'a', 'g'));