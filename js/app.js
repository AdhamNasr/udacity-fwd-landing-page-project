// Global Variables

const sections = document.querySelectorAll("section");
const menuItems = document.getElementById("navbar-list");
const button = document.getElementById("scrollBtn");
const header = document.querySelector(".page-header");
//const nlinks = document.querySelectorAll(".navbar-menu ul li a");


// Helper Functions

window.onscroll = function () {
  scrollFunctionBtn();
  scrollFunctionSolid();
  dimFunction();
  //navHighlight();
};


// Main Functions

/* Navbar */

for (const section of sections) {
  const items = document.createElement("li");
  const ml = document.createElement("a");
  menuItems.appendChild(items);
  items.appendChild(ml);
  ml.innerHTML = section.getAttribute("data-nav");
  location.hash = section.id;
  ml.href = location.hash;
}

/* Navbar solidify on scroll */

function scrollFunctionSolid() {
  if (document.body.scrollTop >= 300) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}


/* Navbar highlight active */

/* Active class Function */

function dimFunction() {
  for (const section of sections) {
    const sectionDim = section.getBoundingClientRect();
    if (sectionDim.bottom >= 300 & sectionDim.top <= 300) {
      section.classList.add("active-class");
    } else {
      section.classList.remove("active-class");
    }
  }
}


/* scroll button */

function scrollFunctionBtn() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.documentElement.scrollTop = 0;
}

/* Smooth Scrolling */

const links = document.querySelectorAll("ul a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}


function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}
