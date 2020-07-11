<h1 align="center">Lago</h1>

<div align="center">
  <img src="assets/logo.svg" alt="Lago logo" width="400"/>
  <br>
  <p>
    <em>Credits: Illustration by <a href="https://undraw.co/">unDraw</a></em>
  </p>
</div>

![Build Status Badge](https://circleci.com/gh/yangshun/lago/tree/master.svg?style=shield&circle-token=e360bef41a5f3f6a9c914241f388c93aa7ae6bf8)

Data Structures and Algorithms library for JavaScript. Pretty much still WIP but some are available for viewing.

## Contents

#### Data Structures

- [List](src/data-structures/List.js)
- [Stack](src/data-structures/Stack.js)
- [Queue](src/data-structures/Queue.js)
- [Double-ended Queue](src/data-structures/Deque.js)
- [Trie](src/data-structures/Trie.js)
- [Binary Tree](src/data-structures/BinaryTree.js)
- [Binary Search Tree](src/data-structures/BinarySearchTree.js)
- [N-D array](src/data-structures/NDArray.js)
- [Bloom Filter](src/data-structures/BloomFilter.js)
- [Disjoint-set](src/data-structures/DisjointSet.js)
- [Counter](src/data-structures/Counter.js)
- AVL Tree (TODO)
- Suffix Tree (TODO)
- Segment Tree (TODO)
- Graphs (TODO)

#### Algorithms

- [Binary Search](src/algorithms/binarySearch.js)
- [Quickselect](src/algorithms/quickSelect.js)
- [Merge Sort](src/algorithms/mergeSort.js)
- [Quicksort](src/algorithms/quickSort.js)
- [Heap Sort](src/algorithms/heapSort.js)
- [Topological Sort](src/algorithms/topologicalSort.js)
- [Breadth-first Search](src/algorithms/breadthFirstSearch.js)
- [Depth-first Search](src/algorithms/depthFirstSearch.js)
- Djikstra's Algorithm (TODO)
- Bellman-Ford Algorithm (TODO)
- Floyd Warshall Algorithm (TODO)

## Development

```sh
$ yarn install
$ yarn test --watch
```

Before pushing/submitting PR

```sh
$ yarn check-all
```
