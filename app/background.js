"use strict";
var book_info;

chrome.runtime.onMessage.addListener(
    function(request,sender,sendResponse){
        console.log(request);
        console.log(sender);
        console.log(sendResponse);
        book_info = request;
        let res = "finish";
        console.log(book_info);
        sendResponse(res);
    }
);