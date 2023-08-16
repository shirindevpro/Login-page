var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 50,

  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicsBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
