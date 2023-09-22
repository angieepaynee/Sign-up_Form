const form = document.getElementById('form');
const email = document.getElementById('email');
const emailError = document.getElementById('email-error');
const password1 = document.getElementById('password-1');
const confirmPassword = document.getElementById('password-confirm');
const passwordError = document.getElementById('passwordError');

// event listeners 

form.addEventListener('submit', function (e) {
    if (passwordvalue!==confirmPassword.value) {
        e.preventDefault();
    }
}); 

function displayError(message) {
    passwordError.textContent = message;
};


confirmPassword.addEventListener('input', e => {
    if(password1.value!==confirmPassword.value) {
        passwordMismatch();
    } else {
        passwordMatch();
    }
});

function passwordMismatch() {
    password1.classList.add("error");
    confirmPassword.classList.add("error");
    passwordError.classList.add("error");
};

function passwordMatch() {
    password1.classList.remove("error");
    confirmPassword.classList.remove("error");
    passwordError.classList.remove("error");
};

function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailPattern.test(email);
};

email.addEventListener('input', function () {
    const emailValue = email.value;

    if (!isValidEmail(emailValue)) {
        // If the email is invalid, display an error message and add a red border
        emailError.textContent = 'Invalid email address';
        email.classList.add('error');
    } else {
        // If the email is valid, clear the error message and remove the red border
        emailError.textContent = '';
        email.classList.remove('error');
    }
});