//PROJECT 5: PUBLIC API REQUESTS


//global variables and selecting important elements

const searchContainerDiv = document.querySelector('.search-container');
const galleryDiv = document.getElementById('gallery');
const body = document.querySelector('body');
const urlAPI = 'https://randomuser.me/api/?results=12';
let employees = [];



//sending a fetch request to the API

fetch(urlAPI)
.then(response => response.json())
.then(response => response.results)
.then(displayEmployees)
.then(searchForm)
.then(searchFunctionality)
.catch(err => console.log(err))



//display the data from the API on the page: 12 random employees

function displayEmployees(employeeData) {
    employees = employeeData;
    employeeHTML = '';

    employees.forEach((employee, index) => {
        let name = employee.name;
        let email = employee.email;
        let city = employee.location.city;
        let picture = employee.picture;

        employeeHTML += `
        <div class='card' data-index='${index}'>
        <div class='card-img-container'>
        <img class='card-img' src='${picture.large}' alt='profile-picture'>
        </div>
        <div class='card-info-container'>
        <h3 id="name" class="modal-name cap">${name.first} ${name.last}</h3>
        <p class="card-text">${email}</p>
        <p class="card-text cap">${city}</p>
        </div>
        </div>
        `   
    });
    
    galleryDiv.innerHTML = employeeHTML;
}



//appending the search form to the page

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




//setting up the search functionality: when there's an input it checks if this is included in one of the names

function searchFunctionality() {

    let getSearchInput = document.getElementById('search-input');

    getSearchInput.addEventListener('input', (e) => {
        
        let getSearch = e.target.value.toLowerCase();
        
        let cardNames = document.querySelectorAll('#name');  
            
        cardNames.forEach(cardName => {
            if (cardName.textContent.toLowerCase().includes(getSearch)) {
                cardName.parentElement.parentElement.style.display = 'flex';
            } else {
                cardName.parentElement.parentElement.style.display = 'none';
            }
        });       

    }); 

};




/* the modal window function: appending the predefined HTML to the page, connecting the data to the employee cards 
so that the correct user is shown. Included for Exceeds is also a functionality to toggle forwards and backwards 
beetween the employees when the modal window is open */

function displayModal(index) {
    let { name, dob, phone, email, location: { city, street, state, postcode }, picture } = employees[index];
    
    let date = new Date(dob.date);

    const modalHTML = `
    <div class="modal-container">
    <div class="modal">
    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>'
    <div class="modal-info-container">
    <img class="modal-img" src="${picture.large}" alt="profile picture">
    <h3 id="name" class="modal-name cap">${name.first} ${name.last}</h3>
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
    
    const getModal = document.querySelector('.modal-container');
    const getCloseButton = document.getElementById('modal-close-btn');

    getCloseButton.addEventListener('click', (e) => {
      const strong = document.querySelector('strong');
  
      if (e.target == getCloseButton || strong) {
        getModal.remove();
      } 
    });
   
    let getModalPrev = document.getElementById('modal-prev');
    let getModalNext = document.getElementById('modal-next');
    let parsed = parseInt(index);

    getModalPrev.addEventListener('click', (e) => {
        if (e.target === getModalPrev && parsed !== 0) {
            getModal.remove(); 
            displayModal(parsed - 1);
        } else if (e.target === getModalPrev && parsed === 0){
            getModal.remove();
            displayModal(11);
        }
    });

    getModalNext.addEventListener('click', (e) => {
        if (e.target === getModalNext && parsed !== 11) {
            getModal.remove();
            displayModal(parsed + 1);
        } else if (e.target === getModalNext && parsed === 11) {
            getModal.remove();
            displayModal(0);           
        }
    });

}



//the event listener to open the modal when a card is clicked

galleryDiv.addEventListener('click', e => {
    if (e.target !== galleryDiv) {
        let card = e.target.closest('.card');
        index = card.getAttribute('data-index');
        displayModal(index);
    }
}); 

