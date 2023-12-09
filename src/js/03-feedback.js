import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = form.querySelector('[name="email"]');
const message = form.querySelector('[name="message"]');

const KEY_FIELD = 'feedback-form-state';

let dataLocal = JSON.parse(localStorage.getItem(KEY_FIELD)) || {};

if (dataLocal.email || dataLocal.message) {
  email.value = dataLocal.email ?? '';
  message.value = dataLocal.message ?? '';
}

const handleInputChange = e => {
  const inputName = e.target.name;
  const inputMessage = e.target.value;

  dataLocal[inputName] = inputMessage;

  localStorage.setItem(KEY_FIELD, JSON.stringify(dataLocal));
};

const handleSubmit = e => {
  e.preventDefault();
  localStorage.removeItem(KEY_FIELD);
  console.log(dataLocal);
  dataLocal = {};
  email.value = '';
  message.value = '';
};

form.addEventListener('input', throttle(handleInputChange, 500));
form.addEventListener('submit', handleSubmit);
