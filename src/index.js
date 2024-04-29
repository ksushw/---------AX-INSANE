import '../src/assets/scss/index.scss';
import { Popup } from './assets/components/Popup';
import { Panorama } from './assets/components/Panorama';
import { images } from './assets/constants/panorama-images';
import {
  infoPopup,
  panoramaPopup,
  buttonInfoPopup,
  panoramaButtons,
  panoramaContainer,
} from './assets/constants/selectors.js';

const modalInfoPopup = new Popup(infoPopup);
const modalPanoramaPopup = new Popup(panoramaPopup);

const panorama = new Panorama(panoramaContainer);

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
