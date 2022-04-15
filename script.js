"use strict"

let slider = document.getElementById("slider");
let line1 = document.getElementById("line1_id");
let line2 = document.getElementById("line2_id");
let line3 = document.getElementById("line3_id");
let line4 = document.getElementById("line4_id");
let active = document.getElementById("active_id");

line1.onclick = function() {
    slider.style.transform = 'translateX(0)';
    active.style.top = "0px"
};

line2.onclick = function() {
    slider.style.transform = 'translateX(-25%)';
    active.style.top = "80px"
};


line3.onclick = function() {
    slider.style.transform = "translateX(-50%)";
    active.style.top = "160px"
}

line4.onclick = function() {
    slider.style.transform = 'translateX(-75%)';
    active.style.top = "240px"
};



$(document).ready(function() {
    $('.slider').slick({
        arrows: true,
        variableWidth: true,
        infinity: true,
        touchThreshould: 10,
        slidesToScroll: 2,
    })
})


AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 200, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

}); 


let scrollToThis = document.getElementById("main_first_button_href");
scrollToThis.onclick = function () {
    window.scrollTo(0, 1750)
}




