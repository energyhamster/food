import cards from './modules/cards';
import calcs from './modules/calcs';
import forms from './modules/forms';
import modals from './modules/modals';
import sliders from './modules/sliders';
import tabs from './modules/tabs';
import timers from './modules/timers';
import {openModal} from './modules/modals';

window.addEventListener('DOMContentLoaded', function() {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

    calcs();
    cards();
    forms('form', modalTimerId);
    modals('[data-modal]', '.modal', modalTimerId);
    sliders({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        slide: '.offer__slide'
    });
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timers('.timer', '2022-01-01');
});