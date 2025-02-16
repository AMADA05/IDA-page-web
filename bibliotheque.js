// Charger les ressources depuis le fichier JSON
async function loadResources(category) {
    const response = await fetch("ressources.json");
    const resources = await response.json();
    displayResources(resources, category);
}

// Fonction pour afficher les ressources
function displayResources(resources, category) {
    const container = document.getElementById("resource-container");
    container.innerHTML = "";

    resources.forEach(resource => {
        if (category === "all" || resource.category === category) {
            let resourceCard = document.createElement("div");
            resourceCard.classList.add("resource-card");

            resourceCard.innerHTML = `
                <h3>${resource.title}</h3>
                <p>${resource.description}</p>
                <a href="${resource.link}" target="_blank">Télécharger / Voir</a>
            `;

            container.appendChild(resourceCard);
        }
    });
}

// Fonction de filtrage
function filterResources(category) {
    loadResources(category);
}

// Charger toutes les ressources au démarrage
loadResources("all");