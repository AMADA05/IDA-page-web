document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Arrête l'observation une fois l'animation jouée
            }
        });
    }, {
        threshold: 0.2 // Déclenche lorsque 20% de l'élément est visible
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});
console.log("Le fichier script.js est bien lié !");
// Sélectionne toutes les sections à animer
const sections = document.querySelectorAll('.hidden');

// Fonction pour vérifier la position des sections
function checkSections() {
    const triggerBottom = window.innerHeight * 0.8; // Déclenchement à 80% du viewport

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
}

// Écoute le défilement de la page
window.addEventListener('scroll', checkSections);

// Exécute la fonction au chargement
checkSections();
// Sélection du bouton
const btnTop = document.getElementById("btnTop");

// Afficher le bouton quand l'utilisateur descend
window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
};

// Remonter en haut au clic
btnTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
// Sélection du bouton et du body
const toggleTheme = document.getElementById("toggleTheme");
const body = document.body;

// Vérifier si un thème est déjà enregistré dans le localStorage
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggleTheme.textContent = "☀️";
}

// Changer le thème au clic
toggleTheme.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    // Changer l'icône du bouton
    if (body.classList.contains("dark-mode")) {
        toggleTheme.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        toggleTheme.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche l'envoi immédiat du formulaire
        if (validateForm()) {
            if (confirm("Voulez-vous vraiment envoyer ce message ?")) {
                alert("Message envoyé avec succès !");
                form.reset(); // Réinitialise le formulaire après envoi
            }
        }
    });

    function validateForm() {
        let isValid = true;

        // Vérification du nom
        const name = document.getElementById("name");
        const nameError = document.getElementById("nameError");
        if (name.value.trim() === "") {
            nameError.textContent = "Le nom est requis.";
            nameError.style.display = "block";
            isValid = false;
        } else {
            nameError.style.display = "none";
        }

        // Vérification de l'email
        const email = document.getElementById("email");
        const emailError = document.getElementById("emailError");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            emailError.textContent = "Veuillez entrer un e-mail valide.";
            emailError.style.display = "block";
            isValid = false;
        } else {
            emailError.style.display = "none";
        }

        // Vérification du message
        const message = document.getElementById("message");
        const messageError = document.getElementById("messageError");
        if (message.value.trim() === "") {
            messageError.textContent = "Le message ne peut pas être vide.";
            messageError.style.display = "block";
            isValid = false;
        } else {
            messageError.style.display = "none";
        }

        return isValid;
    }
});
function showNotification(message, type = "info", duration = 3000) {
    // Sélectionne le conteneur des notifications
    const container = document.getElementById("notification-container");

    // Crée un élément de notification
    const notification = document.createElement("div");
    notification.classList.add("notification", type);
    notification.textContent = message;

    // Ajoute la notification au conteneur
    container.appendChild(notification);

    // Supprime la notification après un certain temps
    setTimeout(() => {
        notification.style.animation = "fadeOut 0.5s ease-in-out";
        setTimeout(() => notification.remove(), 500);
    }, duration);
}

// Exemples d'utilisation :
document.addEventListener("DOMContentLoaded", () => {
    showNotification("Bienvenue sur le site de IDA Informatidue et développent application ce site es en cours de developpement soyer le premier a le texté!", "success");
});
