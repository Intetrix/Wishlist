import { createModalWindow } from "./modal-window.js";

const openModal = document.querySelectorAll('.open_modal');

openModal.forEach(el => {
    el.addEventListener('click', () => {
        createModalWindow ();
    })
});