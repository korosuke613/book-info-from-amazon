'use strict';

document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.sync.get(
    { title: 'on', author: 'on', url: 'on', price: 'on', publisher: 'on', isbn10: 'on', isbn13: 'on' }, (item) => {
      (<HTMLInputElement>document.getElementById('title')).value = item.title;
      (<HTMLInputElement>document.getElementById('author')).value = item.author;
      (<HTMLInputElement>document.getElementById('URL')).value = item.url;
      (<HTMLInputElement>document.getElementById('price')).value = item.price;
      (<HTMLInputElement>document.getElementById('publisher')).value = item.publisher;
      (<HTMLInputElement>document.getElementById('isbn10')).value = item.isbn10;
      (<HTMLInputElement>document.getElementById('isbn13')).value = item.isbn13;
    });
});

document.getElementById('save').addEventListener('click', () => {
  const title = (<HTMLInputElement>document.getElementById('title')).value;
  const author = (<HTMLInputElement>document.getElementById('author')).value;
  const url = (<HTMLInputElement>document.getElementById('URL')).value;
  const price = (<HTMLInputElement>document.getElementById('price')).value;
  const publisher = (<HTMLInputElement>document.getElementById('publisher')).value;
  const isbn10 = (<HTMLInputElement>document.getElementById('isbn10')).value;
  const isbn13 = (<HTMLInputElement>document.getElementById('isbn13')).value;
  chrome.storage.sync.set({ title, author, url, price, publisher, isbn10, isbn13 });
});
// # sourceMappingURL=options.js.map
