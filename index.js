const originForm = document.querySelector('.beverage').cloneNode(true);
let counter = 1;
let factCount = 1;

function removeForm(event) {
    if (factCount > 1) {
        factCount--;
        this.parentElement.remove();
    }
}
document.querySelector('.removeButton').addEventListener('click', removeForm);

const addForm = document.querySelector('.add-button');
function newForm(event) {
    const form = originForm.cloneNode(true);
    form.querySelector('.beverage-count').innerText = `Напиток №${++counter}`;
    form.querySelector('.removeButton').addEventListener('click', removeForm);
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
    const table = document.createElement('table');
    const forms = document.querySelectorAll('.beverage');
    for (let form of forms) {
        let row = document.createElement('tr');
        const arr = [form.querySelector('.coffeeType').value,
            form.querySelectorAll('.field input[type="radio"]:checked')[0].value,
            Array.from(form.querySelectorAll('.field input[type="checkbox"]:checked')).map(checkbox => checkbox.value).join(', '),
            form.querySelector('.wishes').value]
        for (let val of arr) {
            let cell = document.createElement('td');
            cell.textContent = val;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    document.querySelector('.modalContent').appendChild(table);
}
submitButton.addEventListener('click', submitFunction);

const closeButton = document.querySelector('.closeModal');
function closeFunction(event) {
    event.preventDefault();
    document.querySelector('.modalWindow').style.display = 'none';
}
closeButton.addEventListener('click', closeFunction);