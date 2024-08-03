document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('searchBox');
    const itemsTableBody = document.querySelector('#itemsTable tbody');
    const responseMessage = document.getElementById('responseMessage'); // Message element

    // Function to display items in the table
    function displayItems(items) {
        itemsTableBody.innerHTML = '';
        items.forEach((item) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>${item.price}</td>
                <td><button onclick="removeItem(this)">Remove</button></td>
            `;
            itemsTableBody.appendChild(row);
        });
    }

    // Function to filter items based on the search box input
    function filterItems() {
        const query = searchBox.value.toLowerCase();
        let items = JSON.parse(localStorage.getItem('items')) || [];
        if (query) {
            items = items.filter(item => item.name.toLowerCase().includes(query));
        }
        displayItems(items);
    }

    // Function to remove an item
    window.removeItem = function(button) {
        const row = button.parentElement.parentElement;
        const itemName = row.children[0].textContent.trim();
        row.remove();

        // Remove from local storage
        removeFromLocalStorage(itemName);

        // Show message
        responseMessage.textContent = `Item "${itemName}" removed successfully!`;
        responseMessage.style.color = 'green'; // Success color

        // Clear the message after 3 seconds
        setTimeout(function() {
            responseMessage.textContent = '';
        }, 3000);
    };

    // Function to remove an item from local storage
    function removeFromLocalStorage(name) {
        let items = JSON.parse(localStorage.getItem('items')) || [];
        items = items.filter(item => item.name !== name);
        localStorage.setItem('items', JSON.stringify(items));
    }

    // Load and display items when the page is loaded
    filterItems();

    // Add event listener to the search box
    searchBox.addEventListener('input', filterItems);
});
