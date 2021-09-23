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
  navHighlight();
};


// Main Functions

/* Navbar */

for (const section of sections) {
  const items = document.createElement("li");
  let ml = document.createElement("a");
  menuItems.appendChild(items);
  items.appendChild(ml);
  ml.innerHTML = section.getAttribute("data-nav");
  location.hash = section.id;
  ml.href = location.hash;
}


/* Navbar solidify on scroll */


function scrollFunctionSolid() {
  if (document.body.scrollTop >= 100) {
    header.classList.add("activeh");
  } else {
    header.classList.remove("activeh");
  }
}


/* Navbar highlight active */


function navHighlight() {
  const nLinks = document.querySelectorAll("li");
  
  let current = "";
  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight) {
      current = section.getAttribute("data-nav");
    }
  nLinks.innerText = section.getAttribute("a");
  };
  console.log(current)
  console.log(nLinks)
  nLinks.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
    
  });
}

/* Active class Function */

function dimFunction() {
  for (const section of sections) {
    const sectionDim = section.getBoundingClientRect();
    if (sectionDim.bottom >= 350 & sectionDim.top <= 350) {
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

