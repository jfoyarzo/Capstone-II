import displayShows from './dom-manipulation.js';
import getShows from './api-requests.js';

const modal = function () {
  displayShows()
    .then(async () => {
      const comments = document.querySelectorAll('.comments-wrapper');
      const data = await getShows('c');
      comments.forEach((e) => {
        e.addEventListener('click', function () {
          const { index } = this.dataset;
          const obj = data[index];
          console.log(obj.show.name);
          const container = document.querySelector('.modal-container');
          container.innerHTML = `

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="text-center">
          <img src="..." class="rounded img-fluid" alt="...">
        </div>
        <div class="text-center">
        <h5 class="card-title">Name: ${obj.show.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Language: English</h6>
        </div>
        <h5 class="text-start text-muted">Name: Western</h5>
        <h5 class="text-start text-muted">Type: Western</h5>
        <h5 class="text-start text-muted">Runtime: Western</h5>
        <h5 class="text-start text-muted">Rating: Western</h5>
      </div>
    </div>
  </div>
</div>
`;
        });
      });
    });
};

export default modal;