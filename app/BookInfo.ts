export class BookInfo {
  title: string;
  author: string;
  isbn10: string = "null";
  isbn13: string = "null";
  publisher: string = "null";
  url: string;
  price: string;
  constructor() {
    this.setTitle();
    this.setAuthor();
    this.setDetails();
    this.setUrl();
    this.setPrice();
  }

  setTitle() {
    this.title = document.getElementById("productTitle").innerText;
    if (this.title === undefined) {
      this.title = document.getElementById("productTitle").innerHTML;
    }
  }

  setAuthor() {
    const tmpAuthor: any = document
      .getElementById("bylineInfo")
      .getElementsByClassName("a-link-normal")[0];
    try {
      this.author = tmpAuthor.innerText.replace("のAmazon著者ページを見る", "");
    } catch (err) {
      this.author = tmpAuthor.innerHTML.replace("のAmazon著者ページを見る", "");
    }
  }

  setDetails() {
    const details = document
      .getElementById("detail_bullets_id")
      .getElementsByTagName("li");

    for (const index in details) {
      if (details.hasOwnProperty(index)) {
        let text = details[index].innerText;
        if (typeof text !== "string") {
          text = details[index].innerHTML;
        }
        text = text.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");
        if (text.match(/ISBN-10/)) {
          this.isbn10 = text;
        } else if (text.match(/ISBN-13/)) {
          this.isbn13 = text;
        } else if (text.match(/出版社/)) {
          this.publisher = text;
        }
      }
    }
  }

  setUrl() {
    this.url = document.location.href;
  }

  setPrice() {
    const tmpPrice: any = document
      .getElementById("buyNewSection")
      .getElementsByClassName("offer-price")[0];
    this.price = tmpPrice.innerText;
    if (typeof this.price !== "string") {
      this.price = tmpPrice.innerHTML;
    }
  }
}
