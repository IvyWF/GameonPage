function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = 'none';
}

closeBtn[0].addEventListener('click', closeModal); 


// Form Fields Validation - DOM Elements
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const tournamentsQuantity = document.getElementById('quantity');
const locations = document.getElementById('locations');
const termsChecked = document.getElementById('checkbox1');

// Names check
function checkFirstName() {
    if (firstName.value.trim().length < 2 || firstName.value === '') {
      firstName.parentElement.setAttribute('data-error-visible', 'true');
    } else {
      firstName.parentElement.setAttribute('data-error-visible', 'false');
    }
}

firstName.addEventListener('input', checkFirstName);

function checkLastName() {
  if (lastName.value.trim().length < 2 || lastName.value === '') {
    lastName.parentElement.setAttribute('data-error-visible', 'true');
  } else {
    lastName.parentElement.setAttribute('data-error-visible', 'false');
  }
}

lastName.addEventListener('input', checkLastName);

document.querySelector('#email').addEventListener('input', function (e) {
  let entryValue = e.target.value;
  let inputId = e.target.id

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(entryValue)) {
    hideError(inputId)
  } else {
    displayError(inputId);
  }
});

const hideError = (elt) => {

  const targetedElementParent = document.getElementById(elt).parentElement
  targetedElementParent.setAttribute('data-error-visible', 'false')

}

const displayError = (elt) => {

  const targetedElementParent = document.getElementById(elt).parentElement
  targetedElementParent.setAttribute('data-error-visible', 'true')

}



/*// Email check
function checkEmail() {
  let emailFormat  = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/; // /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/
  if (email.value.trim().match(emailFormat)) {
      email.parentElement.setAttribute('data-error-visible', 'false');
  } else {
    email.parentElement.setAttribute('data-error-visible', 'true');
    email.style.border = '2px solid #e54858';
  }
}

email.addEventListener('input', checkEmail);*/

// Birthdate check
function checkBirthdate() {
  
}

// Tournaments check
function checkTournamentsQuantity() {
  if (tournamentsQuantity.value.trim().length === 0 || isNaN(quantity.value.trim()) === true || quantity.value.trim() < 0) {
    tournamentsQuantity.parentElement.setAttribute('data-error-visible', 'true');
    tournamentsQuantity.style.border = '2px solid #e54858';
  } else {
    tournamentsQuantity.parentElement.setAttribute('data-error-visible', 'false');
  }
}

// Locations check
function checkLocations() {
  locations.setAttribute('data-error-visible', 'true');
  
}

// Terms checked check
function checkCheckBox() {
  if (termsChecked.checked === false) {
    termsChecked.parentElement.setAttribute('data-error-visible', 'true');
    return false;
  } else {
    termsChecked.parentElement.setAttribute('data-error-visible', 'false');
    return true;
  }
}

