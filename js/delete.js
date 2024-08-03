// delete.js

document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('searchBox');
    const itemList = document.getElementById('itemList');

    function loadItems() {
        let items = JSON.parse(localStorage.getItem('items')) || [];
        itemList.innerHTML = '';

        items.forEach((item, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${item.name} - Quantity: ${item.quantity}, Price: ${item.price}
                <button onclick="deleteItem(${index})">Delete</button>
            `;
            itemList.appendChild(li);
        });
    }

    function deleteItem(index) {
        let items = JSON.parse(localStorage.getItem('items')) || [];
        items.splice(index, 1);
        localStorage.setItem('items', JSON.stringify(items));
        loadItems();
    }

    searchBox.addEventListener('input', function() {
        const filter = searchBox.value.toLowerCase();
        const items = itemList.getElementsByTagName('li');

        Array.from(items).forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(filter)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });

    loadItems();
});
