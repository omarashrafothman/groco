var searchForm = document.querySelector('.search-form');
var shoppingForm = document.querySelector('.shopping-cart');
var loginForm = document.querySelector('.login-form');
var navbar = document.querySelector('.navbar')

document.querySelector('#search-btn').onclick = function() {
    searchForm.classList.toggle('active');
    shoppingForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector('#shopping-btn').onclick = function() {
    shoppingForm.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector('#login-btn').onclick = function() {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingForm.classList.remove('active');
    navbar.classList.remove('active');
}

document.querySelector('#menu-btn').onclick = function() {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingForm.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = function() {
    searchForm.classList.remove('active');
    shoppingForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    ResizeObserver: true,
    autoplay: {
        delay: 5000,
        disableOnEnterAction: false,
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

var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    ResizeObserver: true,
    autoplay: {
        delay: 5000,
        disableOnEnterAction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 4,
        },
    },
});