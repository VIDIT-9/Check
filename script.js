const messages = [
    "😏 NO? Really??",
    "🙄 Wow. Bold of you.",
    "🥲 My confidence just died.",
    "💔 Congratulations, you hurt pixels.",
    "😤 I trusted you.",
    "😒 Even the YES button is judging you.",
    "🫠 This is emotional damage.",
    "🤨 Are you enjoying this?",
    "😑 Plot twist: YES was the right answer.",
    "😩 The NO button is working too well.",
    "😈 You think you’re strong? Click YES.",
    "😂 Okay okay, you win… now press YES.",
    "🥺 Last warning before I cry.",
    "😭 I am literally crying in JavaScript.",
    "😍 JUST KIDDING — PRESS YES ❤️"
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
