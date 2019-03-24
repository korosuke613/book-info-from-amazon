const update = require('../scripts/version');
const path = require('path');


describe('version', () => {
  describe('load_version', () => {
    it('vを除外する', () => {
      expect(update.load_version('v3.4.5')).toBe('3.4.5');
    });
    it('文字列以外をはじく', () => {
      expect(update.load_version(5)).toBe(false);
    });
  });
  describe('load_JSON', () => {
    it('ファイルを開く', () => {
      const file_path = path.resolve(__dirname, 'version.test.json');
      update.load_JSON(file_path);
    })
  });
});

