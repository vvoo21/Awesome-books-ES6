import {
  listBooks, list, addNew, contact,
} from './selectors.js';
import { DateTime } from './luxon.js';

// Clean HTML
export const cleanHTML = () => {
  while (listBooks.firstChild) {
    listBooks.removeChild(listBooks.firstChild);
  }
};

// Display date
export const displayDate = () => {
  const date = document.querySelector('.date-text');
  setInterval(() => {
    date.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  }, 0);
};
displayDate();

// Display sections
export const displayList = () => {
  list.style.display = 'flex';
  addNew.style.display = 'none';
  contact.style.display = 'none';
};

export const displayAddNew = () => {
  list.style.display = 'none';
  addNew.style.display = 'flex';
  contact.style.display = 'none';
};

export const displayContact = () => {
  list.style.display = 'none';
  addNew.style.display = 'none';
  contact.style.display = 'flex';
};
