'use strict';

(function iifeMenu(document, window, undefined) {
    var menuBtn = document.querySelector('.menu__btn');
    var menu = document.querySelector('.menu__list');

    function toggleMenu() {
        menu.classList.toggle('menu__list--active');
        menu.classList.toggle('menu__list--transition');
        this.classList.toggle('menu__btn--active');
        this.setAttribute(
            'aria-expanded',
            this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
        );
    }

    function removeMenuTransition() {
        this.classList.remove('menu__list--transition');
    }

    if (menuBtn && menu) {
        menuBtn.addEventListener('click', toggleMenu, false);
        menu.addEventListener('transitionend', removeMenuTransition, false);
    }
}(document, window));

(function disableDisqusAds(document) {
    console.error('bababab');
    for (let elm of document.querySelectorAll("[id^='dsq']")) {
        console.error(elm);
        if (elm.hasAttribute('sandbox')) {
            console.error("display none");
            elm.style.display = 'none';
        }
    }
}(document));
