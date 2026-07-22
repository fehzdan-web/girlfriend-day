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

    images.forEach((image, index) => {

        const card = document.createElement("div");

        card.className = "gallery-item";

        card.innerHTML = `
            <img
                src="${image}"
                alt="Memory ${index + 1}"
            >
        `;

        gallery.appendChild(card);

    });

}