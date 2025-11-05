let navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {
    if (window.scrollY > 15) {
        navbar.classList.add("isScrolled");

    } else {
        navbar.classList.remove("isScrolled");
    }
});


// Mobile menu functionality
const menuToggle = document.querySelector('.menu-toggle');
const navbarContainer = document.querySelector('.navbar-container');
const navItems = document.querySelectorAll('.nav-item-link');

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
  navbarContainer.classList.toggle('active');
});

// Close mobile menu when clicking on a nav item
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navbarContainer.classList.remove('active');
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navbarContainer.contains(e.target) && !menuToggle.contains(e.target)) {
    navbarContainer.classList.remove('active');
  }
});

// Handle scroll behavior for header
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.classList.add('isScrolled');
  } else {
    header.classList.remove('isScrolled');
  }
});