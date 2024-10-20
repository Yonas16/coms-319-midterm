fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    
    const coffeeImage = document.getElementById("coffeeImage");
    const teaImage = document.getElementById("teaImage");

    coffeeImage.src = data["index.html"].coffee_home.src;
    coffeeImage.alt = data["index.html"].coffee_home.alt;

    teaImage.src = data["index.html"].tea_home.src;
    teaImage.alt = data["index.html"].tea_home.alt;
  })
  .catch((error) => console.error("Error loading JSON:", error));
