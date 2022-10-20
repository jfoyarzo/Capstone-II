import getShows from './api-requests.js';

const displayShows = async () => {
  const data = await getShows('c');
  const fragment = new DocumentFragment();
  const container = document.querySelector('.cards-container');
  const parser = new DOMParser();
  data.forEach((element, index) => {
    const { show } = element;
    const cardStr = `<div class="col-12 col-md-4">
    <div class="card mb-3">
    <img src="${show.image.original}" class="card-img-top" alt="${show.name} image">
    <div class="card-body d-flex flex-column">
      <div class="d-flex justify-content-between">
          <h5 class="card-title">${show.name}</h5>
          <div class="btn-wrapper d-flex">     
        <div class="like-wrapper text-center me-3">          
          <i class=" fa-regular fa-heart fa-xl like" role="button"></i>
          <p>2</p>
        </div>      
        <div class="comments-wrapper text-center" data-index="${index}" role="button">         
        <i class="fa-regular fa-comment-dots fa-xl" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
          <p>2</p>
        </div>      
        </div>      
      </div>
    </div>
    </div>
  </div>`;
    const card = parser.parseFromString(cardStr, 'text/html').body.firstChild;
    fragment.appendChild(card);
  });
  container.appendChild(fragment);
};

export default displayShows;
