import '../src/assets/scss/pages/index.scss';
import { Viewer } from '@photo-sphere-viewer/core';
import image from '../src/assets/images/3D-park.png';
// import '@photo-sphere-viewer/core/index.css';
import { Popup } from './assets/components/Popup';
import { Panorama } from './assets/components/Panorama';

// Popus open/close logic
const sliderButtons = document.querySelectorAll('.slider__button');
const detailsPopup = document.querySelector('.popup__details');

const aboutButton = document.querySelector('.about__button');
const brochurePopup = document.querySelector('.popup__brouchure');

const popupUniqueOffer = document.querySelector('.popup__unique-offer');

// const uniqueOffer = new Popup(popupUniqueOffer);
// const brochure = new Popup(brochurePopup);
// const details = new Popup(detailsPopup);
const panorama = new Panorama();

// console.log(sliderButtons);
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
// const viewer = new Viewer({
//   container: document.querySelector('.panorama'),
//   panorama: image,
//   navbar: [
//     'zoom',
//     {
//       id: 'my-button',
//       content: '<svg...>',
//       title: 'Hello world',
//       className: 'custom-button',
//       onClick: (viewer) => {
//         alert('Hello from custom button');
//       },
//     },
//     'caption',
//     'fullscreen',
//   ],
// });

panorama.open();
