function initializeLetter() {

    const envelope = document.getElementById("envelope");
    const paper = document.querySelector(".paper");
    const button = document.getElementById("openLetter");
    const signature = document.getElementById("signature");

    if (!envelope || !paper || !button || !signature) return;

    button.addEventListener("click", () => {

        envelope.classList.add("open");

        button.style.display = "none";

        setTimeout(() => {

            signature.classList.add("write");

        }, 1500);

    });

}