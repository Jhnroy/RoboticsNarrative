let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function nextSlide() {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1;
    }
    updateCarousel();
}

function updateCarousel() {
    const container = document.querySelector('.carousel-container');
    const slideWidth = slides[0].offsetWidth;
    container.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}