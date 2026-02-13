<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Will You Be My Valentine? 💘</title>

    <style>
        body {
            text-align: center;
            font-family: Arial, sans-serif;
            margin-top: 100px;
            overflow: hidden;
        }

        h1 {
            font-size: 40px;
        }

        .buttons {
            margin-top: 40px;
        }

        button {
            padding: 15px 30px;
            font-size: 20px;
            cursor: pointer;
            border-radius: 10px;
            border: none;
        }

        .yes-button {
            background-color: #ff4d6d;
            color: white;
        }

        .no-button {
            background-color: #444;
            color: white;
            margin-left: 20px;

            /* 👇 THIS IS WHERE YOUR TRANSITION GOES */
            transition: left 0.2s ease, top 0.2s ease;
        }
    </style>
</head>

<body>

    <h1>Will You Be My Valentine? ❤️</h1>

    <div class="buttons">
        <button class="yes-button" onclick="handleYesClick()">Yes 💖</button>
        <button class="no-button" onclick="handleNoClick()">No 🙈</button>
    </div>

    <script>
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

            // If last message reached → activate runaway mode
            if (messageIndex >= messages.length - 1) {
                activateRunaway(noButton);
                return;
            }

            noButton.textContent = messages[messageIndex];
            messageIndex++;

            const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
            yesButton.style.fontSize = `${currentSize * 1.5}px`;
        }

        function activateRunaway(button) {
            button.style.position = "absolute";

            document.addEventListener("mousemove", (e) => {
                const rect = button.getBoundingClientRect();

                const distance = Math.hypot(
                    e.clientX - (rect.left + rect.width / 2),
                    e.clientY - (rect.top + rect.height / 2)
                );

                if (distance < 100) {
                    const newX = Math.random() * (window.innerWidth - rect.width);
                    const newY = Math.random() * (window.innerHeight - rect.height);

                    button.style.left = `${newX}px`;
                    button.style.top = `${newY}px`;
                }
            });
        }

        function handleYesClick() {
            window.location.href = "yes_page.html";
        }
    </script>

</body>
</html>
