let imagesVisible = false;

        function toggleImages() {
            // Get the container
            var container = document.getElementById('imageContainer');
            container.innerHTML = ''; // Clear previous content

            if (!imagesVisible) {
                // List of image URLs
                var imageUrls = [
                    "https://raw.githubusercontent.com/mqsy2/WEBPROGSS231-personal-website/refs/heads/main/images/image1.jpg",
                    "https://raw.githubusercontent.com/mqsy2/WEBPROGSS231-personal-website/refs/heads/main/images/image2.jpg",
                ];

                // Loop through the image URLs
                imageUrls.forEach(function(url) {
                    // Create a new image element for each URL
                    var img = new Image();
                    img.src = url;
                    img.alt = 'Displayed Image';
                    img.width = 300;
                    img.height = 150;
                    // Append the image to the container
                    container.appendChild(img);
                });

                // Change button text
                document.querySelector('.custom-button').innerText = 'Hide Images';
            } else {
                // Change button text back
                document.querySelector('.custom-button').innerText = 'Show Images';
            }

            // Toggle the visibility state
            imagesVisible = !imagesVisible;
        }


function myFunction2() {
  
    var imageUrls = [
        "https://raw.githubusercontent.com/mqsy2/WEBPROGSS231-personal-website/refs/heads/main/images/image1.jpg",
        "https://raw.githubusercontent.com/mqsy2/WEBPROGSS231-personal-website/refs/heads/main/images/image2.jpg",
    ];

  
    var container = document.getElementById('imageContainer');
    container.innerHTML = ''; 
    imageUrls.forEach(function(url) {
        var img = new Image();
        img.src = url;
        img.alt = 'Displayed Image';
        img.width = 256;
        img.height = 120;
        container.appendChild(img);
    });
}
