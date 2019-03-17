const update = require('../version');
const chai = require('chai');
const assert = chai.assert;
const path = require('path');


describe('version', () => {
  describe('load_version', () => {
    it('vを除外する', () => {
      assert.strictEqual(update.load_version("v3.4.5"), "3.4.5");
    });
    it('文字列以外をはじく', () => {
      assert.strictEqual(update.load_version(5), false);
    });
  });
  describe('load_JSON', ()=>{
    it('ファイルを開く', ()=>{
      const file_path = path.resolve(__dirname, "version.test.json");
      update.load_JSON(file_path);
    })
  });
});

