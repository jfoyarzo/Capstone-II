import './style.css';
import displayShows from './modules/dom-manipulation.js';
import modal from './modules/modal.js';

displayShows();
const card = document.querySelector('.cards-container');
card.addEventListener('click', (e) => {
  const text = e.target.textContent;
  if (text.trim() === 'Details') {
    console.log(e.target.id);
    /* movie(e.target.id); */
    modal.movie(e.target.id);
  }
});