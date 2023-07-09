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
/*js from script.js since the imported source is not rendering in our webpage so its copied over here */
function displaySearchBar() {
    var x = document.getElementById('searchformbar');
    if (x.style.display == "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}



function shoppingCartCaller() {
    var cartStatus = document.getElementById("shoppingcart");

    if (cartStatus.style.display == 'none') {
        cartStatus.style.display = 'block';
    }
    else {
        cartStatus.style.display = 'none';
    }
}



function signinMethod() {
    var signinStatus = document.getElementById("signinform");
    if (signinStatus.style.display == 'none') {
        signinStatus.style.display = 'block';
    }
    else {
        signinStatus.style.display = 'none';
    }
}


// for the onclick effect of the menubar 
function navbarFunction() {
    let navbar = document.querySelector('.navbar');
    if (navbar.style.display == 'none') {
        navbar.style.display = 'block';
    }
    else {
        navbar.style.display = 'none';
    }
}

/*for the nav bar section implementation of th function for the theme changer icon */
function themeSwitcher() {
    var bodyTheme = document.body;
    document.getElementById("theme").src = toggleImg();

    if (bodyTheme.style.backgroundColor == "rgb(228, 228, 220)") {
        document.body.style.backgroundColor = "grey";
        document.getElementById("headerbar").style.backgroundColor = "#114e5c";
        document.getElementsById("foot").style.backgroundColor = "#402c2c";
    }

    else {
        document.body.style.backgroundColor = "rgb(228, 228, 220)";

        document.getElementById("headerbar").style.backgroundColor = "#fff";
        document.getElementsById("foot").style.backgroundColor = "#fff";

    }
}

function toggleImg() {
    let initialImg = document.getElementById("theme").src;
    let srcTest = initialImg.includes('Icons/sun.png');
    let newImg = {
        'true': 'Icons/moon.png',
        'false': 'Icons/sun.png'
    }[srcTest];

    return newImg;
}

