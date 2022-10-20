import { getShows, getLikes, postLike } from './api-requests.js';

const displayShows = async () => {
  const data = await getShows('c');
  const likes = await getLikes();
  const fragment = new DocumentFragment();
  const container = document.querySelector('.cards-container');
  const parser = new DOMParser();
  data.forEach((element, index) => {
    const { show } = element;
    const item = likes.find((e) => e.item_id === show.id);
    let likeCount = 0;
    if (item) {
      likeCount = item.likes;
    }
    const cardStr = `<div class="col-12 col-md-4">
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
        <i class="fa-regular fa-comment-dots fa-xl"></i>
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