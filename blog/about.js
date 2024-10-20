function loadAboutAndTeaImages() {
    // Use root path to fetch the JSON file
    fetch("./about.json")
      .then(response => {
        // Check if the response is okay (status in the range 200-299)
        if (!response.ok) {
          throw new Error('Error loading JSON: ' + response.statusText);
        }
        return response.json(); // Parse the JSON data
      })
      .then(data => {
        // Load about images
        const aboutImages = data.about;
        Object.keys(aboutImages).forEach(key => {
          // Select the image element with the corresponding data-name
          const imgElement = document.querySelector(`.about-image[data-name="${key}"]`);
          if (imgElement) {
            imgElement.src = aboutImages[key].src; // Set the image source
            imgElement.alt = aboutImages[key].alt; // Set the image alt text
          }
        });
        
        // Load tea images
        const teaImages = data.tea;
        Object.keys(teaImages).forEach(key => {
          // Select the image element with the corresponding data-name
          const imgElement = document.querySelector(`.tea-image[data-name="${key}"]`);
          if (imgElement) {
            imgElement.src = teaImages[key].src; // Set the image source
            imgElement.alt = teaImages[key].alt; // Set the image alt text
          }
        });
      })
      .catch(error => {
        // Log any errors to the console
        console.error('Error:', error);
      });
}

// Call the function to load images once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadAboutAndTeaImages);
