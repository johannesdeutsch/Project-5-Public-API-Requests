
const searchContainerDiv = document.querySelector('.search-container');


const galleryDiv = document.getElementById('gallery');


const body = document.querySelector('body');


console.log(searchContainerDiv);
console.log(galleryDiv);
console.log(body);

/* $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
});  */

const request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (request.readyState === 4) {
        const results = JSON.parse(request.responseText);
        const employees = results.results;
        console.log(employees);
        

        for (let i = 0; i < employees.length; i++) {
            let statusHTML = "<div class='card'>";
            statusHTML += "<div class='card-img-container'>";
            statusHTML += `<img class='card-img' src='${employees[i].picture.large}' alt='profile-picture'>`;
            statusHTML += "</div>";
            statusHTML += "<div class='card-info-container'>";
            statusHTML += '<h3 id="name" class="modal-name cap">';
            statusHTML += employees[i].name.title + ' ' + employees[i].name.first + ' ' + employees[i].name.last;
            statusHTML += '</h3>';
            statusHTML += '<p class="card-text">';
            statusHTML += employees[i].email;
            statusHTML += '</p>';
            statusHTML += '<p class="card-text cap">';
            statusHTML += employees[i].location.city + ', ' + employees[i].location.country;
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




const getCardDiv = document.getElementsByClassName('card');
console.log(getCardDiv);


function insertModal() {
    let modalHTML = '<div class="modal-container">';
    modalHTML = '<div class="modal">';
    modalHTML =  '<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>';
    modalHTML =  '<div class="modal-info-container">';
    modalHTML =  '<img class="modal-img" src=`${employees[i].picture.large}` alt="profile picture">';
    modalHTML =  '<h3 id="name" class="modal-name cap">employees[i].name.title + " " + employees[i].name.first + " " + employees[i].name.last</h3>';
    modalHTML =  '<p class="modal-text">employees[i].email</p>';
    modalHTML =  '<p class="modal-text cap">city</p>';
    modalHTML =  '<hr>';
    modalHTML =  '<p class="modal-text">(555) 555-5555</p>';
    modalHTML =  '<p class="modal-text">123 Portland Ave., employees[i].location.city, OR 97204</p>';
    modalHTML =  '<p class="modal-text">Birthday: 10/21/2015</p>';
    modalHTML =  '</div>';
    modalHTML =  '</div>';
            
    body.insertAdjacentHTML('beforeend', modalHTML);
        
}




for (let i = 0; i < getCardDiv.length; i++) {

    getCardDiv[i].addEventListener('click', (event) => {
            insertModal(event).style.display = "block";

            

            

            //console.log(modalContainer);

            let getCloseButton = document.getElementById('modal-close-btn');
            console.log(getCloseButton);
            getCloseButton.addEventListener('click', (event) => {
                if (event.target === getCloseButton || event.target === galleryDiv) {
                    modalHTML.style.display = 'none';
                }
            });
        

    });

}