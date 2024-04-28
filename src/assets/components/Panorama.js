import { Viewer } from '@photo-sphere-viewer/core';
import image from '../images/3D-park.png';

class Panorama {
  constructor() {
    this.image = image;
  }

  open() {
    const viewer = new Viewer({
      container: document.querySelector('.panorama'),
      panorama: image,
      navbar: [
        'zoom',
        {
          id: 'my-button',
          content: '<svg...>',
          title: 'Hello world',
          className: 'custom-button',
          onClick: (viewer) => {
            alert('Hello from custom button');
          },
        },
        'caption',
        'fullscreen',
      ],
    });
  }

  close() {
    document.removeEventListener('keyup', this._handleEscClose);
    this.popup.classList.remove('popup_opened');
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this.closeIcon.addEventListener('click', () => this.close());
    // this.overlay.addEventListener("click", () => this.close());
  }
}

export { Panorama };
