document.addEventListener('DOMContentLoaded', () => {
    // Registration form elements
    const regEmail = document.getElementById('floatingInput');
    const regPassword = document.getElementById('floatingPassword');
    const regForm = document.getElementById('registerForm');

    // Login form elements
    const loginEmail = document.getElementById('floatingInput1');
    const loginPassword = document.getElementById('floatingPassword1');
    const loginForm = document.getElementById('loginForm');

    // function to display messages
    const showMessage = (input, message, isValid) => {
        let feedback = input.parentNode.querySelector('small'); // Finds the existing feedback message
        if (!feedback) {
            feedback = document.createElement('small');
            feedback.style.display = 'block';
            input.parentNode.appendChild(feedback);
        }
        // Updates feedback content and color
        feedback.style.color = isValid ? 'green' : 'red';
        feedback.textContent = message; 
    };

    // Validation rules
    const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
    const validatePassword = (password) => password.length >= 6;

    // focus event listeners
    for (const input of [regEmail, loginEmail]) {
        input.addEventListener('focus', () =>
            showMessage(input, 'Enter a valid email address', true)
        );
    }
    for (const input of [regPassword, loginPassword]) {
        input.addEventListener('focus', () =>
            showMessage(input, 'Password must be at least 6 characters long', true)
        );
    }

    // blur event listeners
    for (const input of [regEmail, loginEmail]) {
        input.addEventListener('blur', () => {
            if (!validateEmail(input.value)) {
                showMessage(input, 'Invalid email address', false);
            } else {
                showMessage(input, 'Valid email address', true);
            }
        });
    }

    for (const input of [regPassword, loginPassword]) {
        input.addEventListener('blur', () => {
            if (!validatePassword(input.value)) {
                showMessage(input, 'Password must be at least 6 characters long', false);
            } else {
                showMessage(input, 'Valid password', true);
            }
        });
    }

    // Add submit event listeners
    const handleSubmit = (event, formType) => {
        event.preventDefault();
        const form = formType === 'register' ? regForm : loginForm;
        const email = form.querySelector('input[type="email"]').value;
        const password = form.querySelector('input[type="password"]').value;

        if (validateEmail(email) && validatePassword(password)) {
            alert('User responses successfully recorded!');
        } else {
            alert('Please correct the errors before submitting.');
        }
    };

    regForm.addEventListener('submit', (event) => handleSubmit(event, 'register'));
    loginForm.addEventListener('submit', (event) => handleSubmit(event, 'login'));
});
