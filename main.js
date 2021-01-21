// OPEN CLOSE CARD

// Card element

let card = document.querySelector('.card-box');

// Button element for click

let button = document.querySelector('.button-click');

// Function to open and close card

button.addEventListener('click', function() {
  card.style.visibility = (button.dataset.button ^= 1) ? "visible" : "hidden";
});




// PRODUCT SLIDER

// Slider element

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide article');

// Button element for click

const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

// Counter

let counter = 0;
const size = carouselImages[0].clientHeight;

carouselSlide.style.transform = 'translateY(' + (-size * counter) + 'px)';

// Buttons listeners

nextBtn.addEventListener('click', () => {
  if (counter < 3) {
    carouselSlide.style.transition = "transform 0.4 ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateY(' + (-size * counter) + 'px)';
  }
});

prevBtn.addEventListener('click', () => {
  if(counter > 0) {
    carouselSlide.style.transition = "transform 0.4 ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateY(' + (-size * counter) + 'px)';
  }
});
