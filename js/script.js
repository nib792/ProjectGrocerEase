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
<<<<<<< HEAD
    var bodyTheme = document.body; 
    document.getElementById("theme").src = toggleImg();
=======
    var bodyTheme = document.body;
>>>>>>> 8bed410e006c8c5c242f8bb9ed54bd2f641e9255

    if (bodyTheme.style.backgroundColor == "rgb(228, 228, 220)") {
        document.body.style.backgroundColor = "grey";
        document.getElementById("headerbar").style.backgroundColor = "#114e5c";
        document.getElementsById("foot").style.backgroundColor = "#402c2c";
<<<<<<< HEAD
    
    
    }

    else {
        document.body.style.backgroundColor = "rgb(228, 228, 220)"; 
=======
        document.getElementsById("theme").src = "./Icons/sun.png";

    }

    else {
        document.body.style.backgroundColor = "rgb(228, 228, 220)";
>>>>>>> 8bed410e006c8c5c242f8bb9ed54bd2f641e9255


        document.getElementById("headerbar").style.backgroundColor = "#fff";
        document.getElementsById("foot").style.backgroundColor = "#fff";
<<<<<<< HEAD
        
    
=======
        document.getElementsById("theme").src = "./Icons/moon.png";

>>>>>>> 8bed410e006c8c5c242f8bb9ed54bd2f641e9255
    }
}

function toggleImg() {
    let initialImg = document.getElementById("theme").src;
    let srcTest = initialImg.includes('Icons/sun.png');
    let newImg = {
      'true':'Icons/moon.png', 
      'false':'Icons/sun.png'}[srcTest];
  
    return newImg;
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

