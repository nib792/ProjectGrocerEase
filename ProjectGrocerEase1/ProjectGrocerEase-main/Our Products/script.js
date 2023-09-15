// Add your JavaScript logic here

const products = document.querySelectorAll('.product');
const shoppingList = document.getElementById('list');

products.forEach(product => {
    const addButton = product.querySelector('.add-btn');
    const reduceButton = product.querySelector('.reduce-btn');
    const quantityInput = product.querySelector('input');
    const addToListButton = product.querySelector('.add-to-list-btn');

    addButton.addEventListener('click', () => {
        let quantity = parseInt(quantityInput.value);
        quantity += 1;
        quantityInput.value = quantity;
    });

    reduceButton.addEventListener('click', () => {
        let quantity = parseInt(quantityInput.value);
        if (quantity > 0) {
            quantity -= 1;
            quantityInput.value = quantity;
        }
    });

    addToListButton.addEventListener('click', () => {
        const name = product.querySelector('h2').textContent;
        const quantity = parseInt(quantityInput.value);

        if (quantity > 0) {
            const listItem = document.createElement('li');
            listItem.textContent = `${quantity} x ${name}`;
            shoppingList.appendChild(listItem);

            // Reset the quantity input
            quantityInput.value = '0';
        }
    });
});
