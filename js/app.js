// Global Variables

const sections = document.querySelectorAll("section");
const menuItems = document.getElementById("navbar-list");
const button = document.getElementById("scrollBtn");
const header = document.querySelector(".page-header");

// Helper Functions

window.onscroll = function () {
  scrollFunctionBtn();
  scrollFunctionSolid();
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

  function scrollFunctionSolid () {
    if (document.body.scrollTop >= 200) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  }


/* Section Active state */


/* scroll button */


function scrollFunctionBtn() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* Smooth Scrolling */

const links = document.querySelectorAll(".page-header ul a");

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