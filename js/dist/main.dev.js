"use strict";

// Selectors
var header = document.querySelector('.header');
var hamburgerMenu = document.querySelector('.hamburger-menu');
window.addEventListener('scroll', function () {
  var windowPosition = window.scrollY > 500;
  header.classList.toggle('active', window.scrollY > 500);
});
hamburgerMenu.addEventListener('click', function () {
  header.classList.toggle('menu-open');
});