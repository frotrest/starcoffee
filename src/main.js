document.addEventListener('DOMContentLoaded', () => {
  try {
    const animatedElements = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.target instanceof Element) {
            const animation = entry.target.dataset.animate;
            entry.target.classList.add(
              'animate__animated',
              `animate__${animation}`
            );
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    animatedElements.forEach(el => {
      observer.observe(el);
    });
  } catch (error) {
    console.log(`Ошибка с анимациями: ${error}`);
  }
});

document.getElementById('burger-menu').addEventListener('click', () => {
  alert('Temporarily not working!');
});

document.querySelector('.cooking').addEventListener('click', () => {
  alert('Temporarily not working!');
});

function swiper() {
  try {
    const swiper = new Swiper('.slide-content', {
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
        nextEl: '.swiper-next',
      },
    });
    const mobileSwiper = new Swiper('.mobile-slide-content', {
      slidesPerView: 1.4,
      spaceBetween: 100,
      loop: true,
      centeredSlides: true,
      grabCursor: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.mobile-swiper-next',
      },
    });
  } catch (error) {
    console.log(`Проблема в свайпере: ${error}`);
  }
}

swiper();
