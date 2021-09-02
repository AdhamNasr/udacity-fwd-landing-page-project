// Global Variables

let sections = document.querySelectorAll('section');
let menuItems = document.getElementById('navbar-list');
let button = document.getElementById('scrollBtn');
let header = document.querySelector('.page-header');
var top = window.scrollY;




// Helper Functions

window.onscroll = function () {
  scrollFunction()
};
/*
window.scrollY = function () {
  topFunction()
};
*/
// Main Functions

/* Navbar */

for (let section of sections) {
    const items = document.createElement('li');
    const ml = document.createElement('a');
    menuItems.appendChild(items);
    items.appendChild(ml);
    ml.innerHTML = section.getAttribute('data-nav');
    location.hash = section.id;
    ml.href = location.hash;
  };


/* Navbar solidify on scroll */

  function scrollFunction () {
    if (document.body.scrollTop >= 200) {
      header.classList.add('active')
    } else {
      header.classList.remove('active');
    };
  };


/* Section Active state */

/*
for (let section of sections) {
  const sectionDim = section.getBoundingClientRect();
  let sectionTitle = section.getAttribute('data-nav');

  const links = document.querySelector('li');
    if (sectionDim.top >= 0 && sectionDim.top < 300) {
      console.log(99);
      for (let link of links) {
        link.classList.remove('active-class');
        if (link.textContent === section.getAttribute('data-nav')) {
          console.log(link.innerText, section.getAttribute('data-nav'));
          link.classList.add('active-class');
        }
      }
    }
  };

*/

/* scroll button */

/*
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

*/