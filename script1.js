const apiKey = ""; // Remplace par ta clé API OpenAI

async function sendMessage() {
    let userInput = document.getElementById("user-input").value.trim();
    let messages = document.getElementById("messages");

    if (userInput === "") return;

    // Afficher la question à droite
    messages.innerHTML += `<div class="user-message"><strong>Vous :</strong> ${userInput}</div>`;
    document.getElementById("user-input").value = "";
    messages.scrollTop = messages.scrollHeight; // Scroll auto

    try {
        let botResponse = await getBotResponse(userInput);

        // Afficher la réponse du bot à gauche
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
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userInput }],
        max_tokens: 100
    });

    let response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: body
    });

    let data = await response.json();
    return data.choices[0].message.content;
}

document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") sendMessage();
});