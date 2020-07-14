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

- [List](src/data-structures/List.ts)
- [Stack](src/data-structures/Stack.ts)
- [Queue](src/data-structures/Queue.ts)
- [Double-ended Queue](src/data-structures/Deque.ts)
- [Trie](src/data-structures/Trie.ts)
- [Binary Tree](src/data-structures/BinaryTree.ts)
- [Binary Search Tree](src/data-structures/BinarySearchTree.ts)
- [N-D array](src/data-structures/NDArray.ts)
- [Bloom Filter](src/data-structures/BloomFilter.ts)
- [Disjoint-set](src/data-structures/DisjointSet.ts)
- [Counter](src/data-structures/Counter.ts)
- AVL Tree (TODO)
- Suffix Tree (TODO)
- Segment Tree (TODO)
- Graphs (TODO)

#### Algorithms

- [Binary Search](src/algorithms/binarySearch.ts)
- [Quickselect](src/algorithms/quickSelect.ts)
- [Merge Sort](src/algorithms/mergeSort.ts)
- [Quicksort](src/algorithms/quickSort.ts)
- [Heap Sort](src/algorithms/heapSort.ts)
- [Topological Sort](src/algorithms/topologicalSort.ts)
- [Breadth-first Search](src/algorithms/breadthFirstSearch.ts)
- [Depth-first Search](src/algorithms/depthFirstSearch.ts)
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
