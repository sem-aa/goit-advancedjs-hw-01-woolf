import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
import { galleryItems } from './gallery-items';

const galleryList = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    image =>
      `<li class="gallery__item"> 
          <a class="gallery__link" href=${image.original}>
            <img 
              class="gallery__image"
              src=${image.preview}
              data-source=${image.original}
              alt=${image.description}
            />
          </a>
      </li>`
  )
  .join('');

galleryList.insertAdjacentHTML('afterbegin', markup);

new SimpleLightbox('.gallery a')


