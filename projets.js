// Liste des projets (à personnaliser avec tes propres projets)
const projects = [
    {
        title: "Life Companion",
        description: "Une application multifonctionnelle pour la gestion quotidienne.",
        image: "images/life-companion.png", // Remplace par une vraie image
        link: "https://github.com/ton-github/life-companion"
    },
    {
        title: "IDA Webpage",
        description: "Un site dédié à l'informatique et au développement.",
        image: "images/ida-webpage.png",
        link: "https://amada05.github.io/IDA-page-web/"
    },
    {
        title: "Chatbot IA",
        description: "Un assistant basé sur GPT pour répondre aux questions.",
        image: "images/chatbot-ia.png",
        link: "#"
    }
];

// Générer les cartes de projets
const projectContainer = document.getElementById("project-container");

projects.forEach(project => {
    let projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">Voir le projet</a>
    `;

    projectContainer.appendChild(projectCard);
});
document.addEventListener("DOMContentLoaded", function () {
    loadProjects();
});

function addProject() {
    let title = document.getElementById("project-title").value.trim();
    let description = document.getElementById("project-description").value.trim();
    let link = document.getElementById("project-link").value.trim();
    let code = document.getElementById("project-code").value.trim();
    let imageInput = document.getElementById("project-image");
    
    if (title === "" || description === "") {
        alert("Veuillez remplir tous les champs obligatoires !");
        return;
    }

    let reader = new FileReader();
    reader.onload = function (event) {
        let imageURL = event.target.result;

        let project = {
            title: title,
            description: description,
            link: link,
            code: code,
            image: imageURL
        };

        let projects = JSON.parse(localStorage.getItem("projects")) || [];
        projects.push(project);
        localStorage.setItem("projects", JSON.stringify(projects));

        document.getElementById("project-title").value = "";
        document.getElementById("project-description").value = "";
        document.getElementById("project-link").value = "";
        document.getElementById("project-code").value = "";
        document.getElementById("project-image").value = "";

        loadProjects();
    };

    if (imageInput.files.length > 0) {
        reader.readAsDataURL(imageInput.files[0]); // Convertit l'image en Base64
    } else {
        reader.onload({ target: { result: "" } }); // Aucun fichier sélectionné
    }
}

function loadProjects() {
    let projects = JSON.parse(localStorage.getItem("projects")) || [];
    let projectsContainer = document.getElementById("projects-container");

    projectsContainer.innerHTML = "";

    projects.forEach((project, index) => {
        let projectElement = document.createElement("div");
        projectElement.classList.add("project-item");

        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            ${project.image ? `<img src="${project.image}" alt="Image du projet">` : ""}
            ${project.link ? `<a href="${project.link}" target="_blank">🔗 Voir le projet</a>` : ""}
            ${project.code ? `<pre><code>${project.code}</code></pre>` : ""}
            <button onclick="deleteProject(${index})">❌ Supprimer</button>
        `;

        projectsContainer.appendChild(projectElement);
    });
}

function deleteProject(index) {
    let projects = JSON.parse(localStorage.getItem("projects")) || [];
    projects.splice(index, 1);
    localStorage.setItem("projects", JSON.stringify(projects));
    loadProjects();
}