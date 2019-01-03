"use strict";


let title = document.getElementById("productTitle").innerText;
let author = document.getElementById("bylineInfo").getElementsByClassName("a-link-normal")[0].innerText;
author = author.replace("のAmazon著者ページを見る", "");

let details = document.getElementById("detail_bullets_id").getElementsByTagName("li");

let isbn10 = "null";
let isbn13 = "null";
for(let index in details){
    let text = details[index].innerText;
    if(typeof text != "string"){
        continue;
    }
    if(text.match(/ISBN-10/)){
        isbn10 = text
    }else if(text.match(/ISBN-13/)){
        isbn13 = text
    }
}

chrome.runtime.sendMessage(
    {
        title: title,
        author: author,
        isbn10: isbn10,
        isbn13: isbn13
    },
    function (response) {
    console.log(response);
    return true;
});