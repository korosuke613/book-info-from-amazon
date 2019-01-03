'use strict';

let title = document.getElementById('productTitle').innerText;
let author: any = document.getElementById('bylineInfo').getElementsByClassName('a-link-normal')[0];
author = author.innerText.replace('のAmazon著者ページを見る', '');

let details = document.getElementById('detail_bullets_id').getElementsByTagName('li');

let isbn10 = 'null';
let isbn13 = 'null';
for (const index in details) {
  const text = details[index].innerText;
  if (typeof text !== 'string') {
    continue;
  }
  if (text.match(/ISBN-10/)) {
    isbn10 = text;
  }else if (text.match(/ISBN-13/)) {
    isbn13 = text;
  }
}

chrome.runtime.sendMessage(
  {
    title,
    author,
    isbn10,
    isbn13,
  },
  (response) => {
    console.log(response);
    return true;
  });
