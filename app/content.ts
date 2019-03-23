'use strict';

import { BookInfo } from './BookInfo';

let bookInfoLocal = new BookInfo();
chrome.runtime.sendMessage(
  bookInfoLocal,
  (response) => {
    return true;
  });
