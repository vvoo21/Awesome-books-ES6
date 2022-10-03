const form = document.querySelector('#form');
const listBooks = document.querySelector('#list-books');
let books = new Array(0);

// Clean HTML
function cleanHTML() {
  while (listBooks.firstChild) {
    listBooks.removeChild(listBooks.firstChild);
  }
}

// add books to LocalStorage
function syncStorage() {
  localStorage.setItem('book', JSON.stringify(books));
}

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
        removeBtn.innerText = 'Remove';
        bookContainer.appendChild(removeBtn);

        function removeBook(id) {
          books = books.filter((book) => book.id !== id);

          Books.createHTML();
        }

        // Remove function
        removeBtn.onclick = () => {
          removeBook(book.id);
        };
      });
    }

    syncStorage();
  }
}

// Function
function addBook(e) {
  e.preventDefault();

  const tittleValue = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const id = Date.now();

  const book = new Books(id, tittleValue, author);

  books = [...books, book];

  Books.createHTML();

  form.reset();
}

// Event Listeners
function eventListeners() {
  // add book
  form.addEventListener('submit', addBook);

  // book DOM
  document.addEventListener('DOMContentLoaded', () => {
    books = JSON.parse(localStorage.getItem('book')) || [];

    Books.createHTML();
  });
}

eventListeners();

function displayDate() {
  document.querySelector('.date-text').innerHTML = Date();
}

window.onload = displayDate();

const list = document.querySelector('.list');
const addNew = document.querySelector('.add-new');
const contact = document.querySelector('.contact-info');

function displayList() {
  list.style.display = 'flex';
  addNew.style.display = 'none';
  contact.style.display = 'none';
}

function displayAddNew() {
  list.style.display = 'none';
  addNew.style.display = 'flex';
  contact.style.display = 'none';
}

function displayContact() {
  list.style.display = 'none';
  addNew.style.display = 'none';
  contact.style.display = 'flex';
}

const navList = document.getElementById('nav-list');
navList.addEventListener('click', displayList);

const navAddNew = document.getElementById('navAddNew');
navAddNew.addEventListener('click', displayAddNew);

const navContact = document.getElementById('navContact');
navContact.addEventListener('click', displayContact);