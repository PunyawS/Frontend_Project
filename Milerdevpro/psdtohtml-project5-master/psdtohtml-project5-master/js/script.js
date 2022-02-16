$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        margin: 150,
        items: 5,
        responsive: {
            1000: {
                items: 5
            },
            768: {
                items: 3
            },
            480: {
                items: 1
            }
        }

    });
});

// Toggle Menu Bar

const toggleMenu = document.querySelector("#toggle");
const menuBar = document.querySelector("ul.menu");

toggleMenu.addEventListener("click", function () {
    menuBar.classList.toggle("showmenu");
});

// Toggle Search Box

const searchBtn = document.querySelector('#searchBtn');
const searchBox = document.querySelector('#searchBox');

searchBtn.addEventListener('click', function() {
    searchBox.classList.toggle("show")
});

// Animated Hamburger Menu

function myFunction(hamburger) {
    hamburger.classList.toggle("change");
}

