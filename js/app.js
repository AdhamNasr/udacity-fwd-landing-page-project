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

function dimFunction() {
  for (let section of sections) {
    const sectionDim = section.getBoundingClientRect();
    //const sectionTitle = section.getAttribute("data-nav");
  

    let links = document.querySelectorAll("li");
    if (sectionDim.top >= 0 && sectionDim.top < 300) {
      console.log(1);

      for (let link of links) {
        
        if (link.innerText === section.getAttribute("data-nav")) {
          link.classList.remove("active-class");
          console.log(link.innerText, section.getAttribute("data-nav"));
          //console.log(2);
        } else {
          link.classList.add("active-class");
          console.log(3);
        }
      }
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