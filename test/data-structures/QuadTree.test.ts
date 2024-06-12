import { QuadNode, QuadTree } from '../../src';

// #todo QuadTree.test.ts

describe('Quad', () => {
  describe('normal', () => {});
  describe('swap bounds', () => {});
  describe('missing info', () => {});
});

describe('QuadNode', () => {
  describe('normal', () => {});
  describe('swap bounds', () => {});
  describe('missing info', () => {});
});

describe('QuadTree', () => {
  describe('add', () => {
    test('add in bounds', () => {
      const qtree = new QuadTree(0, 0, 100, 100);
      expect(qtree.add(new QuadNode('point', 10, 10))).toBe(true);
      expect(qtree.add(new QuadNode('corner point', 0, 0))).toBe(true);
      expect(qtree.add(new QuadNode('far corner point', 100, 100))).toBe(true);
      expect(qtree.add(new QuadNode('inside quad', 50, 50, 70, 70))).toBe(true);
      expect(qtree.add(new QuadNode('overflow quad', -50, -50, 10, 10))).toBe(
        true,
      );
      expect(qtree.add(new QuadNode('through quad', 20, -50, 40, 200))).toBe(
        true,
      );
    });

    test('reject out of bounds', () => {
      const qtree = new QuadTree(20, 20, 40, 40);
      expect(qtree.add(new QuadNode('point', -10, -10))).toBe(false);
      expect(qtree.add(new QuadNode('quad past left', -50, -50, -10, 20))).toBe(
        false,
      );
      expect(qtree.add(new QuadNode('quad past top', -50, -50, 20, -10))).toBe(
        false,
      );
      expect(
        qtree.add(new QuadNode('quad past right', 110, 10, 200, 200)),
      ).toBe(false);
      expect(
        qtree.add(new QuadNode('quad past bottom', 10, 110, 200, 200)),
      ).toBe(false);
    });
  });

  describe('get', () => {});

  describe('division', () => {
    describe('split at size limit', () => {});
    describe('move values to subdivisions', () => {});
  });

  describe('size limits', () => {});

  describe('depth limits', () => {});
});
