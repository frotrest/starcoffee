document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll("[data-animate]");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const animation = entry.target.dataset.animate;
        entry.target.classList.add("animate__animated", `animate__${animation}`);
        if (entry.isIntersecting && entry.target instanceof Element) {
          const animation = entry.target.dataset.animate;
          entry.target.classList.add("animate__animated", `animate__${animation}`);
          observer.unobserve(entry.target);
        }
      }
    })
  }, {
    root: null,
    threshold: 0.1,
  })

  animatedElements.forEach(el => {
    observer.observe(el);
  })
});
  
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