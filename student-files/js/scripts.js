
const searchContainerDiv = document.querySelector('.search-container');


const galleryDiv = document.getElementById('gallery');


const body = document.querySelector('body');


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
        const results = JSON.parse(request.responseText);
        const employees = results.results;
        console.log(employees);
        

        for (let i = 0; i < employees.length; i++) {
            let statusHTML = "<div class='card'>";
            statusHTML += "<div class='card-img-container'>";
            statusHTML += `<img class='card-img' src='${employees[i].image}' alt='profile-picture'>`;
            statusHTML += "</div>";
            statusHTML += "<div class='card-info-container'>";
            statusHTML += '<h3 id="name" class="card">';
            statusHTML += `${employees[i].name}`;
            statusHTML += '</h3>';
            statusHTML += '<p class="card-text">';
            statusHTML += `${employees[i].email}`;
            statusHTML += '</p>';
            statusHTML += '<p class="card-text cap">';
            statusHTML += `${employees[i].location}`;
            statusHTML += '</p>';
            statusHTML += '</div>';
            statusHTML += '</div>';
            galleryDiv.insertAdjacentHTML('beforeend', statusHTML);
        }
        
        

        /* const getCloseButton = document.getElementById('modal-close-btn');
        getCloseButton.addEventListener('click', () => getJSON('https://randomuser.me/api/?results=12')); */
    }
};

request.open('GET', 'https://randomuser.me/api/?results=12', true);
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