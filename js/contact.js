document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const responseMessage = document.getElementById('responseMessage');

        if (name && email && message) {
            responseMessage.textContent = 'Thank you for your message! We will get back to you soon.';
            responseMessage.style.color = 'green';
            // Reset form fields
            document.getElementById('contactForm').reset();

            // Hide the message after 3 seconds
            setTimeout(function() {
                responseMessage.textContent = '';
            }, 3000); // 3000 milliseconds = 3 seconds
        } else {
            responseMessage.textContent = 'Please fill out all fields.';
            responseMessage.style.color = 'red';
        }
    });
});
