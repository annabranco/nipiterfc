'use strict';

var menuTitle = document.querySelector('.nav__menu--title');
var menuButton = document.querySelector('.nav__menu-title-hamburguer');
var menuLinks = document.querySelector('.nav__AllLinks');

menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
  menuLinks.classList.toggle('nav__AllLinks--hidden');
  menuLinks.classList.toggle('nav-shadow');

}