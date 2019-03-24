const { BookInfo } = require("../app/BookInfo");
const path = require("path");
const fs = require("fs");

const filePath = path.resolve(__dirname, "BookInfo.test.html.txt");
document.body.innerHTML = fs.readFileSync(filePath);

let bookInfo = new BookInfo();

describe("BookInfo", () => {
  describe("ちゃんと初期化できる？", () => {
    beforeAll(() => {
      bookInfo = new BookInfo();
    });
    it("タイトル取得できてる？", () => {
      expect(bookInfo.title).toBe(
        "アルゴリズム図鑑 絵で見てわかる26のアルゴリズム"
      );
    });
    it("著者取得できてる？", () => {
      expect(bookInfo.author).toBe("石田 保輝");
    });
    it("isbn10取得できてる？", () => {
      expect(bookInfo.isbn10).toBe("ISBN-10: 4798149772");
    });
    it("isbn13取得できてる？", () => {
      expect(bookInfo.isbn13).toBe("ISBN-13: 978-4798149776");
    });
    it("出版社取得できてる？", () => {
      expect(bookInfo.publisher).toBe("出版社: 翔泳社 (2017/6/6)");
    });
    it("価格取得できてる？", () => {
      expect(bookInfo.price).toBe("￥ 2,570");
    });
    it("URL取得できてる？", () => {
      expect(bookInfo.url).toBe("http://localhost/");
    });
  });
});
