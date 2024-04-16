const originForm = document.querySelector('.beverage').cloneNode(true);
let counter = 1;
let factCount = 1;

const addForm = document.querySelector('.add-button');
function newForm(event) {
    const form = originForm.cloneNode(true);
    form.querySelector('.beverage-count').innerText = `Напиток №${++counter}`;
    let clonedRadioButtons = form.querySelectorAll('input[type="radio"]');
    clonedRadioButtons.forEach((radio, index) => {
        radio.setAttribute('name', `milk${counter}`);
    });
    factCount++;
    addForm.before(form);
}
addForm.addEventListener('click', newForm);

const submitButton = document.querySelector('.submit-button');
function submitFunction(event) {
    event.preventDefault();
    document.querySelector('.modalTitle').innerText = `Вы заказали ${factCount} напит${factCount % 10 === 1 ? 'ок' : ([2, 3, 4].includes(factCount % 10) && Math.floor(factCount / 10) % 10 !== 1) ? 'кa' : 'ков'}`
    document.querySelector('.modalWindow').style.display = 'block';
}
submitButton.addEventListener('click', submitFunction);

const closeButton = document.querySelector('.closeModal');
function closeFunction(event) {
    event.preventDefault();
    document.querySelector('.modalWindow').style.display = 'none';
}
closeButton.addEventListener('click', closeFunction);