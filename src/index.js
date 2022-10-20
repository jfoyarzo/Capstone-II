import './style.css';

import { displayShows, updateLikes } from './modules/dom-manipulation.js';

displayShows()
  .then(() => {
    const likeBtns = document.querySelectorAll('.like-wrapper');
    likeBtns.forEach((element) => {
      const { id } = element.dataset;
      element.addEventListener('click', () => {
        updateLikes(id, element);
      }, { once: true });
    });
  });