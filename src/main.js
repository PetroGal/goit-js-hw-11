import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createGalleryItemMarkup } from './js/render-functions.js';
import { fetchPhotosByQuery } from './js/pixabay-api.js';

const searchFormEl = document.querySelector('.search-form');
const loaderEl = document.querySelector('.loader');
let galleryEl = document.querySelector('.gallery');

function handleSubmit(event) {
  event.preventDefault();
  const searchQuery = event.target.elements.search.value.trim();

  if (searchQuery === '') {
    galleryEl.innerHTML = '';
    event.target.reset();
    iziToast.show({
      message: 'Input field can not be empty',
      position: 'topRight',
      timeout: 2000,
      color: 'red',
    });

    return;
  }

  galleryEl.innerHTML = '';
  loaderEl.classList.remove('is-hidden');

  fetchPhotosByQuery(searchQuery)
    .then(imagesData => {
      if (imagesData.total === 0) {
        iziToast.show({
          message: 'Sorry, there are no images for this query',
          position: 'topRight',
          timeout: 2000,
          color: 'red',
        });
      }

      galleryEl.innerHTML = createGalleryItemMarkup(
        imagesData.hits.slice(0, 9)
      );
      const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionsDelay: 250,
      });
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(() => {
      event.target.reset();
      loaderEl.classList.add('is-hidden');
    });
}

searchFormEl.addEventListener('submit', handleSubmit);
