"use strict";

chrome.tabs.query({}, function () {
    let book_info = chrome.extension.getBackgroundPage().book_info;
    console.log(book_info);

    let results = document.getElementById('results');
    results.value = "タイトル: " + book_info.title
        + "\n著者: " + book_info.author
        + "\n" + book_info.isbn10;
    results.select();
});

