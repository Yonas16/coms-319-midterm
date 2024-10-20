// Function to load carousel and tea images
function loadCarouselAndTeaImages() {
    fetch("shop1.json")
      .then(response => {
        if (!response.ok) {
          throw new Error('Error loading JSON: ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        // Load carousel images
        const carouselImages = data.carousel;
        Object.keys(carouselImages).forEach(key => {
          const imgElement = document.querySelector(`.carousel-image[data-name="${key}"]`);
          if (imgElement) {
            imgElement.src = carouselImages[key].src;
            imgElement.alt = carouselImages[key].alt;
          }
        });

        // Load tea images
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

document.addEventListener('DOMContentLoaded', loadCarouselAndTeaImages);
