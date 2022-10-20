import './style.css';
import displayShows from './modules/dom-manipulation.js';
// import getShows from './modules/api-requests.js';
import modal from './modules/modal.js';

modal();
displayShows();

/*  .then(async () => {
    const comments = document.querySelectorAll('.comments-wrapper');
    const data = await getShows('c');
    comments.forEach((e) => {
      e.addEventListener('click', function () {
        const { index } = this.dataset;
        const obj = data[index];
        console.log(obj.show.name);
      });
    });
  }); */