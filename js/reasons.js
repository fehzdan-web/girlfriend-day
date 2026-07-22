function initializeReasons() {
    const reasons = [
        "Your smile brightens my darkest days.",
        "You believe in me.",
        "You make me laugh.",
        "You're beautiful inside and out."
    ];

    const cardsContainer = document.getElementById("cardsContainer");

    if (!cardsContainer) return;

    reasons.forEach((reason, index) => {
        const card = document.createElement("div");
        card.className = "flip-card";

        card.innerHTML = `
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    ❤️<br>Reason ${index + 1}
                </div>

                <div class="flip-card-back">
                    ${reason}
                </div>
            </div>
        `;

        card.addEventListener("click", () => {
            card.classList.toggle("flipped");
        });

        cardsContainer.appendChild(card);
    });
}