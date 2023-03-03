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
/*const email = document.getElementById('email');*/
const tournamentsQuantity = document.getElementById('quantity');
const locations = document.getElementById('locations');
const termsChecked = document.getElementById('checkbox1');

// Form Fields Validation - Error message
const hideError = (elt) => {
  const targetedElementParent = document.getElementById(elt).parentElement
  targetedElementParent.setAttribute('data-error-visible', 'false')
}
const displayError = (elt) => {
  const targetedElementParent = document.getElementById(elt).parentElement
  targetedElementParent.setAttribute('data-error-visible', 'true')
}


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

// Email check
document.querySelector('#email').addEventListener('input', function (e) {
  let entryValue = e.target.value;
  let inputId = e.target.id

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(entryValue)) {
    hideError(inputId);
  } else {
    displayError(inputId);
  }
});

// Birthdate check
document.querySelector('#birthdate').addEventListener('input', function (e) {
  let date_regex = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/([12]|[0-9]|[0-9]|[0-9])$/;
  let entryDate = e.target.value;
  let dateId = e.target.id;

  if (date_regex.test(entryDate)) {
    hideError(dateId);
  } else {
    displayError(dateId);
  }
});

// Tournaments check
document.querySelector('#quantity').addEventListener('input', function (e) {
  let quantite = e.target.value;
  let quantiteId = e.target.id;

  if (quantite < 0 || quantite > 99) {
    displayError(quantiteId);
  } else {
    hideError(quantiteId);
  }
});

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

