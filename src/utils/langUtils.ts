export function isArray(value: any): boolean {
  return Array.isArray(value);
}

export function isBoolean(value: any): boolean {
  return value === true || value === false;
}

export function isInteger(value: any): boolean {
  return typeof value === 'number' && value === parseInt(value.toString(), 10);
}

export function isNull(value: any): boolean {
  return value === null;
}

export function isNumber(value: any): boolean {
  return typeof value === 'number';
}

export function isObject(value: any): boolean {
  return Object.prototype.toString.call(value) === '[object Object]';
}

export function isString(value: any): boolean {
  return typeof value === 'string';
}

export function isUndefined(value: any): boolean {
  return value === undefined;
}
