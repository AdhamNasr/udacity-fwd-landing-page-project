// Global Variables

let sections = document.querySelectorAll('section');
let menuItems = document.getElementById('navbar-list');
const button = document.getElementById('scrollBtn');
const header = document.querySelector('.page-header');

//var top = window.scrollY;




// Helper Functions

window.onscroll = function () {
  scrollFunctionBtn();
  scrollFunctionSolid();
  //scrollFunctionNav();
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
  }

  /*
  section.forEach(section => {
    const li = document.createElement('li')
    li.setAttribute(id, section.dataset.nav)
    const anchor = document.createElement('a')
    
    anchor.addEventListener('click', (e) => {
      e.preventDefault()
      section.scrollIntoView({behavior: "smooth"})
    })
      li.appendChild(anchor)
      DocumentFragment.appendChild(li)
    }))
  })
*/  

/* Navbar solidify on scroll */

  function scrollFunctionSolid () {
    if (document.body.scrollTop >= 200) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  }


/* Section Active state */

function handelHighlighting() {
  for(let section of sections) {
    const sectionRect = section.getBoundingClientRect()
    if (sectionRect >= 0 && sectionRect <= 300 ) {
        section.classList.add('.active-class');
        //document.querySelector(`#${'data-nav'}`).classlist.add('active-menu-item')
    } else {
        section.classList.remove('.active-class');
        //document.querySelector(`#${'data-nav'}`).classlist.remove('active-menu-item')
    }
  }
}
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


function scrollFunctionBtn () {
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

const links = document.querySelectorAll('.page-header, ul, a, scrollBtn');

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;


scroll({
  top: offsetTop,
  behavior: "smooth"
});
}