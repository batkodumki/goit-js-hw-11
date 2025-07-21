
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { fetchImg } from "./js/pixabay-api";
import { createGallery } from "./js/render-functions";
import { clearGallery } from "./js/render-functions";
import { showLoader } from "./js/render-functions";
import { hideLoader } from "./js/render-functions";




const form = document.querySelector(".form");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearGallery();

    const query = event.target.elements.searchText.value.trim();
    
    if (!query) {
return iziToast.error({
                        title: "Please enter text",
                        position: "topRight"
                    });
    };

    showLoader()

    
        fetchImg(query)
        .then(images => {
                if (images.length === 0) {
                    iziToast.error({
                        title: `Sorry, there are no images matching your search ${query}. Please try again!`,
                        position: "topRight"
                    });
                } else {
                    createGallery(images);
                };
            })
        .catch(error => {
                iziToast.error({
                    title: error.message,
                });
        })
            .finally(() => {
            hideLoader()
        })
    
    form.reset();
})