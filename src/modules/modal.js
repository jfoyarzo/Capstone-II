const modalMethods = {
  async movie(movieName) {
    const modal = document.querySelector('#staticBackdrop');
    modal.innerHTML = '';
    const url = `https://api.tvmaze.com/singlesearch/shows?q=${movieName}`;
    const result = await fetch(url).then((response) => response.json());
    if (result.rating.average === null) {
      result.rating.average = 'No rating';
    }
    const allContent = document.createElement('div');
    allContent.classList.add('modal-dialog', 'modal-dialog-scrollable');
    allContent.innerHTML = `
    <!-- Modal -->
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Show Details</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div style="background-image: url(${result.image.original})">
              <img src="${result.image.original}" class="rounded img-fluid pb-4 show-image" alt="...">
            </div>
            <div class="text-center">
            <h5 class="card-title m-3">Show name: ${result.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Language: ${result.language}</h6>
            </div>
            <a href="${result.url}" target="_blank" class="link-primary ps-4">More</a>
            <h5 class="text-start ps-4 text-muted">Type: ${result.type}n</h5>
            <h5 class="text-start ps-4 text-muted">Runtime: ${result.runtime}</h5>
            <h5 class="text-start ps-4 text-muted">Rating: ${result.rating.average}</h5>
            <p  class="text-start ps-4 text-muted ps-4>${result.genres}</p>
            
          </div>
        </div>
`;
    modal.appendChild(allContent);
  },
};

export default modalMethods;