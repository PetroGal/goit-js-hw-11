import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43776865-31502832095c6a436255fe0a5';

//У файлі pixabay-api.js зберігай функції для HTTP-запитів.

// const searchFormEl = document.querySelector('.search-form');

// searchFormEl.addEventListener('submit', handleSubmit);

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

// export function handleSubmit(event) {
//   event.preventDefault();
//   const searchQuery = event.target.elements.search.value;
//   console.log(searchQuery);

//   fetchPhotosByQuery(searchQuery)
//     .then(function (photo) {
//       console.log(photo.hits);
//     })
//     .catch(function () {
//       if (photo.totalHits === '0') {
//         onFetchError();
//       }
//     });
// }

// export function onFetchError() {
//   iziToast.error({
//     message: `❌ Sorry, there are no images matching your search query. Please try again!"`,
//     position: 'topRight',
//     backgroundColor: '#EF4040',
//     messageColor: 'white',
//     icon: '',
//     color: 'white',
//   });
// }
