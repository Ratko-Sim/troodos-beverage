const data = {
  english: {
    breakfastMenu: 'breakfast menu',
    menuBar: 'cafe-bar menu',
    menuRestaurant: 'restaurant menu',
    menuWine: 'wine menu',
    facebook: 'follow us on facebook',
    instagram: 'follow us on instagram',
    google: 'leave a review on google',
    tripadvisor: 'leave a review on tripadvisor',
  },
  greek: {
    breakfastMenu: 'ΜΕΝΟΥ ΠΡΟΓΕΥΜΑΤΟΣ',
    menuBar: 'ΜΕΝΟΥ ΚΑΦΕ-ΜΠΑΡ',
    menuRestaurant: 'μενου εστιατοριου',
    menuWine: 'ΜΕΝΟΥ ΚΡΑΣΙΩΝ',
    facebook: 'ακολουθηστε μας στο facebook',
    instagram: 'ακολουθηστε μας στο instagram',
    google: 'αφηστε μια κριτικη στο google',
    tripadvisor: 'αφηστε μια κριτικη στο tripadvisor',
  },
};

const langElement = document.getElementById('language-switch');

const langLink = document.querySelectorAll('.language-link');

const breakfastMenuElement = document.querySelector('.breakfastMenu');
const barMenuElement = document.querySelector('.menuBar');
const restaurantMenuElement = document.querySelector('.menuRestaurant');
const wineMenuElement = document.querySelector('.menuWine');
const facebookElement = document.querySelector('.facebook');
const instagramElement = document.querySelector('.instagram');
const googleElement = document.querySelector('.google');
const tripadvisorElement = document.querySelector('.tripadvisor');

langLink.forEach((el) => {
  el.addEventListener('click', () => {
    langElement.querySelector('.active').classList.remove('active');
    el.classList.add('active');
    const attr = el.getAttribute('language');
    breakfastMenuElement.textContent = data[attr].breakfastMenu;
    barMenuElement.textContent = data[attr].menuBar;
    restaurantMenuElement.textContent = data[attr].menuRestaurant;
    wineMenuElement.textContent = data[attr].menuWine;
    facebookElement.textContent = data[attr].facebook;
    instagramElement.textContent = data[attr].instagram;
    googleElement.textContent = data[attr].google;
    tripadvisorElement.textContent = data[attr].tripadvisor;
  });
});

function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

function toggleTheme() {
  if (localStorage.getItem('theme') === 'theme-light') {
    setTheme('theme-dark');
  } else {
    setTheme('theme-light');
  }
}

(function () {
  if (localStorage.getItem('theme') === 'theme-light') {
    setTheme('theme-light');
    document.getElementById('slider').checked = true;
  } else {
    setTheme('theme-dark');
    document.getElementById('slider').checked = false;
  }
})();
