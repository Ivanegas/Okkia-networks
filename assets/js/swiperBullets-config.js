let swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      // Solo se renderizan 2 Bullets
      return index < 2 ? '<span class="' + className + '"></span>' : "";
    },
  },
});
