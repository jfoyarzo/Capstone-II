import { getShows, getLikes, postLike } from './api-requests.js';
import itemCounter from './items-counter.js';

const displayShows = async () => {
  const data = await getShows('c');
  const likes = await getLikes();
  const fragment = new DocumentFragment();
  const container = document.querySelector('.cards-container');
  const parser = new DOMParser();
  const title = document.querySelector('#shows');
  data.forEach((element, index) => {
    const { show } = element;
    const item = likes.find((e) => e.item_id === show.id);
    let likeCount = 0;
    if (item) {
      likeCount = item.likes;
    }
    const cardStr = `<div class="col-12 col-md-4 card-data">
    <div class="card mb-3">
    <img src="${show.image.original}" class="card-img-top" alt="${show.name} image">
    <div class="card-body d-flex flex-column">
      <div class="d-flex justify-content-between">
          <h5 class="card-title">${show.name}</h5>
          <div class="btn-wrapper d-flex">     
        <div class="like-wrapper text-center me-3" data-id="${show.id}" role="button">          
          <i class="fa-regular fa-heart fa-xl like"></i>
          <p>${likeCount}</p>
        </div>      
        <div class="comments-wrapper text-center" data-index="${index}" role="button">
          <button id =${show.externals.thetvdb} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Details
          </button>
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
  const counter = itemCounter('card');
  title.innerText = `Shows(${counter})`;
};

const updateLikes = async (id, element) => {
  let likeCount = parseInt(element.lastElementChild.textContent, 10);
  const heart = element.firstElementChild;
  const result = await postLike(parseInt(id, 10));
  if (result) {
    likeCount += 1;
    element.lastElementChild.innerText = likeCount;
    heart.classList.add('fa-solid');
  }
};

export { displayShows, updateLikes };