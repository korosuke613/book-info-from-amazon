'use strict';
let bookInfo;

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
      console.log(request);
      console.log(sender);
      console.log(sendResponse);
      bookInfo = request;
      const res = 'finish';
      console.log(bookInfo);
      sendResponse(res);
    },
);
