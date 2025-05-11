const slide = document.getElementById("carouselSlide");
const nextBtn = document.getElementById("nextBtn");

let index = 0;
const totalItems = document.querySelectorAll('.carousel-item').length;

function showNextItem() {
  index = (index + 1) % totalItems;
  slide.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener("click", showNextItem);

// Auto-slide every 5 seconds
setInterval(showNextItem, 5000);



const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});



