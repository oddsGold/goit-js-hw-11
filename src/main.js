import { images } from './js/pixabay-api.js';
import { createHTML } from './js/render-function.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const searchForm = document.querySelector('.form');
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let loader = `<span class="loader"></span>`;
  document.querySelector('.gallery').innerHTML = loader;

  const searchInput = document.querySelector("[name='search']");

  if (searchInput.value.trim() !== '') {
    document.querySelector('.gallery').innerHTML = loader;

      images.getImages(searchInput.value.trim())
        .then((res) => {
          createHTML(res.hits);
        })
        .catch((error)=> {
          document.querySelector('.gallery').innerHTML = '';
          console.error(error.message);
          resultError(error.message);
        });
  }else {
    resultError('The field cannot be empty');
  }
});

const resultError = (errorMsg) => {
  iziToast.error({
    message: errorMsg,
    position: 'topRight',
    timeout: 5000
  })
}