
const btNav = document.getElementById('bt-nav');
const formPrihlaska = document.getElementById('form-prihlaska');

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


document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.img-fotogalerie');
    const modal = document.getElementById('modal');
    const closeModalSpan = document.getElementById('close-modal');
    const modalImg = document.getElementById('modal-image');
    let modalBackground;
    if (document.querySelector('#body-fotogalerie')) {
       modalBackground = document.querySelector('#body-fotogalerie');
    } modalBackground = document.querySelector('body');
    
    images.forEach(image => { image.addEventListener('click',function (){
        modal.style.display = "flex";
        modal.className = "";
        modalImg.src = this.src;
        showElement(modalImg);
        modalBackground.classList.add('modal-background');
        showElement(modalBackground);
      });
   });

  if (modal) {
    closeModalSpan.addEventListener('click', closeModal);
    modal.addEventListener('click', function(event) {
      if (event.target === modal) {
        closeModal();
        modalBackground.classList.remove('modal-background');
      }
    });
  }

  function closeModal() {
    modal.style.display = "none";
    modalBackground.classList.remove('modal-background');
  }
});


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

function submitApplication() {

  const jmeno = document.getElementById('jmeno');
  const rocnik =  document.getElementById('rocnik-narozeni');
  const email =  document.getElementById('email');
  alert(jmeno.value + " je úspešně přihlášený, těšíme se na Vás!" )

  jmeno.value = "";
  rocnik.value = 2020;
  email.value = "";
}

if (formPrihlaska) {
  formPrihlaska.addEventListener('submit', (e) =>{
    e.preventDefault();
    submitApplication();
  }); 
}

window.addEventListener('load',handleResize);
window.addEventListener('resize', handleResize);

btNav.addEventListener('mouseover', navMouseOver);
btNav.addEventListener('mouseleave', navMouseLeave);
btNav.addEventListener('click', navMouseClicked);
