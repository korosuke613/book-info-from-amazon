
export class BookInfo {
    title: string;
    author: string;
    isbn10: string = 'null';
    isbn13: string = 'null';
    publisher: string = 'null';
    url: string;
    price: number;
    constructor() {
      this.setTitle();
      this.setAuthor();
      this.setDetails();
      this.setUrl();
      this.setPrice();
    }
  
    setTitle() {
      this.title = document.getElementById('productTitle').innerText;
    }
  
    setAuthor() {
      const tmpAuthor: any = document.getElementById('bylineInfo').getElementsByClassName('a-link-normal')[0];
      this.author = tmpAuthor.innerText.replace('のAmazon著者ページを見る', '');
    }
  
    setDetails() {
      const details = document.getElementById('detail_bullets_id').getElementsByTagName('li');
  
      for (const index in details) {
        const text = details[index].innerText;
        if (typeof text !== 'string') {
          continue;
        }
        if (text.match(/ISBN-10/)) {
          this.isbn10 = text;
        }else if (text.match(/ISBN-13/)) {
          this.isbn13 = text;
        }else if (text.match(/出版社/)) {
          this.publisher = text;
        }
      }
    }
  
    setUrl() {
      this.url = document.location.href;
    }
  
    setPrice() {
      const tmpPrice: any = document.getElementById('buyNewSection').getElementsByClassName('offer-price')[0];
      this.price = tmpPrice.innerText;
    }
  }