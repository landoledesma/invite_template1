// src/components/Carousel/CarouselLogic.ts
export function initializeCarousel(): void {
    let currentSlide = 0;
    const container = document.querySelector('.carousel-container') as HTMLElement | null;
    const slides = document.querySelectorAll('.carousel-slide') as NodeListOf<HTMLElement>;
    const indicators = document.querySelectorAll('.indicator') as NodeListOf<HTMLElement>;
    const prevButton = document.querySelector('.prev') as HTMLElement | null;
    const nextButton = document.querySelector('.next') as HTMLElement | null;
    const totalSlides = slides.length;
  
    const updateCarousel = () => {
      if (!container) return;
      container.style.transform = `translateX(-${currentSlide * 100}%)`;
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle('bg-white', index === currentSlide);
        indicator.classList.toggle('bg-white/50', index !== currentSlide);
      });
    };
  
    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateCarousel();
    };
  
    const prevSlide = () => {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateCarousel();
    };
  
    prevButton?.addEventListener('click', prevSlide);
    nextButton?.addEventListener('click', nextSlide);
  
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        currentSlide = index;
        updateCarousel();
      });
    });
  
    const autoPlayInterval = setInterval(nextSlide, 5000);
  
    [prevButton, nextButton, ...Array.from(indicators)].forEach((element) => {
      element?.addEventListener('click', () => clearInterval(autoPlayInterval));
    });
  
    window.addEventListener('load', () => {
      indicators[0]?.classList.add('bg-white');
      indicators[0]?.classList.remove('bg-white/50');
    });
  }
  