'use strict';

chrome.tabs.query({}, () => {
  const bookInfo = chrome.extension.getBackgroundPage()['bookInfo'];
  console.log(bookInfo);

  const results = document.getElementById('results') as HTMLInputElement;
  results['value'] = `タイトル: ${bookInfo.title}\n著者: ${bookInfo.author}\n${bookInfo.publisher}\n`;
  results['value'] += `${bookInfo.isbn10}\n${bookInfo.isbn13}\nURL: ${bookInfo.url}`;
  results.select();
});
