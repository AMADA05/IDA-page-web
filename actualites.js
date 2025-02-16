// Liste des actualités (à mettre à jour régulièrement)
const news = [
    {
        title: "L’IA révolutionne le développement web",
        description: "Les outils basés sur l'IA facilitent le travail des développeurs et accélèrent la création d’applications.",
        image: "images/ai-dev.jpg",
        link: "https://example.com/article-ia-dev"
    },
    {
        title: "Top 5 des langages de programmation en 2025",
        description: "Découvrez les langages les plus demandés et ceux à apprendre en priorité.",
        image: "images/top-languages.jpg",
        link: "https://example.com/article-langages"
    },
    {
        title: "Les innovations des smartphones de demain",
        description: "Zoom sur les nouvelles technologies qui vont changer nos mobiles : écrans pliables, IA embarquée, etc.",
        image: "images/smartphone-future.jpg",
        link: "https://example.com/article-smartphones"
    }
];

// Générer les articles d’actualités
const newsContainer = document.getElementById("news-container");

news.forEach(article => {
    let articleCard = document.createElement("div");
    articleCard.classList.add("news-card");

    articleCard.innerHTML = `
        <img src="${article.image}" alt="${article.title}">
        <h3>${article.title}</h3>
        <p>${article.description}</p>
        <a href="${article.link}" target="_blank">Lire l’article</a>
    `;

    newsContainer.appendChild(articleCard);
});