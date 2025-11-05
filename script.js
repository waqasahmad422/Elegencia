let navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {
    if (window.scrollY > 15) {
        navbar.classList.add("isScrolled");

    } else {
        navbar.classList.remove("isScrolled");
    }
});