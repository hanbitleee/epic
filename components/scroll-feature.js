(function () {
  'use strict';

  const initScrollFeature = () => {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      return;
    }

    const slides = gsap.utils.toArray('.slide-card');
    const navItems = gsap.utils.toArray('.nav-item');
    if (!slides.length || !navItems.length) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const totalSlides = slides.length;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.scroll-feature-section',
        scrub: 0.3,
        start: 'top top',
        end: () => '+=' + ((totalSlides - 1) * window.innerHeight)
      }
    });

    slides[0].classList.add('is-entering');
    if (slides[1]) {
      slides[1].classList.add('is-next');
    }
    navItems[0].classList.add('is-active');

    tl.to({}, { duration: 1 });

    for (let i = 0; i < totalSlides - 1; i++) {
      const currentSlide = slides[i];
      const nextSlide = slides[i + 1];
      const animationTime = i + 1;

      tl.to(currentSlide, {
        onStart: () => {
          slides.forEach((slide) => slide.classList.remove('is-entering', 'is-leaving', 'is-next'));
          currentSlide.classList.add('is-leaving');
        },
        onReverseComplete: () => {
          slides.forEach((slide) => slide.classList.remove('is-entering', 'is-leaving', 'is-next'));
          currentSlide.classList.add('is-entering');
          if (nextSlide) {
            nextSlide.classList.add('is-next');
          }
        }
      }, animationTime);

      tl.to(nextSlide, {
        onStart: () => {
          slides.forEach((slide) => slide.classList.remove('is-entering', 'is-leaving', 'is-next'));
          currentSlide.classList.add('is-leaving');
          nextSlide.classList.add('is-entering');
          if (slides[i + 2]) {
            slides[i + 2].classList.add('is-next');
          }
          updateNav(nextSlide.dataset.slideFor);
        },
        onReverseComplete: () => {
          slides.forEach((slide) => slide.classList.remove('is-entering', 'is-leaving', 'is-next'));
          currentSlide.classList.add('is-entering');
          if (nextSlide) {
            nextSlide.classList.add('is-next');
          }
          updateNav(currentSlide.dataset.slideFor);
        }
      }, animationTime);
    }

    function updateNav(activeSlideType) {
      navItems.forEach((nav) => {
        if (nav.dataset.navFor === activeSlideType) {
          nav.classList.add('is-active');
        } else {
          nav.classList.remove('is-active');
        }
      });
    }

    function goToSlideByType(type) {
      const targetIndex = slides.findIndex((slide) => slide.dataset.slideFor === type);
      if (targetIndex === -1 || totalSlides < 2) {
        return;
      }
      const targetProgress = targetIndex / (totalSlides - 1);
      gsap.to(tl, {
        progress: targetProgress,
        duration: 0.3,
        ease: 'power2.inOut'
      });
    }

    navItems.forEach((nav) => {
      nav.addEventListener('click', () => {
        const type = nav.dataset.navFor;
        goToSlideByType(type);
      });
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollFeature);
  } else {
    initScrollFeature();
  }
})();
