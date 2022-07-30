import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", onClickGallery);

const itemsGalleryMarkup = createItemsGalleryMarkup(galleryItems);

function createItemsGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
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
    })
    .join("");
}

gallery.insertAdjacentHTML("beforeend", itemsGalleryMarkup);

function onClickGallery(event) {
  event.preventDefault();

  const originalSizeImageSrc = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<div class="modal">
           <img
      class="gallery__image"
      src="${originalSizeImageSrc}"
    />
    </div>`
  );

  if (instance.show()) {
    document.addEventListener("keydown", closeModalWindow);
  }
  function closeModalWindow(event) {
    console.log("Keyup: ", event);
    console.log("key: ", event.key);
    if (event.key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", closeModalWindow);
    }
  }
}
