const openModalButtons = document.querySelectorAll('.open_modal');

openModalButtons.forEach(el => {
    el.addEventListener('click', () => {
        const wrapper = document.createElement('div');
        wrapper.className = 'modalwrapper';

        const backdrop = document.createElement('div');
        backdrop.className = 'backdrop';
        backdrop.addEventListener('click', () => {
            closeModal();
        });

        wrapper.appendChild(backdrop);

        const modalContainer = document.createElement('div');
        modalContainer.className = 'modal';

        const cross = createModalButton("modalcross", 'X', closeModal);
        const okButton = createModalButton("modalokbutton", 'OK', closeModal);
        const buttonCancel = createModalButton("modalcancelbutton", 'Oтмена', closeModal);

        modalContainer.appendChild(cross);
        modalContainer.appendChild(okButton);
        modalContainer.appendChild(buttonCancel);

        wrapper.appendChild(modalContainer);

        document.body.appendChild(wrapper);
    });
});

function createModalButton(className, text, func) {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.className = className;
    button.innerText = text;
    button.addEventListener('click', () => {
        func();
    });

    return button;
}

function closeModal() {
    const modal = document.querySelector('.modalwrapper');

    if (!modal) {
        return;
    }

    modal.remove();
}

