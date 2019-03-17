const update = require('../version');

describe('version', () => {
  describe('load_version', () => {
    test('vを除外する', () => {
      expect(update.load_version("v3.4.5")).toBe("3.4.5");
    });
    test('文字列以外をはじく', () => {
      expect(update.load_version(5)).toBe(false);
    });
  });
});

