import { isArray, isObject } from './langUtils';

export default function deepClone(val) {
  if (isArray(val)) {
    return Array(val.length)
      .fill(null)
      .map((_, i) => deepClone(val[i]));
  }

  if (isObject(val)) {
    const objClone = {};
    Object.keys(val).forEach(key => {
      objClone[key] = deepClone(val[key]);
    });
    return objClone;
  }

  return val;
}
