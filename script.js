'use strict'


/**
 * add event on multiple elements
 */

const addEventOnElement = function (elements, evetType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(evetType, callback);
    }
}


/**
 * Navbar Toggle For Mobile
 */

const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    navToggleBtn.classList.toggle("active"); 
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElement([navToggleBtn, overlay], "click", toggleNavbar);


/**
 * Parallax effect
 */

const parallaxElements = document.querySelectorAll("[data-parallax]");

window.addEventListener("mousemove", event => {
    for(let i = 0, len = parallaxElements.length; i < len; i++)  {

        const movementX = (event.clientX / window.innerWidth) * Number (parallaxElements[i].dataset.parallaxSpeed);
        const movementY = (event.clientY / window.innerHeight) * Number (parallaxElements[i].dataset.parallaxSpeed);

        // Construct the transform string correctly
        const transformValue = `translate(${movementX}px, ${movementY}px)`; 

        parallaxElements[i].animate({
            transform: transformValue // Use the constructed string
        }, { duration: 500, fill: "forwards" });

    }
});