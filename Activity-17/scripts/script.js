// Phone number explanation:
// Allows optional country code with + and digits, optional spaces/dashes/parens, 7-14 digits total
const phonePattern = /^\+?(\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})(?:[-.\s]?(\d{1,9}))?$/;

const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');

form.addEventListener('submit', function(event) {
  // Clear previous errors
  nameError.textContent = '';
  emailError.textContent = '';
  phoneError.textContent = '';

  let valid = true;

  // Name validation
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Please enter your name.';
    valid = false;
  }

  // Email validation
  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Please enter your email.';
    valid = false;
  } else if (!emailInput.checkValidity()) {
    emailError.textContent = 'Please enter a valid email address.';
    valid = false;
  }

  // Phone validation
  const phoneVal = phoneInput.value.trim();
  if (phoneVal === '') {
    phoneError.textContent = 'Please enter your phone number.';
    valid = false;
  } else if (!phonePattern.test(phoneVal)) {
    phoneError.textContent = 'Please enter a valid phone number.';
    valid = false;
  }

  if (!valid) {
    event.preventDefault(); //submission if invalid
  }
});
