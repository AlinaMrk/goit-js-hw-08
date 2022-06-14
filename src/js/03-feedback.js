import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const comment= document.querySelector('textarea');

const STORAGE_KEY = 'feedback-form-state';

const formData = {};
const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaChange, 500));

populateTextarea();

function onFormSubmit(event) {
    event.preventDefault(); 
    formData[event.target.name] = event.target.value;
    console.log(formData); 
    handleClearText();
}
function handleClearText() {
    refs.form.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = {};
}
function onTextareaChange(event) {
    formData [event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    console.log(formData);
};
function populateTextarea() {
    let savedMessage = localStorage.getItem(STORAGE_KEY)
    if (savedMessage) {
        savedMessage = JSON.parse(savedMessage);
        console.log(savedMessage);
        Object.entries(savedMessage).forEach(([key, value]) => {
            formData[key] = value;
            refs.form.elements[key].value = value;
        });
        
    }
}