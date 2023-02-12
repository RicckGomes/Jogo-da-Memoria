var input = document.querySelector('.login__input');
var button = document.querySelector('.login__button');
var form = document.querySelector('.login-form');

button.setAttribute('disabled', '');

var validateInput = ({ target }) => {
  if (target.value.length > 2) {
    button.removeAttribute('disabled');
    return;
  }

  button.setAttribute('disabled', '');
}

var handleSubmit = (event) => {
  event.preventDefault();

  localStorage.setItem('player', input.value);
  window.location = './src/pages/facil.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);