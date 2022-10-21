import commentApi from './commenAPI.js';

const modalMethods = {
  async movie(movieName) {
    const modal = document.querySelector('#staticBackdrop');
    modal.innerHTML = '';
    const url = `https://api.tvmaze.com/lookup/shows?thetvdb=${movieName}`;
    const result = await fetch(url).then((response) => response.json());
    if (result.rating.average === null) {
      result.rating.average = 'Not rated';
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
            <h6 class="card-subtitle mb-4 text-muted">Language: ${result.language}</h6>
            </div>
            <a href="${result.url}" target="_blank" class="link-primary ps-4">More</a>
            <h5 class="text-start pt-2 ps-4 text-muted">Type: ${result.type}</h5>
            <h5 class="text-start pt-2 ps-4 text-muted">Runtime: ${result.runtime}</h5>
            <h5 class="text-start pt-2 ps-4 text-muted">Rating: ${result.rating.average}</h5>
            <p  class="text-start pt-2 mb-4 ps-4 text-muted ps-4>${result.genres}</p>
            <form id="form" method="post" class='modalForm  mt-2'>
            <h3></h3>
            <p class="ps-2">Commented <span id="commentCount" class="badge rounded-pill bg-info text-dark"></span> times</p>
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

    const submit = document.querySelector('#submit');
    submit.addEventListener('click', (e) => {
      e.preventDefault();
      const username = document.querySelector('#showID').value;
      const comment = document.querySelector('#commentshowID').value;
      commentApi.addComment(movieName, username, comment);

      const date = new Date();
      const creationDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

      const commentHtml = document.createElement('p');
      commentHtml.classList.add('ps-3');
      commentHtml.innerHTML = `<span class="fs-4 text-mute">${username}</span> 
      <span class="commented-date badge rounded-pill bg-secondary  ">${creationDate}:</span> 
      <span class="ps-2 fs-4 "> ${comment}</span>`;

      const commentList = document.querySelector('.commentSection');
      commentList.appendChild(commentHtml);

      const commentCount = document.querySelector('#commentCount');
      const nextCount = Number(commentCount.textContent) + 1;
      commentCount.textContent = nextCount;
    });
  },

  async getComments(movieName) {
    const allComments = await commentApi.getComments(movieName);
    const commentList = document.querySelector('.commentSection');

    const commentHtml = document.createElement('div');
    commentHtml.innerHTML = '';
    if (!allComments.error) {
      for (let i = 0; i < allComments.length; i += 1) {
        const { username, comment } = allComments[i];
        const creationDate = allComments[i].creation_date;
        commentHtml.innerHTML += `<p class="ps-3"><span class="fs-4 text-mute">${username}</span> 
        <span class="commented-date badge rounded-pill bg-secondary  ">${creationDate}:</span> 
        <span class="ps-2 fs-4 "> ${comment}</span></p>`;
        commentList.appendChild(commentHtml);
      }
    }

    const commentCount = document.querySelector('#commentCount');
    const nextCount = allComments.length || 0;
    commentCount.textContent = nextCount;
  },

  countComments() {
    const comments = document.querySelector('.commentSection').children;
    const nextCount = comments.length || 1;
    return nextCount;
  },
};

export default modalMethods;