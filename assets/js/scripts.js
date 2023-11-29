"use strict";

// Подключение скриптов блоков и страниц
window.addEventListener('DOMContentLoaded', function () {
  var mobileMenu = function mobileMenu() {
    var body = document.querySelector('body');
    var header = document.querySelector('.header');
    var burger = document.querySelector('.burger');
    burger.addEventListener('click', function () {
      burger.classList.toggle('is-active');
      body.classList.toggle('hidden');
      header.classList.toggle('is-active');
    });
  };
  mobileMenu();
  /* Использование:
  
  
    К ссылке или кнопке добавить атрибут data-modal="modal-1", где modal-1 соответствует id  нужного модального окна
  
  */

  MicroModal.init({
    onShow: function onShow(modal, element, event) {
      event.preventDefault();
      event.stopPropagation();
      document.querySelector('body').classList.add('faded');
    },
    onClose: function onClose() {
      document.querySelector('body').classList.remove('faded');
    },
    openTrigger: 'data-modal',
    closeTrigger: 'data-modal-close',
    awaitCloseAnimation: true
  });
});