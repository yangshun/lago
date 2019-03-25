<h1 align="center">Lago</h1>

<div align="center">
  <img src="assets/logo.svg" alt="Lago logo" width="400"/>
  <br>
  <p>
    <em>Credits: Illustration by <a href="https://undraw.co/">Undraw</a></em>
  </p>
</div>

![Build Status Badge](https://circleci.com/gh/yangshun/lago/tree/master.svg?style=shield&circle-token=e360bef41a5f3f6a9c914241f388c93aa7ae6bf8)

Data Structures and Algorithms library for JavaScript. Pretty much still WIP but some are available for viewing.

## Contents

#### Data Structures

- [List](lib/data-structures/List.js)
- [Stack](lib/data-structures/Stack.js)
- [Queue](lib/data-structures/Queue.js)
- [Double-ended Queue](lib/data-structures/Deque.js)
- [Trie](lib/data-structures/Trie.js)
- [Binary Search Tree](lib/data-structures/BinarySearchTree.js)
- [N-D array](lib/data-structures/NDArray.js)
- [Bloom Filter](lib/data-structures/BloomFilter.js)
- [Disjoint-set](lib/data-structures/DisjointSet.js)
- [Counter](lib/data-structures/Counter.js)
- Binary Tree (TODO)
- AVL Tree (TODO)
- Suffix Tree (TODO)
- Segment Tree (TODO)
- Graphs (TODO)

#### Algorithms

- [Binary Search](lib/algorithms/binarySearch.js)
- [Quickselect](lib/algorithms/quickSelect.js)
- [Merge Sort](lib/algorithms/mergeSort.js)
- [Quicksort](lib/algorithms/quickSort.js)
- [Heap Sort](lib/algorithms/heapSort.js)
- [Topological Sort](lib/algorithms/topologicalSort.js)
- [Breadth-first Search](lib/algorithms/breadthFirstSearch.js)
- [Depth-first Search](lib/algorithms/depthFirstSearch.js)
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
