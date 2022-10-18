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
      <h5 class="card-title">${element.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${element.latin_name}</h6>
      <ul class="card-text">
      <li>Habitat: ${element.habitat}</li>
      <li>Diet: ${element.diet}</li>
      <li>Location: ${element.geo_range}</li>
      </ul>
      <a href="#" class="btn btn-primary align-self-end mt-auto" data-index="${index}">Comments</a>
    </div>
    </div>
  </div>`;
    const card = parser.parseFromString(cardStr, 'text/html').body.firstChild;
    fragment.appendChild(card);
  });
  container.appendChild(fragment);
};

export default displayAnimals;