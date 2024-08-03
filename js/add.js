// add.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('addItemForm');
    const responseMessage = document.getElementById('responseMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const itemName = document.getElementById('itemName').value.trim();
        const itemQuantity = document.getElementById('itemQuantity').value.trim();
        const itemPrice = document.getElementById('itemPrice').value.trim();

        if (itemName && itemQuantity && itemPrice) {
            // Retrieve existing items from local storage
            let items = JSON.parse(localStorage.getItem('items')) || [];

            // Check if the item already exists
            const itemExists = items.some(item => item.name === itemName);

            if (itemExists) {
                responseMessage.textContent = 'Item already exists.';
                responseMessage.style.color = 'red';
            } else {
                // Add the new item to the existing items list
                items.push({ name: itemName, quantity: itemQuantity, price: itemPrice });
                localStorage.setItem('items', JSON.stringify(items));

                responseMessage.textContent = 'Item added successfully!';
                responseMessage.style.color = 'green';

                form.reset();
            }
        } else {
            responseMessage.textContent = 'Please fill out all fields.';
            responseMessage.style.color = 'red';
        }

        setTimeout(function() {
            responseMessage.textContent = '';
        }, 3000); // Clear the message after 3 seconds
    });
});
