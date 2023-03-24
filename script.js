const pass = document.querySelector('#password');
const confirm = document.querySelector('#confirm-password');
const submit = document.querySelector('.submit');


submit.addEventListener('click', () => {
    if(pass.textContent != confirm.textContent) {
        alert("passwords do not match");
    }
})