import Books from './UI.js';
import {form} from './selectors.js'

export let books = [];

export const addBook= (e) => {
  e.preventDefault();
  
  const tittleValue = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const id = Date.now();
  
  let book = new Books(id, tittleValue, author);
  
  books = [...books, book];
  
  Books.createHTML();
  
  form.reset();
}