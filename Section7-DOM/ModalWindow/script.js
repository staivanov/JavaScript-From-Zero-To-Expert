'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

console.log(btnOpenModal);

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let index = 0; index < btnOpenModal.length; index++) {
    btnOpenModal[index].addEventListener('click', openModal);
}


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {

    let keyName = 'Escape';
    let isContains = !modal.classList.contains('hidden');

    if (e.key === keyName && isContains) {
        closeModal();
    }
});