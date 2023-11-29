const mobileMenu = () => {  
  const body = document.querySelector('body');
  const header = document.querySelector('.header');
  const burger = document.querySelector('.burger'); 

  burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    body.classList.toggle('hidden');
    header.classList.toggle('is-active');
  });

}