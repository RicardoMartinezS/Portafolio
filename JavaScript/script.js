// script.js

document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu");
    const navLinks = document.querySelector(".nav-links");
    const body = document.body;

    menu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        body.classList.toggle("nav-active");
    });

    document.addEventListener("click", (event) => {
        const isClickInsideMenu = navLinks.contains(event.target) || menu.contains(event.target);
        if (!isClickInsideMenu) {
            navLinks.classList.remove("active");
            body.classList.remove("nav-active");
        }
    });
});

var swiper = new Swiper(".mySwiper-1", {
    slidesPerView:1,
    spaceBetween:15,
    loop:true,
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }

});

const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#EnvioEmail')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  $buttonMailto.setAttribute('href', `mailto:martinezsoto.ra@gmail.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('message')}`)
  $buttonMailto.click()
}