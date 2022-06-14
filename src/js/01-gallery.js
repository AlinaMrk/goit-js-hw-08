
/*import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
console.log(galleryItems);
const galleryList = document.querySelector('.gallery')

    const addGallery = (imgArray) => {
    return imgArray.map(({ preview, description, original }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href=${original}>
                <img src=${preview} title=${description}  alt=${description}  data-source=${original} class="gallery__image">
            </a>
        </div>`;
    }).join('')
    }

    let cardSet = addGallery(galleryItems)
    galleryList.insertAdjacentHTML('afterbegin',cardSet )
    
    let lightbox = new SimpleLightbox('.gallery a', {
    
    overlay: true,
    captionDelay: '250ms'
});
*/
import { galleryItems } from './gallery-items.js';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery');

function createGallery(items) {
  items.map(item => {
    const markup = `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
  </a>`;

    galleryRef.insertAdjacentHTML('beforeend', markup);
  });
}

createGallery(galleryItems);

const lightbox = new SimpleLightbox('.gallery__item', {
  captionDelay: 250,
  captionsData: 'alt',
});
