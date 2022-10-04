import {listBooks, list, addNew, contact} from './selectors.js';
import { DateTime } from './luxon.js';

// Clean HTML
export function cleanHTML() {
  while (listBooks.firstChild) {
    listBooks.removeChild(listBooks.firstChild);
  }
}

//Display date
export function displayDate() {
  const date = document.querySelector('.date-text');
  setInterval(() => {
    date.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  }, 0);
}
displayDate();

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

