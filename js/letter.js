function initializeLetter() {

    const letter = document.querySelector(".letter-paper");

    if (!letter) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                letter.classList.add("show");

                document
                    .getElementById("signature")
                    ?.classList.add("write");

            }

        });

    }, {
        threshold: 0.25
    });

    observer.observe(letter);

}