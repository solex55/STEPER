const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

const navLink = document.querySelector(".nav-link");

navLink.forEach( e => e.addEventListener("click", () =>  {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
);