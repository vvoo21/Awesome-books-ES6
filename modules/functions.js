import {listBooks, list, addNew, contact} from './selectors.js';
import {books} from './books.js';

// Clean HTML
export function cleanHTML() {
  while (listBooks.firstChild) {
    listBooks.removeChild(listBooks.firstChild);
  }
}

// add books to LocalStorage
export function syncStorage() {
  localStorage.setItem('book', JSON.stringify(books));
}

//Display date
export function displayDate() {
  document.querySelector('.date-text').innerHTML = Date();
}

window.onload = displayDate();

//Display sections
export function displayList() {
  list.style.display = 'flex';
  addNew.style.display = 'none';
  contact.style.display = 'none';
}

export function displayAddNew() {
  list.style.display = 'none';
  addNew.style.display = 'flex';
  contact.style.display = 'none';
}

export function displayContact() {
  list.style.display = 'none';
  addNew.style.display = 'none';
  contact.style.display = 'flex';
}

