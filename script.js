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