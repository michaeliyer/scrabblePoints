const letterValues = {
    A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4, I: 1,
    J: 8, K: 5, L: 1, M: 3, N: 1, O: 1, P: 3, Q: 10, R: 1,
    S: 1, T: 1, U: 1, V: 4, W: 4, X: 8, Y: 4, Z: 10
};

function calculateScore() {
    const input = document.getElementById("inputText").value.toUpperCase();
    const outputDiv = document.getElementById("output");
    const totalScoreEl = document.getElementById("totalScore");
    const scoreMessageEl = document.getElementById("output2");

    outputDiv.innerHTML = ""; // Clear previous results
    totalScoreEl.innerText = ""; // Clear total score
    scoreMessageEl.innerText = ""; // Clear message

    let totalScore = 0;
    let delay = 0; // Delay for animation

    for (let char of input) {
        if (letterValues[char]) {
            totalScore += letterValues[char];
            const letterBox = document.createElement("div");
            letterBox.classList.add("letter-box");
            
            // Create letter and value elements
            const letterEl = document.createElement("div");
            letterEl.classList.add("letter");
            letterEl.innerText = char;
            
            const valueEl = document.createElement("div");
            valueEl.classList.add("value");
            valueEl.innerText = letterValues[char];
            
            // Append letter and value to letterBox
            letterBox.appendChild(letterEl);
            letterBox.appendChild(valueEl);

            // Add a slight delay for each letter to create the "roll out" effect
            setTimeout(() => {
                outputDiv.appendChild(letterBox);
            }, delay);

            delay += 200; // Increment delay for each letter
        }
    }

    // Display the total score after all letters have rolled out
    setTimeout(() => {
        totalScoreEl.innerText = `Total Scrabble Score: ${totalScore}`;

        // Conditional message based on total score
        if (totalScore <= 5) {
            scoreMessageEl.innerText = "That's a terrible score.";
        } else if (totalScore >= 6 && totalScore <= 8) {
            scoreMessageEl.innerText = "OK, better than that 5 point crap.";
        } else if (totalScore > 8 && totalScore <= 10) {
            scoreMessageEl.innerText = "Ok, you're effing dangerous. Just kidding. Still weak.";
        } else if (totalScore >= 11 && totalScore <= 15) {
            scoreMessageEl.innerText = "Okay! You're playing a little scrabble now.";
        } else if (totalScore > 15 && totalScore <= 20) {
            scoreMessageEl.innerText = "Now you're starting to push it. Are you stashing tiles?";
        } else if (totalScore >= 21 && totalScore <= 25) {
            scoreMessageEl.innerText = "You've got big old balls coming around here with that shit. Don't think dropping Q's and Z's and J's goes unnoticed..."
        }
          else if (totalScore > 25 && totalScore <=30) {
            scoreMessageEl.innerText = "Maybe someone needs to teach you a little lesson, essay! Maybe we don't deal too well with cheaters around here. You were warned and now it's too late!!"
        } else if  (totalScore > 30 && totalScore <=35 ) {
            scoreMessageEl.innerText = "You're dead to me, fuckface. You're ruined around here!!"
        } else if (totalScore > 35) {
            scoreMessageEl.innerText = "Get fucked. This is you being ghosted."
        }

        // Add fade-in effect for the score message
        scoreMessageEl.style.opacity = 0;
        setTimeout(() => {
            scoreMessageEl.style.transition = "opacity 1s";
            scoreMessageEl.style.opacity = 1;
        }, 100);

    }, delay);
}