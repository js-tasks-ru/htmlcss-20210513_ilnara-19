const menu = document.getElementById('burger-menu');
const menuClose = document.getElementById('burger-menu-close');
const menuOpen = document.getElementById('burger-menu-open');
const menuIcon = document.getElementById('burger-menu-open-icon');

if (menuOpen) {
  menuOpen.addEventListener('click', function() {
      if (menu) {
          menu.setAttribute('data-open', '');
      }
  });
}

if (menuOpen) {
  menuOpen.addEventListener('click', function() {
      if (menuOpen) {
          menuOpen.classList.add('burger__no-active');
      }
  });
}

if (menuOpen) {
  menuOpen.addEventListener('click', function() {
      if (menuClose) {
          menuClose.classList.add('burger__active');
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

if (menuClose) {
  menuClose.addEventListener('click', function() {
      if (menuOpen) {
          menuOpen.classList.remove('burger__no-active');
      }
  });
}

if (menuClose) {
  menuClose.addEventListener('click', function() {
      if (menuClose){
          menuClose.classList.remove('burger__active');
      }
  });
}


