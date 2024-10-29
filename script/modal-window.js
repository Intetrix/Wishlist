export function createModalWindow () {
    console.log('fbaerpibpiaj');
    document.body.style.overflow = "hidden";

    const wrapper = document.createElement('div');
    wrapper.className = 'modal_wrapper';
    document.body.appendChild(wrapper);

    const backdrop = document.createElement('div');
    backdrop.className = 'backdrop';
    backdrop.addEventListener('click', () => {
        closeModal();
    });
    wrapper.appendChild(backdrop);

    const modalWindow = document.createElement("div");
    modalWindow.className = "modal_window";
    wrapper.appendChild(modalWindow);

    const modalContainer = document.createElement("div");
    modalContainer.className = "modal_container";
    modalWindow.appendChild(modalContainer);

    const cross = createModalButton("modalcross", 'X', closeModal);
    modalWindow.appendChild(cross);
}

export function createModalButton(className, text, func) {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.className = className;
    button.innerText = text;
    button.addEventListener('click', () => {
        func();
    });

    return button;
}

export function closeModal() {
    document.body.style.overflow = "visible";
    const modal = document.querySelector('.modalwrapper');

    if (!modal) {
        return;
    }
    modal.remove();
}