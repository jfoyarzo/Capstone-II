import getAnimals from './api-requests.js';

const displayAnimals = async () => {
  const animals = await getAnimals(10);
  const fragment = new DocumentFragment();
  const container = document.querySelector('.cards-container');
  const parser = new DOMParser();
  animals.forEach((element, index) => {
    const cardStr = `<div class="col-12 col-md-4">
    <div class="card mb-3">
    <img src="${element.image_link}" class="card-img-top" alt="${element.name} image">
    <div class="card-body d-flex flex-column">
      <div class="d-flex justify-content-between">
        <div class="title-wrapper">
          <h5 class="card-title">${element.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${element.latin_name}</h6>
        </div>      
        <div class="like-wrapper text-center">
          <i class="fa-regular fa-heart fa-2xl like"></i>
          <p>2</p>
        </div>      
      </div>      
      <button type="button" class="btn btn-primary align-self-end mt-auto" data-index="${index}">Comments</button>
    </div>
    </div>
  </div>`;
    const card = parser.parseFromString(cardStr, 'text/html').body.firstChild;
    fragment.appendChild(card);
  });
  container.appendChild(fragment);
};

export default displayAnimals;