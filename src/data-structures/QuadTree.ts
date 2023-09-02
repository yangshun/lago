export interface AbstractQuad {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

export class Quad implements AbstractQuad {
  constructor(left: number, top: number, right?: number, bottom?: number) {
    const l = left;
    const t = top;
    const r = right ?? left; // zero width for points
    const b = bottom ?? top; // zero height for points

    this.left = Math.min(l, r);
    this.top = Math.min(t, b);
    this.right = Math.max(l, r);
    this.bottom = Math.max(t, b);
  }

  intersects(op: Quad): Boolean {
    return (
      this.left <= op.right && // not too far left
      this.top <= op.bottom && // not too far up
      op.left <= this.right && // not too far right
      op.top <= this.bottom // not too far down
    );
  }

  distance(op: Quad) {
    if (this.intersects(op)) {
      return 0;
    }

    // Horizontal (closest edges)
    const closestX = Math.min(
      Math.abs(this.left - op.right),
      Math.abs(this.right - op.left),
    );
    if (
      (this.top >= op.top && this.top <= op.bottom) ||
      (op.top >= this.top && op.top <= this.bottom)
    ) {
      return closestX;
    }

    // Vertical (closest edges)
    const closestY = Math.min(
      Math.abs(this.top - op.bottom),
      Math.abs(this.bottom - op.top),
    );
    if (
      (this.left >= op.left && this.left <= op.right) ||
      (op.left >= this.left && op.left <= this.right)
    ) {
      return closestY;
    }

    // Diagonal (closest corner)
    return Math.sqrt(closestX ** 2 + closestY ** 2);
  }
}

export class QuadNode<T> extends Quad {
  value: T | undefined;

  constructor(
    value: T,
    left: number,
    top: number,
    right?: number,
    bottom?: number,
  ) {
    super(left, top, right, bottom);

    this.value = value ?? undefined;
  }
}

class QuadTree<T> {
  bounds: Quad;
  values: Set<QuadNode<T>>;
  subdivisions: Array<QuadTree<T>> | undefined = undefined;

  SIZE_LIMIT = 8;
  DEPTH_LIMIT = 8;
  depth = 0;

  /**
   * Create a QuadTree that covers an spatial area.
   * @param {number} left The x minimum.
   * @param {number} top The y minimum.
   * @param {number} right The x maximum.
   * @param {number} bottom The y maximum.
   */
  constructor(left = -1000, top = -1000, right = 1000, bottom = 1000) {
    this.bounds = new Quad(left, top, right, bottom);
    this.values = new Set<QuadNode<T>>();
  }

  setDepth(depth: number) {
    this.depth = depth;
  }

  setSizeLimit(size: number) {
    this.SIZE_LIMIT = size;
  }

  setDepthLimit(depth: number) {
    this.DEPTH_LIMIT = depth;
  }

  /**
   * Divide QuadTree into four equal quads.
   * Move all values to subdivisions for performance.
   */
  protected _subdivide() {
    const centerX = (this.bounds.left + this.bounds.right) / 2;
    const centerY = (this.bounds.top + this.bounds.bottom) / 2;

    this.subdivisions = [
      new QuadTree(this.bounds.left, this.bounds.top, centerX, centerY), // nw
      new QuadTree(centerX, this.bounds.top, this.bounds.right, centerY), // ne
      new QuadTree(centerX, centerY, this.bounds.right, this.bounds.bottom), // se
      new QuadTree(this.bounds.left, centerY, centerX, this.bounds.bottom), // sw
    ];

    // Copy configurations
    this.subdivisions.forEach((quad) => {
      quad.setDepth(this.depth + 1);
      quad.setSizeLimit(this.SIZE_LIMIT);
      quad.setDepthLimit(this.DEPTH_LIMIT);
    });

    // Move values
    this.values.forEach((node) => this.insert(node));
    this.values.clear();
  }

  /**
   * Insert value with positional data.
   * @param {QuadTree<T> | T} nodeOrValue
   * @param {number?} left
   * @param {number?} top
   * @param {number?} right
   * @param {number?} bottom
   * @return Boolean
   */
  insert(
    nodeOrValue: QuadNode<T> | T,
    left?: number,
    top?: number,
    right?: number,
    bottom?: number,
  ): Boolean {
    if (nodeOrValue instanceof QuadNode) {
      // QuadNode
      return this._insertImpl(nodeOrValue as QuadNode);
    }

    if (left !== undefined && top !== undefined) {
      // convenience QuadNode creation
      return this._insertImpl(
        new QuadNode(nodeOrValue, left, top, right, bottom)
      );
    }

    throw Error('value needs positional data to insert');
  }

  /**
   * Insert value with positional data.
   * @param {QuadTree<T>} node
   * @return Boolean
   */
  protected _insertImpl(node: QuadNode<T>): Boolean {
    if (!this.bounds.intersects(node)) {
      return false;
    }

    if (this.subdivisions) {
      return this.subdivisions.reduce(
        (added: Boolean, quad) => added || quad.insert(node),
        false,
      );
    }

    this.values.add(node);

    if (
      !this.subdivisions &&
      this.depth < this.DEPTH_LIMIT &&
      this.values.size === this.SIZE_LIMIT
    ) {
      this._subdivide();
    }

    return true;
  }

  query(
    quadOrLeft: Quad | number,
    top?: number,
    right?: number,
    bottom?: number,
  ): Array<QuadNode<T>> {
    if (quadOrLeft instanceof Quad) {
      return this._queryImpl(quadOrLeft);
    }

    return this._queryImpl(new Quad(quadOrLeft, top, right, bottom));
  }

  protected _queryImpl(range: Quad) {
    if (!this.bounds.intersects(range)) {
      return [];
    }

    if (this.subdivisions) {
      return this.subdivisions.reduce(
        (ret, quad) => [...ret, ...quad.query(range)],
        [] as Array<QuadNode<T>>,
      );
    }

    return Array.from(this.values).filter((value) => value.intersects(range));
  }

  closest(pointOrX: Quad | number, yOrCount: number, count?: number): QuadNode | Array<QuadNode> | null {
    const point = pointOrX instanceof Quad ? pointOrX : new Quad(pointOrX, yOrCount);
    const limit = (pointOrX instanceof Quad ? yOrCount : count) ?? 1;

    let closest = [];
    let closestDist = Infinity;

    function insertInOrder(value, dist) {
      const item = { ...value, dist };

      if (closest.length < limit) {
        closest.push(item);
        closest.sort((a, b) => a.dist - b.dist);

        closestDist = closest[closest.length - 1].dist;
        return;
      }

      for (let i = 0; i < limit; i++) {
        if (dist < closest[i].dist) {
          closest.splice(i, 0, item);
          break;
        }
      }

      closestDist = closest[closest.length - 1].dist;
    }

    function _closestImpl(node) {
      if (node.subdivisions) {
        node.subdivisions.forEach((sub) => {
          if (point.distance(sub.bounds) < closestDist) {
            _closestImpl(sub);
          }
        });

        return;
      }

      node.values.forEach((val) => {
        const dist = point.distance(val);
        if (dist < closestDist) {
          insertInOrder(val, dist);
        }
      });
    }

    _closestImpl(this);

    // If no count specified, return just an object
    const returnOne = (pointOrX instanceof Quad ? yOrCount : count) === undefined;
    if (returnOne) {
      return closest[0] ?? null;
    }

    return closest.slice(0, limit);
  }
}

export default QuadTree;
