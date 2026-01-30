let hamburger =

document.querySelector('.hamburger');

let navLinks =

document.querySelector(".nav-links");



hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});



document.addEventListener("click", (e) => {

    const isClickInside =

    navLinks.contains(e.target) ||

    hamburger.contains(e.target);

    if (isClickInside) {

        return;

    } else {

        navLinks.classList.remove("active");

    }

});