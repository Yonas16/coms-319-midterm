function loadImages() {
  fetch("./images.json")  
    .then(response => {
      if (!response.ok) {
        throw new Error('Error loading JSON: ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {

      const carouselImages = data.carousel;
      const carouselImageElements = document.querySelectorAll('.carousel-item img');
      carouselImageElements.forEach((img, index) => {
        const imageKey = 'coffee_img_' + (index + 1);  
        if (carouselImages[imageKey]) {
          img.src = carouselImages[imageKey].src;
          img.alt = carouselImages[imageKey].alt;
        }
      });


      const productImages = data.coffee_products;
      const productImageElements = document.querySelectorAll('.featurette-image');
      const headings = document.querySelectorAll('.heading');
      const subheadings = document.querySelectorAll('.subheading');
      const descriptions = document.querySelectorAll('.description');
      
      Object.keys(productImages).forEach((key, index) => {
        const product = productImages[key];
        

        if (productImageElements[index]) {
          productImageElements[index].src = product.src;
          productImageElements[index].alt = product.alt;
        }
        

        if (headings[index]) {
          headings[index].textContent = product.heading;
        }
        

        if (subheadings[index]) {
          subheadings[index].textContent = product.subheading;
        }
        

        if (descriptions[index]) {
          descriptions[index].textContent = product.description;
        }
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

document.addEventListener('DOMContentLoaded', loadImages);
