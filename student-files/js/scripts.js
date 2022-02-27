
const searchContainerDiv = document.querySelector('.search-container');
searchContainerDiv.insertAdjacentHTML("beforeend", "<form action='#' method='get'>");
searchContainerDiv.insertAdjacentHTML('beforeend', '<input type="search" id="search-input" class="search-input" placeholder="Search...">');
searchContainerDiv.insertAdjacentHTML('beforeend', '<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit"></input>');
searchContainerDiv.insertAdjacentHTML('beforeend', '</form>');

const galleryDiv = document.getElementById('gallery');
galleryDiv.insertAdjacentHTML('beforeend', '<div class="card">');
galleryDiv.insertAdjacentHTML('beforeend', '<div class="card-img-container">');
galleryDiv.insertAdjacentHTML('beforeend', '<img class="card-img" src="https://place-hold.it/90x90" alt="profile picture">');
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
body.insertAdjacentHTML('beforeend', '<img class="modal-img" src="https://place-hold.it/125x125" alt="profile picture">');
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

$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
}); 

const request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (request.readyState === 4) {
        const employees = JSON.parse(request.responseText);
        console.log(employees);
        let statusHTML = "<div class='card-img-container'>";
        for (let i = 0; i < employees.length; i++) {
            statusHMTL += `<img class='card-img' src='${employees[i].image}' alt='profile-picture'>`;
        }
        statusHTML += "</div>";
        
        statusHTML = "<div class='card-info-container'>";
        for (let i = 0; i < employees.length; i++) {
            statusHTML += '<h3 id="name" class="card-name cap">';
            statusHTML += employees[i].name;
            statusHTML += '</h3>';
            statusHTML += '<p class="card-text">';
            statusHTML += employees[i].email;
            statusHTML += '</p>';
            statusHTML += '<p class="card-text cap">'
            statusHTML += employees[i].location;
            statusHTML += '</p>';

        }
        statusHTML += '</div>'

       document.querySelector('.card').innerHTML = statusHTML;


        const getCloseButton = document.getElementById('modal-close-btn');
        getCloseButton.addEventListener('click', () => getJSON('https://randomuser.me/api/?results=12&inc=image,name,email,location'));

    }
};

request.open('GET', 'https://randomuser.me/api/?results=12&inc=image,name,email,location');
request.send();

/* const url = 'https://randomuser.me/api/?results=12&inc=image,name,email,location';


async function getEmployees(url) {
    const employeeResponse = await fetch(url);
    const employeeJSON = await employeeResponse.json();

    const profiles = employeeJSON.employees.map( async (employees) => {
        const profileResponse = await fetch ( employees.image + employees.name + employees.email + employees.location);
        const profileJSON = await profileResponse.json();
    });
}





function generateHTML(data) {
    data.map( person => {
        
        const getCardDiv = document.querySelector('.card');
        getCardDiv.appendChild(statusHTML);

        let statusHTML = "<div class='card-img-container'>";
        for (let i = 0; i < employees.length; i++) {
            statusHMTL += `<img class='card-img' src='${employees[i].image}' alt='profile-picture'>`;
        }
        statusHTML += "</div>";
        
        statusHTML = "<div class='card-info-container'>";
        for (let i = 0; i < employees.length; i++) {
            statusHTML += '<h3 id="name" class="card-name cap">';
            statusHTML += employees[i].name;
            statusHTML += '</h3>';
            statusHTML += '<p class="card-text">';
            statusHTML += employees[i].email;
            statusHTML += '</p>';
            statusHTML += '<p class="card-text cap">'
            statusHTML += employees[i].location;
            statusHTML += '</p>';

        }
        statusHTML += '</div>'

    })

}


const getCloseButton = document.getElementById('modal-close-btn');
getCloseButton.addEventListener('click', (event) => {

}); */