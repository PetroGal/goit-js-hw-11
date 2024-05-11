import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43776865-31502832095c6a436255fe0a5';

export const fetchPhotosByQuery = userQuery => {
  const searchParams = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${userQuery}&${searchParams}`
  ).then(response => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });
};
