function initializeGallery() {

    const images = [

        "images/photo1.jpg",
        "images/photo2.jpg",
        "images/photo3.jpg",
        "images/photo4.jpg",
        "images/photo5.jpg",
        "images/photo6.jpg",
        "images/photo7.jpg",
        "images/photo8.jpg"

    ];

    const gallery = document.getElementById("galleryGrid");

    if (!gallery) return;

    // Prevent duplicate images if called again
    gallery.innerHTML = "";

    // Create gallery items
    images.forEach((src, index) => {

        const card = document.createElement("div");

        card.className = "gallery-item";

        card.innerHTML = `
            <img src="${src}" alt="Memory ${index + 1}">
        `;

        gallery.appendChild(card);

    });

    // Lightbox elements
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const close = document.getElementById("closeLightbox");

    // Add click event to every gallery image
    const photos = document.querySelectorAll(".gallery-item img");

    photos.forEach(photo => {

        photo.addEventListener("click", () => {

            lightboxImage.src = photo.src;

            lightbox.classList.add("show");

        });

    });

    // Close button
    if (close) {

        close.addEventListener("click", () => {

            lightbox.classList.remove("show");

        });

    }

    // Click outside image to close
    if (lightbox) {

        lightbox.addEventListener("click", (e) => {

            if (e.target === lightbox) {

                lightbox.classList.remove("show");

            }

        });

    }

}