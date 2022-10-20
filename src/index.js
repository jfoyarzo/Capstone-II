import './style.css';

import displayShows from './modules/dom-manipulation.js';

displayShows()
  .then(() => {
    const likeBtns = document.querySelectorAll('.like-wrapper');
    likeBtns.forEach((element) => {
      const { id } = element.dataset;
      element.addEventListener('click', (e) => {
        console.log(element.lastElementChild.textContent)
      })
    })
  })