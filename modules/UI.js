import {cleanHTML} from './functions.js';
import {books} from './books.js';
import {listBooks} from './selectors.js';

class Books {
  constructor(id, tittle, author) {
    this.id = id;
    this.tittle = tittle;
    this.author = author;
  }
  
  static createHTML() {
    cleanHTML();
  
    if (books.length > 0) {
      books.forEach((book) => {
        const bookContainer = document.createElement('div');
        bookContainer.classList.add('book-wrap');
        listBooks.appendChild(bookContainer);
  
        const wrap = document.createElement('div');
        wrap.classList.add('wrap');
        bookContainer.appendChild(wrap);
  
        const tittleBook = document.createElement('p');
        tittleBook.classList.add('tittle-book');
        tittleBook.innerText = `"${book.tittle}"`;
        wrap.appendChild(tittleBook);
  
        const authorBook = document.createElement('p');
        authorBook.classList.add('author-book');
        authorBook.innerText = `by ${book.author}`;
        wrap.appendChild(authorBook);
  
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn-remove');
        removeBtn.innerHTML = 'Remove';
        bookContainer.appendChild(removeBtn);

        removeBtn.addEventListener('click', (parameter) =>{
          if (parameter.target.classList.value === 'btn-remove') {
            listBooks.removeChild(parameter.target.parentElement);
          }
        });
      });
    }
  }
}

export default Books;