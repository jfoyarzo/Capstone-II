import './style.css';

import { displayShows, updateLikes } from './modules/dom-manipulation.js';
import modal from './modules/modal.js';

displayShows()
  .then(() => {
    const likeBtns = document.querySelectorAll('.like-wrapper');
    likeBtns.forEach((element) => {
      const { id } = element.dataset;
      element.addEventListener('click', () => {
        updateLikes(id, element);
      }, { once: true });
    });
    const card = document.querySelector('.cards-container');
    card.addEventListener('click', (e) => {
      const text = e.target.textContent;
      if (text.trim() === 'Details') {
        modal.movie(e.target.id);
      }
    });
  });
