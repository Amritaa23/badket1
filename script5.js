document.addEventListener('DOMContentLoaded', function () {
  const carouselSlide = document.getElementById('carouselSlide');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const nextBtn = document.getElementById('nextBtn');

  let counter = 0;
  const totalItems = carouselItems.length;
  const delay = 5000; // 5 seconds delay

  function showSlide(index) {
    carouselSlide.style.transform = `translateX(${-index * 100}%)`;
  }

  function nextSlide() {
    counter++;
    if (counter >= totalItems) {
      counter = 0; // Reset to first slide
    }
    showSlide(counter);
  }

  // Automatically slide every 5 seconds
  let slideInterval = setInterval(nextSlide, delay);

  // Manual control using button
  nextBtn.addEventListener('click', () => {
    clearInterval(slideInterval); // Reset interval on click
    nextSlide();
    slideInterval = setInterval(nextSlide, delay);
  });

  // Optional: Pause slide on tap or hover (for mobile and desktop)
  carouselItems.forEach(item => {
    item.addEventListener('touchstart', () => {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, delay);
    });

    item.addEventListener('mouseenter', () => {
      clearInterval(slideInterval);
    });

    item.addEventListener('mouseleave', () => {
      slideInterval = setInterval(nextSlide, delay);
    });
  });
});


const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});