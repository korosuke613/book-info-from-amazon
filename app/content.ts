'use strict';

class BookInfo {
  title: string;
  author: string;
  isbn10: string = 'null';
  isbn13: string = 'null';
  constructor() {
    this.setTitle();
    this.setAuthor();
    this.setIsbn();
  }

  setTitle() {
    this.title = document.getElementById('productTitle').innerText;
  }

  setAuthor() {
    const tmpAuthor: any = document.getElementById('bylineInfo').getElementsByClassName('a-link-normal')[0];
    this.author = tmpAuthor.innerText.replace('のAmazon著者ページを見る', '');
  }

  setIsbn() {
    const details = document.getElementById('detail_bullets_id').getElementsByTagName('li');

    for (const index in details) {
      const text = details[index].innerText;
      if (typeof text !== 'string') {
        continue;
      }
      if (text.match(/ISBN-10/)) {
        this.isbn10 = text;
      }else if (text.match(/ISBN-13/)) {
        this.isbn13 = text;
      }
    }
  }
}

let bookInfoLocal = new BookInfo();
console.log(bookInfoLocal);
chrome.runtime.sendMessage(
    bookInfoLocal,
    (response) => {
      console.log(response);
      return true;
    });
