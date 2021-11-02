const TERMINATING_CHAR = '$$LagoTrieTerminatingCharacter';

interface TrieNode {
  [key: string]: TrieNode | number;
}

interface CountResult {
  [key: string]: number;
}

class Trie {
  private _tree: TrieNode;

  private _size: number;

  constructor() {
    this._tree = Object.create(null);
    // Number of different strings in the Trie.
    // It is not the summation of count.
    this._size = 0;
  }

  get size(): number {
    return this._size;
  }

  /**
   * Modifies the count of string in the Trie by a value.
   * The string's new count will be returned.
   * 0 is returned if the modification was unsuccessful.
   * @param {string} string
   * @param {number} difference
   * @return {number}
   */
  private _modifyCountBy(str: string, difference: number): number {
    // TODO: Check that difference is a number;
    let curr = this._tree;

    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (!Object.prototype.hasOwnProperty.call(curr, char)) {
        curr[char] = {};
      }
      curr = curr[char] as TrieNode;
    }

    if (!Object.prototype.hasOwnProperty.call(curr, TERMINATING_CHAR)) {
      this._size++;
      curr[TERMINATING_CHAR] = 0;
    }

    curr[TERMINATING_CHAR] = difference + (curr[TERMINATING_CHAR] as number);

    return curr[TERMINATING_CHAR] as number;
  }

  /**
   * Inserts a string into the Trie, optionally specifying its count.
   * The string's new count will be returned.
   * 0 is returned if the insertion was unsuccessful.
   * @param {string} string
   * @param {number} [count=1]
   * @return {number}
   */
  insert(str: string, count = 1): number {
    if (count < 1) {
      return 0;
    }

    return this._modifyCountBy(str, count);
  }

  /**
   * Increment the count of string in the Trie by 1.
   * If the string does not exist in the Trie, it is inserted.
   * The new count is returned.
   * @param {string} string
   * @return {number}
   */
  increment(str: string): number {
    return this._modifyCountBy(str, 1);
  }

  /**
   * Deletes a string from the Trie.
   * @param {string} string
   * @return {boolean} Whether the deletion was successful.
   */
  delete(str: string): boolean {
    if (!str) {
      return false;
    }

    let curr = this._tree;
    const stack: Array<[TrieNode, string]> = [];
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (!Object.prototype.hasOwnProperty.call(curr, char)) {
        return false;
      }
      stack.push([curr, char]);
      curr = curr[char] as TrieNode;
    }

    if (!Object.prototype.hasOwnProperty.call(curr, TERMINATING_CHAR)) {
      return false;
    }
    stack.push([curr, TERMINATING_CHAR]);
    this._size--;

    // Clean up nodes up the parent chain until
    // a non-childless node is encountered.
    for (let i = 0; i < stack.length; i++) {
      const [node, char] = stack.pop() as [TrieNode, string];
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
  count(str: string): number {
    if (!str) {
      return 0;
    }

    let curr = this._tree;
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (!Object.prototype.hasOwnProperty.call(curr, char)) {
        return 0;
      }
      curr = curr[char] as TrieNode;
    }

    return curr[TERMINATING_CHAR] as number;
  }

  /**
   * Determine if a string is in the Trie.
   * @param {string} string
   * @return {boolean} Whether the string is in the Trie.
   */
  contains(str: string): boolean {
    return this.count(str) !== 0;
  }

  /**
   * Returns a mapping of strings to its count in the Trie
   * that start with the given prefix.
   * @param {string} prefix
   * @return {Object}
   */
  stringsStartingWith(prefix: string): CountResult {
    const results: CountResult = {};

    if (!prefix) {
      return results;
    }

    let curr = this._tree;
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      if (!Object.prototype.hasOwnProperty.call(curr, char)) {
        return results;
      }
      curr = curr[char] as TrieNode;
    }

    function traverse(node: TrieNode, chars: string) {
      Object.keys(node).forEach((char) => {
        if (char === TERMINATING_CHAR) {
          results[chars] = node[char] as number;
          return;
        }

        traverse(node[char] as TrieNode, chars + char);
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
  countStringsStartingWith(prefix: string): number {
    const results = this.stringsStartingWith(prefix);
    const total = Object.keys(results)
      .map((key) => results[key])
      .reduce((a, b) => a + b, 0);

    return total;
  }

  /**
   * Counts the different number of strings in the Trie
   * that start with the given prefix.
   * @param {string} prefix
   * @return {number} The different number of strings in the Trie that start with the prefix.
   */
  differentStringsStartingWith(prefix: string): number {
    const results = this.stringsStartingWith(prefix);
    return Object.keys(results).length;
  }

  /**
   * Finds the shortest prefix of a string from words within the Trie.
   * Returns null if there is no prefix of the string within the Trie.
   * @param {string} string
   * @return {string|null}
   */
  shortestPrefix(string: string): string | null {
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
      curr = curr[char] as TrieNode;
    }

    // If the whole string is a prefix.
    if (Object.prototype.hasOwnProperty.call(curr, TERMINATING_CHAR)) {
      return prefixChars.join('');
    }

    return null;
  }
}

export default Trie;
