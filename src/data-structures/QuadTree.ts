export interface AbstractQuad {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

export class Quad implements AbstractQuad {
  public left: number;
  public top: number;
  public right: number;
  public bottom: number;

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
    return !(
      (
        op.right < this.left || // too far left
        op.bottom < this.top || // too far up
        this.right < op.right || // too far right
        this.bottom < op.top
      ) // too far down
    );
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
  public bounds: Quad;
  public values: Set<QuadNode<T>>;
  public subdivisions: Array<QuadTree<T>> | undefined = undefined;

  public SIZE_LIMIT = 8;
  public DEPTH_LIMIT = 8;
  public depth = 0;

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

  public setDepth(depth: number) {
    this.depth = depth;
  }

  public setSizeLimit(size: number) {
    this.SIZE_LIMIT = size;
  }

  public setDepthLimit(depth: number) {
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
    this.subdivisions.forEach(quad => {
      quad.setDepth(this.depth + 1);
      quad.setSizeLimit(this.SIZE_LIMIT);
      quad.setDepthLimit(this.DEPTH_LIMIT);
    });

    // Move values
    this.values.forEach(node => this.add(node));
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

    if (
      !this.subdivisions &&
      this.depth < this.DEPTH_LIMIT &&
      this.values.size === this.SIZE_LIMIT
    ) {
      this._subdivide();
    }

    if (this.subdivisions) {
      return this.subdivisions.reduce(
        (added: Boolean, quad) => added || quad.add(node),
        false,
      );
    }

    this.values.add(node);

    return true;
  }

  /**
   * Insert value with positional data.
   * @param {QuadTree<T>} node
   * @return Boolean
   */
  public insert(node: QuadNode<T>): Boolean {
    return this._insertImpl(node);
  }

  /**
   * #todo fix this overload
   *
   * public insert(node: QuadNode<T>): Boolean;
   * public insert(value: T, left: number, top: number, right?: number, bottom?: number): Boolean;
   * public insert(nodeOrValue: QuadNode<T>|T, left?: number, top?: number, right?: number, bottom?: number): Boolean {
   *   if (left !== undefined && top !== undefined) {
   *     // convenience QuadNode creation
   *     return this._insertImpl(new QuadNode(nodeOrValue, left, right, top, bottom));
   *   }

   *   // QuadNode
   *   return this._insertImpl(nodeOrValue);
   * }
   */

  public get(range: Quad): Array<QuadNode<T>> {
    if (!this.bounds.intersects(range)) {
      return [];
    }

    if (this.subdivisions) {
      return this.subdivisions.reduce(
        (ret, quad) => [...ret, ...quad.get(range)],
        [] as Array<QuadNode<T>>,
      );
    }

    return Array.from(this.values).filter(value => value.intersects(range));
  }
}

export default QuadTree;
