const pass = document.querySelector('#password');
const confirmPass = document.querySelector('#confirm-password');
const submit = document.querySelector('.submit');
const field = document.querySelector('fieldset');

submit.addEventListener('click', (e) => {
        if(confirmPass.value != pass.value) {
            pass.classList.add('error');
            confirmPass.classList.add('error');
            const div = document.createElement('div');
            div.textContent = "passwords do not match";
            div.classList.add('message');
            field.appendChild(div);
            
            e.preventDefault();
        }
    })

