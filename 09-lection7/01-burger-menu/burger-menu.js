const menu = document.getElementById('burger-menu');
const menuClose = document.getElementById('burger-menu-close');
const menuOpen = document.getElementById('burger-menu-open');
const menuIcon = document.getElementById('burger-menu-open-icon');

if (menuOpen) {
  menuOpen.addEventListener('click', function() {
      if (menuOpen) {
        menuIcon.classList.add('burger__active');
      }
  });
}

if (menuOpen) {
  menuOpen.addEventListener('click', function() {
      if (menu) {
          menu.setAttribute('data-open', '');
      }
  });
}

if (menuClose) {
  menuClose.addEventListener('click', function() {
      if (menuOpen) {
        menuIcon.classList.remove('burger__active');
      }
  });
}

if (menuClose) {
    menuClose.addEventListener('click', function() {
        if (menu) {
            menu.removeAttribute('data-open');
        }
    });
}


