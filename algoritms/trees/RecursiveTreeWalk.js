const expectedSum = 59

const tree = [{
  value: 5,
  children: [
    {
    value: 4,
    children: [
      { value: 7, children: [] },
      { value: 11, children: [{ value:5, children: [] }] }
    ]
  },
    {
      value: 3,
      children: [{ value: 4, children: [] }]
    },
    {
      value: 7,
      children: [
        { value: 1, children: [] },
        { value: 12, children: [] }
      ]
    }
  ]
}]

const recursiveSumTree = (tree) => {
  let sum = 0
  if (!tree.length) {
    return sum
  }
  tree.forEach(node => {
    sum += node.value + recursiveSumTree(node.children)
  })
  return sum
}

const iterativeSumTree = (tree) => {
  let sum = 0;
  const stack = [...tree];

  while (stack.length) {
    const node = stack.pop()
    sum+=node.value
    stack.push(...node.children)
  }

  return sum
}

console.log(recursiveSumTree(tree))
console.log(iterativeSumTree(tree))