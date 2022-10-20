import commentApi from './commenAPI.js';

const modalMethods = {
  async movie(movieName) {
    const modal = document.querySelector('#staticBackdrop');
    modal.innerHTML = '';
    const url = `https://api.tvmaze.com/singlesearch/shows?q=${movieName}`;
    const result = await fetch(url).then((response) => response.json());
    console.log(result.id);
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
            <form id="form" method="post" class='modalForm mt-2'>
            <h3></h3>
            <p>Comented <span id="commentCount" class="badge rounded-pill bg-info text-dark"></span> times</p>
            <div class='justify-content-center input-group-sm'>
              <input class="form-control formInput" type="text" placeholder="Your name" name="name" id="showID" required>
              <textarea class="form-control formInput mt-2" type="text" placeholder="Your comment" name="comment" id="commentshowID" required></textarea>
            </div>
            <div class="modal-footer mt-2 ma-0">
              <input type="submit" value="Comment" class="submit btn btn-primary float-end" id="submit">
            </div>
          </form>
          <div class="commentSection"></div>
          </div>
        </div>
`;
    modal.appendChild(allContent);

    // Event listener for the form
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.querySelector('#showID').value;
      const comment = document.querySelector('#commentshowID').value;
      commentApi.addComment(result.id, username, comment);

      const date = new Date();
      const creationDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

      const commentHtml = document.createElement('p');
      commentHtml.innerHTML = `<span class="badge rounded-pill">${username} ${creationDate}:</span> ${comment}`;

      const commentList = document.querySelector('.commentSection');
      commentList.appendChild(commentHtml);

      const commentCount = document.querySelector('#commentCount');
      const nextCount = Number(commentCount.textContent) + 1;
      commentCount.textContent = nextCount;

      form.reset();
    });
  },
};

export default modalMethods;