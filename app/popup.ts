'use strict';

document.querySelector('#go-to-options').addEventListener('click', () => {
  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage();
  } else {
    window.open(chrome.runtime.getURL('options.html'));
  }
});

chrome.tabs.query({}, () => {
  const results = document.getElementById('results') as HTMLInputElement;
  chrome.storage.sync.get(
    {
      title: 'on',
      author: 'on',
      url: 'on',
      price: 'on',
      publisher: 'on',
      isbn10: 'on',
      isbn13: 'on',
      bookInfo: '',
    },
    item => {
      const bookInfo = item.bookInfo;
      results['value'] = '';
      if (item.title === 'on') {
        results['value'] += `タイトル: ${bookInfo.title}\n`;
      }
      if (item.author === 'on') {
        results['value'] += `著者: ${bookInfo.author}\n`;
      }
      if (item.publisher === 'on') {
        results['value'] += `${bookInfo.publisher}\n`;
      }
      if (item.price === 'on') {
        results['value'] += `価格(税込): ${bookInfo.price}\n`;
      }
      if (item.isbn10 === 'on') {
        results['value'] += `${bookInfo.isbn10}\n`;
      }
      if (item.isbn13 === 'on') {
        results['value'] += `${bookInfo.isbn13}\n`;
      }
      if (item.url === 'on') {
        results['value'] += `URL: ${bookInfo.url}`;
      }
      results.select();
    },
  );
});
