
const searchContainerDiv = document.querySelector('.search-container');
searchContainerDiv.insertAdjacentHTML("beforeend", "<form action='#' method='get'>");
searchContainerDiv.insertAdjacentHTML('beforeend', '<input type="search" id="search-input" class="search-input" placeholder="Search...">');
searchContainerDiv.insertAdjacentHTML('beforeend', '<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit"></input>');
searchContainerDiv.insertAdjacentHTML('beforeend', '</form>');

const galleryDiv = document.getElementById('gallery');
galleryDiv.insertAdjacentHTML('beforeend', '<div class="card">');
galleryDiv.insertAdjacentHTML('beforeend', '<div class="card-img-container">');
galleryDiv.insertAdjacentHTML('beforeend', '<img class="card-img" src="https://placehold.it/90x90" alt="profile picture">');
galleryDiv.insertAdjacentHTML('beforeend', '</div>');
galleryDiv.insertAdjacentHTML('beforeend', '<div class="card-info-container">')
galleryDiv.insertAdjacentHTML('beforeend', '<h3 id="name" class="card-name cap">first last</h3>');
galleryDiv.insertAdjacentHTML('beforeend', '<p class="card-text">email</p>');
galleryDiv.insertAdjacentHTML('beforeend', '<p class="card-text cap">city, state</p>');
galleryDiv.insertAdjacentHTML('beforeend', '</div>');
galleryDiv.insertAdjacentHTML('beforeend', '</div>');

const body = document.querySelector('body');
body.insertAdjacentHTML('beforeend', '<div class="modal-container">');
body.insertAdjacentHTML('beforeend', '<div class="modal">');
body.insertAdjacentHTML('beforeend', '<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>');
body.insertAdjacentHTML('beforeend', '<div class="modal-info-container">');
body.insertAdjacentHTML('beforeend', '<img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">');
body.insertAdjacentHTML('beforeend', '<h3 id="name" class="modal-name cap">name</h3>');
body.insertAdjacentHTML('beforeend', '<p class="modal-text">email</p>');
body.insertAdjacentHTML('beforeend', '<p class="modal-text cap">city</p>');
body.insertAdjacentHTML('beforeend', '<hr>');
body.insertAdjacentHTML('beforeend', '<p class="modal-text">(555) 555-5555</p>');
body.insertAdjacentHTML('beforeend', '<p class="modal-text">123 Portland Ave., Portland, OR 97204</p>');
body.insertAdjacentHTML('beforeend', '<p class="modal-text">Birthday: 10/21/2015</p>');
body.insertAdjacentHTML('beforeend', '</div>');
body.insertAdjacentHTML('beforeend', '</div>');

console.log(searchContainerDiv);
console.log(galleryDiv);
console.log(body);