document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('updateItemForm');
    const responseMessage = document.getElementById('responseMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const itemName = document.getElementById('itemName').value.trim();
        const itemQuantity = document.getElementById('itemQuantity').value.trim();
        const itemPrice = document.getElementById('itemPrice').value.trim();

        if (itemName && itemQuantity && itemPrice) {
            let items = JSON.parse(localStorage.getItem('items')) || [];
            let itemFound = false;

            for (let item of items) {
                if (item.name === itemName) {
                    item.quantity = itemQuantity;
                    item.price = itemPrice;
                    itemFound = true;
                    break;
                }
            }

            if (itemFound) {
                localStorage.setItem('items', JSON.stringify(items));
                responseMessage.textContent = 'Item updated successfully!';
                responseMessage.style.color = 'green';
            } else {
                responseMessage.textContent = 'Item not found.';
                responseMessage.style.color = 'red';
            }

            form.reset();
        } else {
            responseMessage.textContent = 'Please fill out all fields.';
            responseMessage.style.color = 'red';
        }

        setTimeout(function() {
            responseMessage.textContent = '';
        }, 3000); // Clear the message after 3 seconds
    });
});
