'use strict';

document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.sync.get(
    { title: 'On', author: 'On' , url: 'On', price: 'On', publisher: 'On', isbn10: 'On', isbn13: 'On' }, (item) => {
      let tmp: any = document.getElementById('title');
      tmp.value = item.title;
      tmp = document.getElementById('author');
      tmp.value = item.author;
      tmp = document.getElementById('URL');
      tmp.value = item.url;
      tmp = document.getElementById('price');
      tmp.value = item.price;
      tmp = document.getElementById('publisher');
      tmp.value = item.publisher;
      tmp = document.getElementById('isbn10');
      tmp.value = item.isbn10;
      tmp = document.getElementById('isbn13');
      tmp.value = item.isbn13;
    });
});

document.getElementById('save').addEventListener('click', () => {
  let title: any = document.getElementById('title');
  title = title.value;
  let author: any = document.getElementById('author');
  author = author.value;
  let url: any = document.getElementById('URL');
  url = url.value;
  let price: any = document.getElementById('price');
  price = price.value;
  let publisher: any = document.getElementById('publisher');
  publisher = publisher.value;
  let isbn10: any = document.getElementById('isbn10');
  isbn10 = isbn10.value;
  let isbn13: any = document.getElementById('isbn13');
  isbn13 = isbn13.value;
  chrome.storage.sync.set({ title, author, url, price, publisher, isbn10, isbn13 },
                          () => {
                            console.log('saved');
                          });
});
// # sourceMappingURL=options.js.map
