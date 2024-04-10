const showNavButton = document.getElementById('showNavButton');
const hideNavButton = document.getElementById('hideNavButton');
const mobileNav = document.getElementById('mobileNav');

showNavButton.addEventListener('click', () => {
  mobileNav.style.display = 'block';
});

hideNavButton.addEventListener('click', () => {
  mobileNav.style.display = 'none';
});
