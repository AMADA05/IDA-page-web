const apiKey = " "; // Remplace par ta nouvelle clé API sécurisée

async function getBotResponse(userInput) {
    return "Je suis un chatbot, mais je fonctionne hors ligne pour l'instant.";
}

async function sendMessage() {
    let userInput = document.getElementById("user-input").value.trim();
    let messages = document.getElementById("messages");

    if (userInput === "") return;

    // Afficher la question de l'utilisateur
    messages.innerHTML += `<div class="user-message"><strong>Vous :</strong> ${userInput}</div>`;
    document.getElementById("user-input").value = "";
    messages.scrollTop = messages.scrollHeight;

    try {
        let botResponse = await getBotResponse(userInput);

        // Afficher la réponse du bot
        messages.innerHTML += `<div class="bot-message"><strong>Bot :</strong> ${botResponse}</div>`;
        messages.scrollTop = messages.scrollHeight;
    } catch (error) {
        console.error("Erreur API :", error);
        messages.innerHTML += `<div class="bot-message"><strong>Bot :</strong> Désolé, une erreur est survenue.</div>`;
    }
}

async function getBotResponse(userInput) {
    const url = "https://api.openai.com/v1/chat/completions";

    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
    };

    const body = JSON.stringify({
        model: "gpt-4",
        messages: [{ role: "user", content: userInput }]
    });

    let response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: body
    });

    if (!response.ok) {
        throw new Error(`Erreur API : ${response.status} - ${response.statusText}`);
    }

    let data = await response.json();

    if (data.error) {
        throw new Error(`Erreur OpenAI : ${data.error.message}`);
    }

    return data.choices[0].message.content;
}

// Envoi du message avec "Enter"
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") sendMessage();
});