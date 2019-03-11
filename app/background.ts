'use strict';
let bookInfo;

chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    bookInfo = request;
    const res = 'finish';
    sendResponse(res);
  },
);
