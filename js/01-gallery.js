import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);



const galleryEl = document.querySelector('.gallery');
const galleryMarkup = createGallaryMurkup(galleryItems);


galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

function createGallaryMurkup(img) {
    return galleryItems.map(({preview, original, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>`;
    }).join('');

}

galleryEl.addEventListener('click', onImgClick);
function onImgClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    };
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`)

    instance.show();


    function onModalClose(e) {if (e.code !== 'Escape') {
        return;
    }
        instance.close(() => document.removeEventListener('keydown', onModalClose));
        
    };
    document.addEventListener('keydown', onModalClose);


};

