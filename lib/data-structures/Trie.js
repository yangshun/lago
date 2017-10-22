const TERMINATING_CHAR = '$$LagoTrieTerminatingCharacter';

class Trie {
  constructor() {
    this._tree = Object.create(null);
    // Number of different strings in the Trie.
    // It is not the summation of count.
    this.size = 0;
  }

  /**
   * Modifies the count of string in the Trie by a value.
   * The string's new count will be returned.
   * 0 is returned if the modification was unsuccessful.
   * @param {string} string
   * @param {number} difference
   * @return {number}
   */
  _modifyCountBy(string, difference) {
    // TODO: Check that difference is a number;
    if (!string) {
      return 0;
    }
    let curr = this._tree;
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (!Object.prototype.hasOwnProperty.call(curr, char)) {
        curr[char] = {};
      }
      curr = curr[char];
    }
    if (!Object.prototype.hasOwnProperty.call(curr, TERMINATING_CHAR)) {
      this.size++;
      curr[TERMINATING_CHAR] = 0;
    }
    curr[TERMINATING_CHAR] += difference;
    return curr[TERMINATING_CHAR];
  }

  /**
   * Inserts a string into the Trie, optionally specifying its count.
   * The string's new count will be returned.
   * 0 is returned if the insertion was unsuccessful.
   * @param {string} string
   * @param {number} [count=1]
   * @return {number}
   */
  insert(string, count = 1) {
    if (count < 1) {
      return 0;
    }
    return this._modifyCountBy(string, count);
  }

  /**
   * Increment the count of string in the Trie by 1.
   * If the string does not exist in the Trie, it is inserted.
   * The new count is returned.
   * @param {string} string
   * @return {number}
   */
  increment(string) {
    return this._modifyCountBy(string, 1);
  }

  /**
   * Deletes a string from the Trie.
   * @param {string} string
   * @return {boolean} Whether the deletion was successful.
   */
  delete(string) {
    if (!string) {
      return false;
    }
    let curr = this._tree;
    const stack = [];
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (!Object.prototype.hasOwnProperty.call(curr, char)) {
        return false;
      }
      stack.push([curr, char]);
      curr = curr[char];
    }
    if (!Object.prototype.hasOwnProperty.call(curr, TERMINATING_CHAR)) {
      return false;
    }
    stack.push([curr, TERMINATING_CHAR]);
    this.size--;
    // Clean up nodes up the parent chain until
    // a non-childless node is encountered.
    for (let i = 0; i < stack.length; i++) {
      const [node, char] = stack.pop();
      delete node[char];
      if (Object.keys(node).length > 0) {
        break;
      }
    }

    return true;
  }

  /**
   * Counts the number of times a string appears in the Trie.
   * @param {string} string
   * @return {boolean} The number of times a string appears in the Trie.
   */
  count(string) {
    if (!string) {
      return 0;
    }
    let curr = this._tree;
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (!Object.prototype.hasOwnProperty.call(curr, char)) {
        return 0;
      }
      curr = curr[char];
    }
    return curr[TERMINATING_CHAR];
  }

  /**
   * Determine if a string is in the Trie.
   * @param {string} string
   * @return {boolean} Whether the string is in the Trie.
   */
  contains(string) {
    return this.count(string) !== 0;
  }

  /**
   * Returns a mapping of strings to its count in the Trie
   * that start with the given prefix.
   * @param {string} prefix
   * @return {Object}
   */
  stringsStartingWith(prefix) {
    const results = {};
    if (!prefix) {
      return results;
    }
    let curr = this._tree;
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      if (!Object.prototype.hasOwnProperty.call(curr, char)) {
        return results;
      }
      curr = curr[char];
    }
    function traverse(node, chars) {
      Object.keys(node).forEach(char => {
        if (char === TERMINATING_CHAR) {
          results[chars] = node[char];
          return;
        }
        traverse(node[char], chars + char);
      });
    }
    traverse(curr, prefix);
    return results;
  }

  /**
   * Counts the total number of strings in the Trie
   * that start with the given prefix.
   * @param {string} prefix
   * @return {number} The total number of strings in the Trie that start with the prefix.
   */
  countStringsStartingWith(prefix) {
    const results = this.stringsStartingWith(prefix);
    const total = Object.keys(results)
      .map(key => results[key])
      .reduce((a, b) => a + b, 0);
    return total;
  }

  /**
   * Counts the different number of strings in the Trie
   * that start with the given prefix.
   * @param {string} prefix
   * @return {number} The different number of strings in the Trie that start with the prefix.
   */
  differentStringsStartingWith(prefix) {
    const results = this.stringsStartingWith(prefix);
    return Object.keys(results).length;
  }

  /**
   * Finds the shortest prefix of a string from words within the Trie.
   * Returns null if there is no prefix of the string within the Trie.
   * @param {string} string
   * @return {string|null}
   */
  shortestPrefix(string) {
    let curr = this._tree;
    const prefixChars = [];

    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (Object.prototype.hasOwnProperty.call(curr, TERMINATING_CHAR)) {
        return prefixChars.join('');
      }
      if (!Object.prototype.hasOwnProperty.call(curr, char)) {
        break;
      }
      prefixChars.push(char);
      curr = curr[char];
    }
    // If the whole string is a prefix.
    if (Object.prototype.hasOwnProperty.call(curr, TERMINATING_CHAR)) {
      return prefixChars.join('');
    }
    return null;
  }
}

export default Trie;
