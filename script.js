const BURGER = document.querySelector('.burger-menu');
const MENU = document.querySelector('.header-nav');

BURGER.addEventListener('click', function() {
  BURGER.classList.toggle('active');
  MENU.classList.toggle('open');
});

const LINKS = document.querySelectorAll('.nav-links');

/* function closeMenu(event) {
    if (event.target.classList.contains('nav-links')) {
        MENU.classList.remove('open');
        BURGER.classList.remove('active');
    }
  }   */  

  MENU.addEventListener('click', function() {
    if (BURGER.classList.contains('active') && MENU.classList.contains('open')) {
      BURGER.classList.remove('active');
    MENU.classList.remove('open');
    }
    
}); 