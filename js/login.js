document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('showPassword').addEventListener('change', function() {
        const passwordField = document.getElementById('password');
        if (this.checked) {
            passwordField.type = 'text';
        } else {
            passwordField.type = 'password';
        }
    });

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const messageElement = document.getElementById('responseMessage');

        if (username === 'Mustafa' && password === '12345678') {
            messageElement.textContent = 'Login successful!';
            messageElement.style.color = 'green';
            // Redirect to dashboard page
            setTimeout(function() {
                window.location.href = 'dashboard.html';
            }, 1000); // Redirect after 1 second to allow user to see the message
        } else {
            messageElement.textContent = 'Invalid username or password.';
            messageElement.style.color = 'red';
        }
    });
});
