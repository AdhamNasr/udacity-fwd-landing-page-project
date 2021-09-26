// Global Variables

const sections = document.querySelectorAll("section");
const menuItems = document.getElementById("navbar-list");
const button = document.getElementById("scrollBtn");
const header = document.querySelector(".page-header");


// Helper Functions

window.onscroll = function () {
  scrollFunctionBtn();
  scrollFunctionSolid();
  dimFunction();
};

// Main Functions

/* Navbar */

for (const section of sections) {
  const li = document.createElement("li");
  let ml = document.createElement("a");
  menuItems.appendChild(li);
  li.appendChild(ml);
  ml.innerHTML = section.getAttribute("data-nav");
  location.hash = section.id;
  ml.href = location.hash;
}

/* Navbar solidify on scroll */

function scrollFunctionSolid() {
  if (document.body.scrollTop >= 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

/* Active class Function & Navbar highlight active*/

function dimFunction() {
  for (let section of sections) {
    const sectionDim = section.getBoundingClientRect();
    const sectionTitle = section.getAttribute("data-nav");
    let nLinks = document.querySelectorAll("li");
    if (sectionDim.bottom >= 450 & sectionDim.top <= 450) {
      section.classList.add("active-class");
      for (let link of links) {
        if (link.innerText !== section.getAttribute("data-nav")) {
          link.classList.remove("active");
        } else {
          link.classList.add("active");
        }
      }
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

const links = document.querySelectorAll("ul li a"); // this breaks everything when moved to the global var section.

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