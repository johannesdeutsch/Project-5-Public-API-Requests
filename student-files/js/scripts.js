
const searchContainerDiv = document.querySelector('.search-container');
const galleryDiv = document.getElementById('gallery');
const body = document.querySelector('body');
const urlAPI = 'https://randomuser.me/api/?results=12';
let employees = [];
let getModal = document.querySelector('.modal-container');



console.log(searchContainerDiv);
console.log(galleryDiv);
console.log(body);

let modalIndex = 0;


fetch(urlAPI)
.then(response => response.json())
.then(response => response.results)
.then(displayEmployees)
.catch(err => console.log(err))

function displayEmployees(employeeData) {
    employees = employeeData;
    employeeHTML = '';

    employees.forEach((employee, index) => {
        let firstName = employee.name.first;
        let lastName = employee.name.last;
        let email = employee.email;
        let city = employee.location.city;
        let picture = employee.picture;

        employeeHTML += `
        <div class='card' data-index='${index}'>
        <div class='card-img-container'>
        <img class='card-img' src='${picture.large}' alt='profile-picture'>
        </div>
        <div class='card-info-container'>
        <h3 id="name" class="modal-name cap">${firstName} ${lastName}</h3>
        <p class="card-text">${email}</p>
        <p class="card-text cap">${city}</p>
        </div>
        </div>
        `   
    });
    
    galleryDiv.innerHTML = employeeHTML;
}

function displayModal(index) {
    let { firstName, lastName, dob, phone, email, location: { city, street, state, postcode }, picture } = employees[index];
    
    let date = new Date(dob.date);

    const modalHTML = `
    <div class="modal-container">
    <div class="modal">
    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>'
    <div class="modal-info-container">
    <img class="modal-img" src="${picture.large}" alt="profile picture">
    <h3 id="name" class="modal-name cap">${firstName} ${lastName}</h3>
    <p class="modal-text">${email}</p>
    <p class="modal-text cap">${city}</p>
    <hr>
    <p class="modal-text">${phone}</p>
    <p class="modal-text">${street}, ${state} ${postcode}</p>
    <p class="modal-text">Birthday: ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}</p>
    </div>
    </div>
    `;
    
    
    body.innerHTML = modalHTML;
    modalIndex = index;
    let getModal = document.querySelector('.modal-container');
    getModal.style.display = 'block';

    

    let getCloseButton = document.getElementById('modal-close-btn');

    getCloseButton.addEventListener('click', () => {
        getModal.style.display = 'none';
    });


}



galleryDiv.addEventListener('click', e => {
    if (e.target !== galleryDiv) {
        const card = e.target.closest('.card');
        index = card.getAttribute('data-index');
        displayModal(index);
    }
});



   







/* function displayEmployees(employeeData) {
    let statusHTML = `
            <div class='card'>
            <div class='card-img-container'>"
            <img class='card-img' src='${employees[i].picture.large}' alt='profile-picture'>
            </div>
            <div class='card-info-container'>
            <h3 id="name" class="modal-name cap">
            ${employees[i].name.title} + ' ' + employees[i].name.first + ' ' + employees[i].name.last
            '</h3>'
            <p class="card-text">'
            employees[i].email
            '</p>'
            '<p class="card-text cap">'
            employees[i].location.city + ', ' + employees[i].location.country
            '</p>'
            '</div>'
            '</div>'
            `

} */



/* $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
});  */

/* const request = new XMLHttpRequest();
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
  //  }
//};

/* request.open('GET', 'https://randomuser.me/api/?results=12', true);
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

let getModal = document.querySelector('.modal');
let getCloseButton = document.getElementById('modal-close-btn'); */ 

/* function showModal() {
    insertModal();
} */

//function windowOnClick(event) {
    
//}

/*  for (let i = 0; i < getCardDiv.length; i++) {

    getCardDiv.onclick = function(){
        insertModal();
    }
    
    getCloseButton.onclick = function(){
        getModal.style.display = "none"
    }
    
    window.onclick = function(e){
        if(e.target == getModal){
          getModal.style.display = "none"
        }
    } */
    
    
    
    
    /* getCardDiv[i].addEventListener('click', event => {
        if (event.target = getCardDiv) {
            showModal();
        }

    }); */
            
//} 







     //console.log(modalContainer);

   
     
     
/*      console.log(getCloseButton);
     getCloseButton.addEventListener('click', (event) => {
         if (event.target === getCloseButton || event.target === galleryDiv) {
             modalHTML.style.display = 'none';
         }
     });
 

}); */