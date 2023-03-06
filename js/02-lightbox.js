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
<li>
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>
`;
    })
    .join("");
}

function onImageClick(event) {
  event.preventDefault();
}

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionDelay: 250,
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom",
});
