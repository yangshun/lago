/**
 * Returns a non-null version of a value, throws otherwise.
 *
 * @param {?T} value Nullable value.
 * @return {T} Non-null value.
 */
function nullthrows<T>(value: T | null | undefined): T {
  if (value == null) {
    throw Error('Unexpected null value');
  }

  return value;
}

export default nullthrows;
