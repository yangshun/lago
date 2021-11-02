import _ from 'lodash';
import { AVLTree, BinaryTreeNode } from '../../src';

import { binarySearchTreeTests } from './BinarySearchTree.test';

describe('AvtTree', () => {
  describe('normal binary test', () => {
    // Test against normal BST test cases
    binarySearchTreeTests(describe, test);
  });

  describe('self-balancing', () => {
    describe('insert', () => {
      test('LL rotation', () => {
        const tree = new AVLTree();
        tree.insert(10);
        tree.insert(9);
        tree.insert(8);
        expect(tree.height()).toBe(1);

        tree.insert(11);
        expect(tree.height()).toBe(2);
      });

      test('LR rotation', () => {
        const tree = new AVLTree();
        tree.insert(10);
        tree.insert(8);
        tree.insert(9);
        expect(tree.height()).toBe(1);

        tree.insert(11);
        expect(tree.height()).toBe(2);
      });

      test('RR rotation', () => {
        const tree = new AVLTree();
        tree.insert(8);
        tree.insert(9);
        tree.insert(10);
        expect(tree.height()).toBe(1);

        tree.insert(11);
        expect(tree.height()).toBe(2);
      });

      test('RL rotation', () => {
        const tree = new AVLTree();
        tree.insert(8);
        tree.insert(10);
        tree.insert(9);
        expect(tree.height()).toBe(1);

        tree.insert(11);
        expect(tree.height()).toBe(2);
      });
    });

    describe('delete', () => {
      test('LL rotation', () => {
        const tree = new AVLTree();
        tree.insert(5);
        tree.insert(3);
        tree.insert(8);
        tree.insert(4);
        tree.insert(2);
        tree.insert(10);
        tree.insert(1);
        expect(tree.height()).toBe(3);

        tree.delete(10);
        expect(tree.height()).toBe(2);
      });

      test('LR rotation', () => {
        const tree = new AVLTree();
        tree.insert(100);
        tree.insert(200);
        tree.insert(10);
        tree.insert(1);
        tree.insert(50);
        tree.insert(1000);
        tree.insert(40);
        tree.insert(60);
        expect(tree.height()).toBe(3);

        tree.delete(1000);
        expect(tree.height()).toBe(2);
      });
    });

    describe('duplicate', () => {
      test.skip('test for duplicates in AVL', () => {
        expect(true).toBe(true);
      });
    });

    test.skip('random stress test', () => {
      const assertAvl = (node: BinaryTreeNode<number> | null) => {
        if (!node) return;

        // assert BST property
        if (node.left)
          expect(node.value).toBeGreaterThanOrEqual(node.left.value);
        if (node.right) expect(node.value).toBeLessThan(node.right.value);

        // assert balancing property
        const balance =
          (node.left ? node.left!.height() + 1 : 0) -
          (node.right ? node.right?.height() + 1 : 0);
        expect(Math.abs(balance)).toBeLessThanOrEqual(1);

        assertAvl(node.left);
        assertAvl(node.right);
      };

      const tree = new AVLTree();

      // Build a tree of 100 random numbers, assert the tree is AVL tree
      _.times(100, () => {
        tree.insert(Math.floor(Math.random() * 50));

        assertAvl(tree.root);
      });

      // Delete off 50 random numbers, assert the tree is AVL the whole time
      const arr = tree.inOrder();
      _.times(50, () => {
        const index = Math.floor(Math.random() * arr.length);
        tree.delete(arr[index]);
        arr.splice(index, 1);

        assertAvl(tree.root);
      });
    });
  });
});
