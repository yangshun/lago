import { isArray, isObject } from './langUtils';

export default function deepClone<T>(val: T): T {
  if (isArray(val)) {
    // @ts-expect-error: Hard to type this.
    return (
      // @ts-expect-error: any is ok here as clone doesn't know anything about the argument.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Array((val as Array<any>).length)
        .fill(null)
        // @ts-expect-error: Hard to type this.
        .map((_, i) => deepClone(val[i]))
    );
  }

  if (isObject(val)) {
    const objClone = {};
    Object.keys(val).forEach((key) => {
      // @ts-expect-error: Hard to type this.
      objClone[key] = deepClone(val[key]);
    });

    // @ts-expect-error: Hard to type this.
    return objClone;
  }

  return val;
}
