const swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centeredSlides: true,
    fade: true,
    grabCursor: true,
    autoplay: {
    delay: 1100,
    disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-next",
    }
  });