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
  for (const section of sections) {
    const sectionDim = section.getBoundingClientRect();
    if (sectionDim.bottom >= 450 & sectionDim.top <= 450) {
      section.classList.add("active-class");
    } else {
      section.classList.remove("active-class");
    }
  }
  let current = "";
  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight) {
      current = section.getAttribute("data-nav");
    }
  };
  const nLinks = document.querySelectorAll("a");
  nLinks.forEach((li) => {
    console.log(li)
    if (li.classList.contains(current)) {
      li.classList.add("active");
    } else {
      li.classList.remove("active");
    }
    console.log(current)
    console.log(nLinks)
  });
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


const links = document.querySelectorAll("ul li a");

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