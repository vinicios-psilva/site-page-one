$(document).ready(function () {
    $('#meuCarrossel').carousel();
});

const myCarouselElement = document.querySelector('#meuCarrossel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    touch: false
})