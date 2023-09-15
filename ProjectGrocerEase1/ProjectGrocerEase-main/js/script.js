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



/*our products section carousel effects slider using cdn slider type responsive breakpoints done for the section of our products*/
var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2,

        },
        1020: {
            slidesPerView: 3,

        },
    },
});

