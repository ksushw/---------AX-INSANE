import { Popup } from './assets/components/Popup';
import { Panorama } from './assets/components/Panorama';
import park from './assets/images/3D-park.png';
import mansions from './assets/images/3D-mansions.png';
import road from './assets/images/3D-road.png';
import apartments from './assets/images/3D-apartments.png';

const images = {
  park: park,
  road: road,
  mansions: mansions,
  apartments: apartments,
};

const buttonInfoPopup = document.querySelector('.main-page__button');
const panoramaButtons = document.querySelectorAll('.projects__link');

const infoPopup = document.querySelector('.popup_info');
const panoramaPopup = document.querySelector('.popup_panorama');
console.log(infoPopup);

const modalInfoPopup = new Popup(infoPopup);
const modalPanoramaPopup = new Popup(panoramaPopup);

const panorama = new Panorama();

buttonInfoPopup.addEventListener('click', () => {
  modalInfoPopup.open();
});

panoramaButtons.forEach((panoramaButton) => {
  panoramaButton.addEventListener('click', (e) => {
    e.preventDefault();
    const linkId = e.target.closest('.projects__link').id;
    panorama.open(images[linkId]);
    modalPanoramaPopup.open();
  });
});
