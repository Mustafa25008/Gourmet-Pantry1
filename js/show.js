// show.js

document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('searchBox');
    const itemsTableBody = document.querySelector('#itemsTable tbody');

    // Function to display items in the table
    function displayItems(items) {
        itemsTableBody.innerHTML = '';
        items.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>${item.price}</td>
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

    // Load and display items when the page is loaded
    filterItems();

    // Add event listener to the search box
    searchBox.addEventListener('input', filterItems);
});
