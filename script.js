const messages = [
    "NO... Really?? 😏",
    "Maaniii yrrr.... kyu kr rhi h 🙁",
    "Mjhe bura lg rha h 😔",
    "Tjhe mjhe pareshan krne me bahut mzee aate h naa 😒?",
    "This is Last warning Maanii before.... 🧐",
    "Last warning before I cry 🥺",
    "Maaniii... You are hurting me 😫",
    "I am literally crying 😭",
    "💔"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
