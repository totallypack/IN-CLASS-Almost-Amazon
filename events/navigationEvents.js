import {
  getBooks,
  booksOnSale
} from '../api/bookData';
import {
  getAuthors
} from '../api/authorData';
import {
  showBooks
} from '../pages/books';
import {
  showAuthors,
  emptyAuthors
} from '../pages/authors';
import { signOut } from '../utils/auth';

const navigationEvents = () => {
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#sale-books').addEventListener('click', () => {
    booksOnSale().then(showBooks);
  });

  document.querySelector('#all-books').addEventListener('click', () => {
    getBooks().then(showBooks);
  });

  document.querySelector('#authors').addEventListener('click', () => {
    getAuthors().then((response) => {
      const authorsArray = Array.isArray(response) ? response : Object.values(response);

      if (authorsArray.length) {
        showAuthors(authorsArray);
      } else {
        emptyAuthors();
      }
    });
  });

  // STRETCH: SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);

    // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      // MAKE A CALL TO THE API TO FILTER ON THE BOOKS
      // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
      // OTHERWISE SHOW THE STORE

      document.querySelector('#search').value = '';
    }
  });
};

export default navigationEvents;
