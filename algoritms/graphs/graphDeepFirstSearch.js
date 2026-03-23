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

const dfs = (graph, start, end) => {
  const visited = new Set()
  const stack = [start]

  while (stack.length > 0) {
    const node = stack.pop()
    visited.add(node)
    const current = graph[node]
    for (let i = 0; i < current.length; i++) {
      if (current[i] === end) {
        return visited
      } else if (!visited.has(current[i])) {
        stack.unshift(current[i])
      }
    }
  }

  return visited
}

console.log(dfs(graph, 'a', 'g'));