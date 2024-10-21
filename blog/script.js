document.addEventListener("DOMContentLoaded", function() {
    fetch('./images.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById("stormy_image").src = data.about_page.authors.stormy_image.src;
            document.getElementById("stormy_image").alt = data.about_page.authors.stormy_image.alt;

            document.getElementById("aisha_image").src = data.about_page.authors.aisha_image.src;
            document.getElementById("aisha_image").alt = data.about_page.authors.aisha_image.alt;

            document.getElementById("masala_chai_image").src = data.about_page.tea_tier_list.masala_chai_image.src;
            document.getElementById("masala_chai_image").alt = data.about_page.tea_tier_list.masala_chai_image.alt;

            document.getElementById("matcha_tea_image").src = data.about_page.tea_tier_list.matcha_tea_image.src;
            document.getElementById("matcha_tea_image").alt = data.about_page.tea_tier_list.matcha_tea_image.alt;

            document.getElementById("moroccan_mint_tea_image").src = data.about_page.tea_tier_list.moroccan_mint_tea_image.src;
            document.getElementById("moroccan_mint_tea_image").alt = data.about_page.tea_tier_list.moroccan_mint_tea_image.alt;
        })
        .catch(error => console.error('Error fetching image data:', error));
});
