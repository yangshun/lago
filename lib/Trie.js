const TERMINATING_CHAR = '$$LagoTrieTerminatingCharacter';

class Trie {
  constructor() {
    this._tree = {};
    this.size = 0; // Number of different strings in the Trie. It is not the summation of count.
  }

  /**
   * Inserts a string into the Trie, optionally specifying its count.
   * The string's new count will be returned.
   * 0 is returned if the insertion was unsuccessful.
   * @param {string} string
   * @param {number} [count=1]
   * @return {count}
   */
  insert(string, count = 1) {
    if (!string || count < 1) {
      return 0;
    }
    let curr = this._tree;
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (!curr.hasOwnProperty(char)) {
        curr[char] = {};
      }
      curr = curr[char];
    }
    if (!curr.hasOwnProperty(TERMINATING_CHAR)) {
      this.size++;
      curr[TERMINATING_CHAR] = 0;
    }
    curr[TERMINATING_CHAR] += count;
    return curr[TERMINATING_CHAR];
  }

  /**
   * Returns the number of times a string appears in the Trie.
   * @param {string} string
   * @return {boolean}
   */
  count(string) {
    if (!string) {
      return 0;
    }
    let curr = this._tree;
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (!curr.hasOwnProperty(char)) {
        return 0;
      }
      curr = curr[char];
    }
    return curr[TERMINATING_CHAR];
  }

  /**
   * Returns if a string is in the Trie.
   * @param {string} string
   * @return {boolean}
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
      if (!curr.hasOwnProperty(char)) {
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
   * Returns the total count of strings in the Trie
   * that start with the given prefix.
   * @param {string} prefix
   * @return {number}
   */
  countStringsStartingWith(prefix) {
    const results = this.stringsStartingWith(prefix);
    const total = Object.keys(results)
                    .map(key => results[key])
                    .reduce((a, b) => a + b, 0);
    return total;
  }

  /**
   * Returns the different number of strings in the Trie
   * that start with the given prefix.
   * @param {string} prefix
   * @return {number}
   */
  differentStringsStartingWith(prefix) {
    const results = this.stringsStartingWith(prefix);
    return Object.keys(results).length;
  }

  /**
   * Finds the shortest prefix of a string from words within the Trie.
   * Returns null if there is no prefix of the string within the Trie.
   * @param {string} string
   * @return {string}
   */
  shortestPrefix(string) {
    let curr = this._tree;
    const prefixChars = [];

    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (curr.hasOwnProperty(TERMINATING_CHAR)) {
        return prefixChars.join('');
      }
      if (curr.hasOwnProperty(char)) {
        prefixChars.push(char);
        curr = curr[char];
        continue;
      }
      break;
    }
    // If the whole string is a prefix.
    if (curr.hasOwnProperty(TERMINATING_CHAR)) {
      return prefixChars.join('');
    }
    return null;
  }
};

export default Trie;
