const originForm = document.querySelector('.beverage').cloneNode(true);
let counter = 1;

const addForm = document.querySelector('.add-button');

function newForm(event) {
    const form = originForm.cloneNode(true);
    form.querySelector('.beverage-count').innerText = `Напиток №${++counter}`;
    document.insertBefore(form, addForm);
}

addForm.addEventListener('click', newForm);

const submitButton = document.querySelector('.submit-button');
function submitFunction(event) {
    event.preventDefault();
    document.querySelector('.modalWindow').style.display = 'block';
}
submitButton.addEventListener('click', submitFunction);

const closeButton = document.querySelector('.closeModal');
function closeFunction(event) {
    event.preventDefault();
    document.querySelector('.modalWindow').style.display = 'none';
}
closeButton.addEventListener('click', closeFunction);