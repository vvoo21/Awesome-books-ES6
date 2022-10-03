import {addBook, books} from './modules/books.js';
import {displayList, displayAddNew, displayContact} from './modules/functions.js';
import {form, navList, navAddNew, navContact} from './modules/selectors.js';
import Books from './modules/UI.js';

function eventListeners() {
  // add book
  form.addEventListener('submit', addBook);

  // book DOM
  document.addEventListener('DOMContentLoaded', () => {
    let books = JSON.parse(localStorage.getItem('book')) || [];

    Books.createHTML();
  });

  //display sections
  navList.addEventListener('click', displayList);
  navAddNew.addEventListener('click', displayAddNew);
  navContact.addEventListener('click', displayContact);
}

eventListeners();