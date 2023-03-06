import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryMarkup = createImageMarkup(galleryItems);
gallery.insertAdjacentHTML("afterbegin", galleryMarkup);

gallery.addEventListener("click", onImageClick);

function createImageMarkup(images) {
  return images
    .map(({ description, original, preview }) => {
      return ` 
<div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
</div>
    `;
    })
    .join("");
}

function onImageClick(event) {
  event.preventDefault();

  const isImageEl = event.target.classList.contains("gallery__image");

  if (!isImageEl) {
    return;
  }

  modalWindow(event);
}

function modalWindow(el) {
  const largeImgEl = el.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${largeImgEl}" width="800" height="600">
`);

  instance.show();

  window.addEventListener("keydown", closeModalWindow);

  function closeModalWindow(event) {
    if (event.code === "Escape") {
      instance.close();
    }
    window.removeEventListener("keydown", closeModalWindow);
  }
}
