
/*import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

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
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryRef = document.querySelector('.gallery');

const createGallaryItem=({preview,original,description})=>{
    const wrapper = document.createElement('div');
    wrapper.innerHTML=`
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`
    return wrapper.firstElementChild;

}
const clearGallary = (ref) => {
ref.innerHTML = '';
};
const renderGallaryItems=(items, ref)=>{
clearGallary(ref);
const gallaryCard = items.map((item) => createGallaryItem(item));
ref.append(...gallaryCard);
}


renderGallaryItems(galleryItems, galleryRef);
const lightbox =  new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, captionPosition: 'bottom'});