const letterValues = {
    A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4, I: 1,
    J: 8, K: 5, L: 1, M: 3, N: 1, O: 1, P: 3, Q: 10, R: 1,
    S: 1, T: 1, U: 1, V: 4, W: 4, X: 8, Y: 4, Z: 10
};

function calculateScore() {
    const input = document.getElementById("inputText").value.toUpperCase();
    const outputDiv = document.getElementById("output");
    const totalScoreEl = document.getElementById("totalScore");
    
    outputDiv.innerHTML = ""; // Clear previous results
    totalScoreEl.innerText = ""; // Clear total score
    
    let totalScore = 0;
    let delay = 0; // Delay for the animation

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
            
            // Append letter and value to the letterBox
            letterBox.appendChild(letterEl);
            letterBox.appendChild(valueEl);

            // Add a slight delay for each letter to create the "roll out" effect
            setTimeout(() => {
                outputDiv.appendChild(letterBox);
            }, delay);

            delay += 200; // Increase delay for each letter
        }
    }

    // Display the total score after all letters have rolled out
    setTimeout(() => {
        totalScoreEl.innerText = `Total Scrabble Score: ${totalScore}`;
    }, delay);
}
