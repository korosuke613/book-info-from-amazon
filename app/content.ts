"use strict";

import { BookInfo } from "./BookInfo";

const bookInfoLocal = new BookInfo();
chrome.runtime.sendMessage(bookInfoLocal, response => {
  return true;
});
