$(document).ready(function(){
  $('.slider-container').slick({
    prevArrow: $('.prev-arrow'),
    nextArrow: $('.next-arrow')
  });
})

const song = document.querySelector('.song');

window.addEventListener('load', () => {
  song.play();
})