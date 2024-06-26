document.addEventListener('DOMContentLoaded', function() {
  // open
  const burger = document.querySelectorAll('.navbar-burger');
  const menu = document.querySelectorAll('.navbar-menu');

  if (burger.length && menu.length) {
      for (var i = 0; i < burger.length; i++) {
          burger[i].addEventListener('click', function() {
              for (var j = 0; j < menu.length; j++) {
                  menu[j].classList.toggle('hidden');
              }
          });
      }
  }

  // close
  const close = document.querySelectorAll('.navbar-close');
  const backdrop = document.querySelectorAll('.navbar-backdrop');

  if (close.length) {
      for (var i = 0; i < close.length; i++) {
          close[i].addEventListener('click', function() {
              for (var j = 0; j < menu.length; j++) {
                  menu[j].classList.toggle('hidden');
              }
          });
      }
  }

  if (backdrop.length) {
      for (var i = 0; i < backdrop.length; i++) {
          backdrop[i].addEventListener('click', function() {
              for (var j = 0; j < menu.length; j++) {
                  menu[j].classList.toggle('hidden');
              }
          });
      }
  }

  const menuLinks = document.querySelectorAll('.navbar-menu a');

  if (menuLinks.length) {
      for (var i = 0; i < menuLinks.length; i++) {
          menuLinks[i].addEventListener('click', function() {
              for (var j = 0; j < menu.length; j++) {
                  menu[j].classList.add('hidden');
              }
          });
      }
  }
});


// Competences
$(function () {
  const progressBar = $("#bar1");
  progressBar.css("width", "95%");
});
$(function () {
  const progressBar = $("#bar2");
  progressBar.css("width", "90%");
});
$(function () {
  const progressBar = $("#bar3");
  progressBar.css("width", "90%");
});
$(function () {
  const progressBar = $("#bar4");
  progressBar.css("width", "85%");
});
$(function () {
  const progressBar = $("#bar5");
  progressBar.css("width", "95%");
});
$(function () {
  const progressBar = $("#bar6");
  progressBar.css("width", "90%");
});
$(function () {
  const progressBar = $("#bar7");
  progressBar.css("width", "75%");
});

