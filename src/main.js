    import { fetchPhotos } from './js/pixabay-api.js';
import { createGalerryCard } from './js/render-function.js';
import iziToast from 'izitoast';
import SimpleLightbox from "simplelightbox";



const formEl = document.querySelector('.search-form');
const galleryList = document.querySelector('.gallery-list');
const loader = document.querySelector('.loader-js');
const loadMoreBT = document.querySelector('.load-more-bt');

let currentPage = 1;
let searchValue = '';

const galleryLightbox = new SimpleLightbox('.gallery-list a', {
  captionsData: 'alt',
  captionDelay: 250,
});


const onSearchPhotos = async event => {
    try {

         event.preventDefault();
        searchValue = formEl.elements.search.value;
        
        currentPage = 1;


        galleryList.innerHTML = '';
        const { data } = await fetchPhotos(searchValue, currentPage);
        



        if (searchValue.trim() === '') {
    iziToast.error({
    message: 'Search value',
    });
 
                return;
            }
            loader.classList.add('loader');

            if (data.hits.length === 0) {
                iziToast.warning({
    message: 'Sorry, there are no images matching your search query. Please try again!',
                });

                galleryList.innerHTML = '';
                formEl.reset();
loader.classList.remove('loader')
                return;
            }

        const galleryCardsTemplate = data.hits.map(photoInfo => createGalerryCard(photoInfo)).join('');
            loader.classList.remove('loader');
            galleryList.innerHTML = galleryCardsTemplate;
            galleryLightbox.refresh();
 
        loadMoreBT.classList.remove('is-hidden')

                if (data.total <= 15) {
            loadMoreBT.classList.add('is-hidden');
}
        
    } catch (error) {
        iziToast.error({
    message: `${error}`,
                }); 
        
    }
};

const onLoadMorePhotos = async e => {
    try {
        currentPage++;

        const { data } = await fetchPhotos(searchValue, currentPage);
        
        const galleryCardsTemplate = data.hits.map(photoInfo => createGalerryCard(photoInfo)).join('');

            galleryList.insertAdjacentHTML('beforeend', galleryCardsTemplate)
     
        if (currentPage === Math.ceil(data.total / 15)) {
            loadMoreBT.classList.add('is-hidden');
            iziToast.info({
           position:'topRight',
    message: "We're sorry, but you've reached the end of search results.",
            }); 
            

            
        }
        galleryScrol();
        
    } catch (error) {
        iziToast.error({
    message: `${error}`,
                }); 
    }
 };

const galleryScrol = () => {
    const sizeCard = galleryList.firstElementChild;
 const {height} = sizeCard.getBoundingClientRect()

    window.scrollBy({
        top: height * 2,
        behavior:'smooth'
    });

}


formEl.addEventListener('submit', onSearchPhotos);
loadMoreBT.addEventListener('click', onLoadMorePhotos);