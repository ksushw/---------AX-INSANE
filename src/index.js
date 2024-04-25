import '../src/assets/scss/pages/index.scss';

import { Popup } from './assets/components/Popup';

// Popus open/close logic
const sliderButtons = document.querySelectorAll('.slider__button');
const detailsPopup = document.querySelector('.popup__details');

const aboutButton = document.querySelector('.about__button');
const brochurePopup = document.querySelector('.popup__brouchure');

const popupUniqueOffer = document.querySelector('.popup__unique-offer');

const uniqueOffer = new Popup(popupUniqueOffer);
const brochure = new Popup(brochurePopup);
const details = new Popup(detailsPopup);

console.log(sliderButtons);
// setTimeout(() => uniqueOffer.open(), 30000);
// aboutButton.addEventListener('click', () => {
//   brochure.open();
// });

// sliderButtons.forEach((sliderButton) => {
//   sliderButton.addEventListener('click', () => {
//     console.log(12);
//     details.open();
//   });
// });
