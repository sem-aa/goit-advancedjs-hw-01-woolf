import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = form.querySelector('[name="email"]');
const message = form.querySelector('[name="message"]');

const KEY_FIELD = 'feedback-form-state';

const objData = { email: '', message: '' };

const handleInputChange = e => {
  const inputName = e.target.name;
  const inputMessage = e.target.value;
  
  objData[inputName] = inputMessage;

  localStorage.setItem(KEY_FIELD, JSON.stringify(objData));
};

if (localStorage.getItem(KEY_FIELD)) {
  const dataLocal = JSON.parse(localStorage.getItem(KEY_FIELD));

  email.value = dataLocal.email;
  message.value = dataLocal.message;
}

const handleSubmit = e => {
  e.preventDefault();
  localStorage.removeItem(KEY_FIELD);
  console.log(objData);
  objData.email = '';
  objData.message = '';
  email.value = '';
  message.value = '';
};

form.addEventListener('input', throttle(handleInputChange, 500));
form.addEventListener('submit', handleSubmit);
