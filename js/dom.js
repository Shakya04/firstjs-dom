const btn = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.getElementById('email');
const msg = document.querySelector('.msg');
const li = document.createElement('li');
const user = document.querySelector('.list');

btn.addEventListener('submit', (e) => {
    e.preventDefault();

    if(nameInput.value == '' || emailInput.value == ''){
        msg.classList.add('error-msg');
        msg.innerHTML = 'Please enter in the required field';
        setTimeout(() => msg.remove(), 3000);
    }
    else{
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
        user.appendChild(li);
    }

});


