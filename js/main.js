'use strict';

const menuTitle = document.querySelector('.nav__menu--title');
const menuLinks = document.querySelector('.nav__AllLinks');

menuTitle.addEventListener('click', toggleMenu);

function toggleMenu() {
  menuLinks.classList.toggle('nav__AllLinks--hidden');
  menuLinks.classList.toggle('nav-shadow');

}
