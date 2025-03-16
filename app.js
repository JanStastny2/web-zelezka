const btNav = document.getElementById('bt-nav');


document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".bt-fotogalerie");

  buttons.forEach(button => {
      button.addEventListener("click", function () {
        console.log("dobry");
      });
  });
  
  
});



const handleResize = () => {
    const btNav = document.getElementById('bt-nav');
    const nav = document.getElementById('nav');

    if (window.innerWidth >= 768) {
        hideElement(btNav);
        showElement(nav);
    }else {
      showElement(btNav);
      hideElement(nav);
    }
};

function navMouseOver() {
    const item = document.getElementById('bt-nav');
    const closeIcon = document.getElementById('close-icon');
    const menuIcon = document.getElementById('menu-icon');
    item.style.backgroundColor = "#007ACC";
    closeIcon.style.backgroundColor = "#007ACC";
    menuIcon.style.backgroundColor = "#007ACC";
}

function navMouseLeave() {
    const item = document.getElementById('bt-nav');
    const closeIcon = document.getElementById('close-icon');
    const menuIcon = document.getElementById('menu-icon');   
    item.style.backgroundColor = "#202123";
    closeIcon.style.backgroundColor = "#202123";
    menuIcon.style.backgroundColor = "#202123";
}

function hideElement(element) {
  element.setAttribute('hidden', 'true');
  element.classList.add('hidden'); 
  return element;
}

function showElement(element) {
  element.removeAttribute('hidden');
  element.classList.remove('hidden');
  return element;
}

function navMouseClicked() {
    const item = document.getElementById('nav');
    const closeIcon = document.getElementById('close-icon');
    const menuIcon = document.getElementById('menu-icon');

    if (item.getAttribute('hidden') !== null) {
      showElement(item);
      hideElement(menuIcon);
      showElement(closeIcon);
    }
    else {
      hideElement(item); 
      hideElement(closeIcon);
      showElement(menuIcon);
    }
}

function zoomImage() {
  alert("ca");
    const img = document.getElementById('');
}

window.addEventListener('load',handleResize);
window.addEventListener('resize', handleResize);

btNav.addEventListener('mouseover', navMouseOver);
btNav.addEventListener('mouseleave', navMouseLeave);
btNav.addEventListener('click', navMouseClicked);
