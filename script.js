const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

const button = document.querySelector('#registerBtn');

function isFormValid() {
    return username.value && email.value && password.value;
}

function onInputChange() {
    const isValid = isFormValid();
    button.disabled = isValid == false;
}

function isPasswordConfirmationValid() {
    return password.value == confirmPassword.value
}

username.addEventListener('input', onInputChange);
email.addEventListener('input', onInputChange);
password.addEventListener('input', onInputChange);

confirmPassword.addEventListener('input', () => {
    const confirmMessage = document.querySelector('#confirm-password-error');
    if (isPasswordConfirmationValid() == false) {
        confirmMessage.classList.remove('hidden')
    } else {
        confirmMessage.classList.add('hidden')
    }
})