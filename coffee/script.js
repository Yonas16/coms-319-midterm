// Function to fetch and load images from the JSON file
function loadImages() {
    fetch("./images.json")  // Replace with the correct path to your images.json file
      .then(response => {
        if (!response.ok) {
          throw new Error('Error loading JSON: ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        // Load carousel images
        const carouselImages = data.carousel;
        document.querySelectorAll('.carousel-item img').forEach((img, index) => {
          const imageKey = 'coffee_img_' + (index + 1);  // Assuming images are named coffee_img_1, coffee_img_2, ...
          if (carouselImages[imageKey]) {
            img.src = carouselImages[imageKey].src;
            img.alt = carouselImages[imageKey].alt;
          }
        });
  
        // Load product images
        const productImages = data.coffee_products;
        const productImageElements = document.querySelectorAll('.featurette-image');
        productImageElements.forEach((img, index) => {
          const productKey = Object.keys(productImages)[index];  // Get keys dynamically
          if (productImages[productKey]) {
            img.src = productImages[productKey].src;
            img.alt = productImages[productKey].alt;
          }
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  // Call the function on page load
  document.addEventListener('DOMContentLoaded', loadImages);
  