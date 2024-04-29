import { Viewer } from '@photo-sphere-viewer/core';

class Panorama {
  constructor() {
    this.container = document.querySelector('.panorama');
    this.viewer;
  }

  open(image) {
    this.close();
    this.viewer = new Viewer({
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
    if (this.viewer) {
      this.viewer.destroy();
    }
  }
}

export { Panorama };
