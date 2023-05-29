function displaySearchBar() {
    var x = document.getElementById('searchformbar');
    if (x.style.display == "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}


function themeSwitcher() {
    var bodyTheme = document.body;
    if (bodyTheme.style.backgroundColor == "rgb(228, 228, 220)") {
        document.body.style.backgroundColor = "grey";
        document.getElementById("headerbar").style.backgroundColor = "#154c79";
    }

    else {
        document.body.style.backgroundColor = "rgb(228, 228, 220)";
        document.getElementById("headerbar").style.backgroundColor = "#fff";
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

