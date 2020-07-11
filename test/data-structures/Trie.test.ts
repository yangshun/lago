import { Trie } from '../../src';

function trieFactory() {
  const t = new Trie();
  t.insert('a', 2);
  t.insert('a');
  t.insert('ab', 3);
  t.insert('abc');
  t.insert('abc', 1);
  t.insert('ab', 4);
  return t;
}

describe('Trie', () => {
  test('constructor()', () => {
    const t = new Trie();
    expect(t).toBeTruthy();
    expect(t.size).toBe(0);
  });

  describe('insert()', () => {
    test('insertion with invalid parameters', () => {
      const t = new Trie();
      expect(t.insert('foobar', -1)).toBe(0);
      expect(t.insert('foobar', 0)).toBe(0);
      expect(t.size).toBe(0);
    });

    describe('insertion with valid strings', () => {
      test('single characters', () => {
        const t = new Trie();
        expect(t.insert('a')).toBe(1);
        expect(t.size).toBe(1);
        expect(t.insert('a')).toBe(2);
        expect(t.size).toBe(1);
        expect(t.insert('b')).toBe(1);
        expect(t.size).toBe(2);
        expect(t.insert('a', 3)).toBe(5);
        expect(t.size).toBe(2);
        expect(t.insert('c', -4)).toBe(0);
        expect(t.size).toBe(2);
        expect(t.insert('c', 4)).toBe(4);
        expect(t.size).toBe(3);
      });

      test('multiple characters', () => {
        const t = new Trie();
        expect(t.insert('foobar')).toBe(1);
        expect(t.size).toBe(1);
        expect(t.insert('foobar')).toBe(2);
        expect(t.size).toBe(1);
        expect(t.insert('barfoo')).toBe(1);
        expect(t.size).toBe(2);
        expect(t.insert('foobarqux')).toBe(1);
        expect(t.size).toBe(3);
        expect(t.insert('foobarqux', -3)).toBe(0);
        expect(t.size).toBe(3);
        expect(t.insert('foobarqux', 3)).toBe(4);
        expect(t.size).toBe(3);
        expect(t.insert('foobarbaz', 99)).toBe(99);
        expect(t.size).toBe(4);
      });
    });
  });

  describe('increment()', () => {
    test('single characters', () => {
      const t = trieFactory();
      expect(t.count('abc')).toBe(2);
      expect(t.increment('abc')).toBe(3);
      expect(t.increment('ab')).toBe(8);
    });
  });

  describe('delete()', () => {
    describe('deletion with valid strings', () => {
      test('invalid parameters', () => {
        const t = trieFactory();
        expect(t.delete('')).toBeFalsy();
      });

      test('single characters', () => {
        const t = new Trie();
        expect(t.insert('a')).toBe(1);
        expect(t.insert('b')).toBe(1);
        expect(t.size).toBe(2);
        expect(t.delete('a')).toBeTruthy();
        expect(t.delete('c')).toBeFalsy();
        expect(t.size).toBe(1);
      });

      test('multiple characters', () => {
        const t = trieFactory();
        expect(t.delete('abcd')).toBeFalsy();
        expect(t.delete('abc')).toBeTruthy();
        expect(t.delete('abc')).toBeFalsy();
        expect(t.size).toBe(2);
        expect(t.delete('a')).toBeTruthy();
        expect(t.size).toBe(1);
        t.insert('dictionary');
        expect(t.delete('diction')).toBeFalsy();
      });
    });
  });

  test('count()', () => {
    const t = trieFactory();
    expect(t.count('a')).toBe(3);
    expect(t.count('ab')).toBe(7);
    expect(t.count('abc')).toBe(2);
    expect(t.count('b')).toBe(0);
    expect(t.count('ba')).toBe(0);
    expect(t.count('')).toBe(0);
  });

  test('contains()', () => {
    const t = trieFactory();
    expect(t.size).toBe(3);
    expect(t.contains('a')).toBeTruthy();
    expect(t.contains('ab')).toBeTruthy();
    expect(t.contains('abc')).toBeTruthy();
    expect(t.contains('b')).toBeFalsy();
    expect(t.contains('ba')).toBeFalsy();
  });

  test('stringsStartingWith()', () => {
    const t = trieFactory();
    expect(t.stringsStartingWith('a')).toEqual({ a: 3, ab: 7, abc: 2 });
    expect(t.stringsStartingWith('ab')).toEqual({ ab: 7, abc: 2 });
    expect(t.stringsStartingWith('abc')).toEqual({ abc: 2 });
    expect(t.stringsStartingWith('abcd')).toEqual({});
    expect(t.stringsStartingWith('b')).toEqual({});
    expect(t.stringsStartingWith('bcd')).toEqual({});
    expect(t.stringsStartingWith('')).toEqual({});
  });

  test('countStringsStartingWith()', () => {
    const t = trieFactory();
    expect(t.countStringsStartingWith('a')).toBe(12);
    expect(t.countStringsStartingWith('ab')).toBe(9);
    expect(t.countStringsStartingWith('abc')).toBe(2);
    expect(t.countStringsStartingWith('abcd')).toBe(0);
    expect(t.countStringsStartingWith('b')).toBe(0);
    expect(t.countStringsStartingWith('bcd')).toBe(0);
    expect(t.countStringsStartingWith('')).toBe(0);
  });

  test('differentStringsStartingWith()', () => {
    const t = trieFactory();
    expect(t.differentStringsStartingWith('a')).toBe(3);
    expect(t.differentStringsStartingWith('ab')).toBe(2);
    expect(t.differentStringsStartingWith('abc')).toBe(1);
    expect(t.differentStringsStartingWith('abcd')).toBe(0);
    expect(t.differentStringsStartingWith('b')).toBe(0);
    expect(t.differentStringsStartingWith('bcd')).toBe(0);
    expect(t.differentStringsStartingWith('')).toBe(0);
  });

  test('shortestPrefix()', () => {
    const t = trieFactory();
    expect(t.shortestPrefix('a')).toBe('a');
    expect(t.shortestPrefix('ab')).toBe('a');
    expect(t.shortestPrefix('abc')).toBe('a');

    t.insert('dictionary');
    expect(t.shortestPrefix('pict')).toBe(null);
    expect(t.shortestPrefix('dict')).toBe(null);
    expect(t.shortestPrefix('dictionary')).toBe('dictionary');

    t.insert('diction');
    expect(t.shortestPrefix('dictionary')).toBe('diction');
  });
});
