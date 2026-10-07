document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".char-card");
    const detailsBox = document.getElementById("char-details");
    const detailsText = document.getElementById("details-text");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            // Remove classe ativa de todos
            cards.forEach(c => c.classList.remove("active"));
            
            // Ativa o card clicado
            card.classList.add("active");
            
            // Pega o texto explicativo do atributo "data-desc"
            const description = card.getAttribute("data-desc");
            
            // Exibe dinamicamente com efeito suave
            detailsBox.classList.remove("hidden");
            detailsText.textContent = description;
        });
    });
});
