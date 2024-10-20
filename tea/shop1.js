<<<<<<< HEAD
// Function to load carousel and tea images
=======

>>>>>>> f47a71e1e4c98c0e8a108f410507c0b72cd35653
function loadCarouselAndTeaImages() {
    fetch("shop1.json")
      .then(response => {
        if (!response.ok) {
          throw new Error('Error loading JSON: ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
<<<<<<< HEAD
        // Load carousel images
=======

>>>>>>> f47a71e1e4c98c0e8a108f410507c0b72cd35653
        const carouselImages = data.carousel;
        Object.keys(carouselImages).forEach(key => {
          const imgElement = document.querySelector(`.carousel-image[data-name="${key}"]`);
          if (imgElement) {
            imgElement.src = carouselImages[key].src;
            imgElement.alt = carouselImages[key].alt;
          }
        });

<<<<<<< HEAD
        // Load tea images
=======

>>>>>>> f47a71e1e4c98c0e8a108f410507c0b72cd35653
        const teaImages = data.teas;
        Object.keys(teaImages).forEach(key => {
          const imgElement = document.querySelector(`.tea-image[data-name="${key}"]`);
          if (imgElement) {
            imgElement.src = teaImages[key].src;
            imgElement.alt = teaImages[key].alt;
          }
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
}

<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', loadCarouselAndTeaImages);
=======
document.addEventListener('DOMContentLoaded', loadCarouselAndTeaImages);
>>>>>>> f47a71e1e4c98c0e8a108f410507c0b72cd35653
