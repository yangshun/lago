export function isArray(value: unknown): boolean {
  return Array.isArray(value);
}

export function isBoolean(value: unknown): boolean {
  return value === true || value === false;
}

export function isInteger(value: unknown): boolean {
  return typeof value === 'number' && value === parseInt(value.toString(), 10);
}

export function isNull(value: unknown): boolean {
  return value === null;
}

export function isNumber(value: unknown): boolean {
  return typeof value === 'number';
}

export function isObject(value: unknown): boolean {
  return Object.prototype.toString.call(value) === '[object Object]';
}

export function isString(value: unknown): boolean {
  return typeof value === 'string';
}

export function isUndefined(value: unknown): boolean {
  return value === undefined;
}
