
const searchContainerDiv = document.querySelector('.search-container');
const galleryDiv = document.getElementById('gallery');
const body = document.querySelector('body');
const urlAPI = 'https://randomuser.me/api/?results=12';
let employees = [];
let getModal = document.querySelector('.modal-container');



console.log(searchContainerDiv);
console.log(galleryDiv);
console.log(body);



fetch(urlAPI)
.then(response => response.json())
.then(response => response.results)
.then(displayEmployees)
.then(searchForm)
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


const getSearchContainer = document.querySelector('.search-container');


function searchForm() {
    const searchContainer = `
        <form action='#' method='get'>
        <input type='search' id='search-input' class='search-input' placeholder='Search...'>
        <input type='submit' value='&#x1F50D;' id='search-submit' class='search-submit'>
        </form>
    `
    
    getSearchContainer.insertAdjacentHTML('beforeend', searchContainer);

    
}


let getSearchInput = document.getElementById('search-input');


getSearchInput.addEventListener('input', () => {
     
    let getSearch = e.target.value.toLowerCase;
    
    let cardNames = document.querySelectorAll('#name');  
        
    cardNames.forEach(cardName => {
        if (cardName.innerText.toLowerCase.includes(input.toLowerCase())) {
            cardName.parentElement.parentElement.style.display = 'block';

        } else {
            cardName.parentElement.parentElement.style.display = 'none';
        }
    });       
    
       


}); 





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
    <p class="modal-text">${street.name} ${street.number}, ${state} ${postcode}</p>
    <p class="modal-text">Birthday: ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}</p>
    </div>
    </div>
    <div class="modal-btn-container">
    <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
    <button type="button" id="modal-next" class="modal-next btn">Next</button>
    </div>
    `;
    
    
    body.insertAdjacentHTML('beforeend', modalHTML);
    
    
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

        /* let getModalPrev = document.getElementById('modal-prev');
        let getModalNext = document.getElementById('modal-next');
    
        getModalPrev = document.addEventListener('click', e => {
            displayModal(index - 1);
        });
    
        getModalNext = document.addEventListener('click', e => {
            displayModal(index +1 );
        });   */



}); 







/* let searchButton = document.getElementById('search-submit');
searchButton.addEventListener('click', () => {
    searchFunction();
}); */

