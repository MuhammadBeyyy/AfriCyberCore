document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu');
    const navList = document.querySelector('nav ul');
  
    menuButton.addEventListener('click', function () {
      navList.classList.toggle('show');
    });
  });
  