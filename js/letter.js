function initializeLetter() {

    const letter = document.querySelector(".letter-paper");
    const envelope = document.getElementById("envelope");
    const button = document.getElementById("openLetter");
    const signature = document.getElementById("signature");

    if (!letter || !envelope || !button || !signature) return;

    // Fade in the section when it enters the screen
    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                letter.classList.add("show");

            }

        });

    }, {
        threshold: 0.25
    });

    observer.observe(letter);

    // Open the envelope
    button.addEventListener("click", () => {

        envelope.classList.add("open");

        button.style.display = "none";

        // Animate the signature after the letter opens
        setTimeout(() => {

            signature.classList.add("write");

        }, 1200);

    });

}