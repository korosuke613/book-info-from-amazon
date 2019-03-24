"use strict";

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const res = "finish";
  chrome.storage.sync.set({ bookInfo: request });
  sendResponse(res);
});
