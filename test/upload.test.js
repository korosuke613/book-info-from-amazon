const update = require('../version');
const chai = require('chai');
const assert = chai.assert;


describe('version', () => {
  describe('load_version', () => {
    it('vを除外する', () => {
      assert.strictEqual(update.load_version("v3.4.5"), "3.4.5");
    });
    it('文字列以外をはじく', () => {
      assert.strictEqual(update.load_version(5), false);
    });
  });
});

