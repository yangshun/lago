export function isArray(value) {
  return Array.isArray(value);
}

export function isBoolean(value) {
  return value === true || value === false;
}

export function isInteger(value) {
  return typeof value === 'number' && value === parseInt(value, 10);
}

export function isNull(value) {
  return value === null;
}

export function isNumber(value) {
  return typeof value === 'number';
}

export function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

export function isString(value) {
  return typeof value === 'string';
}

export function isUndefined(value) {
  return value === undefined;
}
