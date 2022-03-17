
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
    <p class="modal-text">${street.name} ${street.number}, ${state} ${postcode}</p>
    <p class="modal-text">Birthday: ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}</p>
    </div>
    </div>
    `;
    
    
    body.innerHTML = modalHTML;
    
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
