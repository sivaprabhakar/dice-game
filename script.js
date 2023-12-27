let currentPlayerNumber = 1; 
let score1 = 0;
let score2 = 0;
let gameFinished = false;

function rollDice(player) {
    if (gameFinished) return;

    const rollButton1 = document.getElementById('rollButton1');
    const rollButton2 = document.getElementById('rollButton2');
    const diceImage = document.getElementById('diceImage');

    if (player === currentPlayerNumber) {
        const diceValue = Math.floor(Math.random() * 6) + 1;
        const currentPlayerScore = document.getElementById(`score${currentPlayerNumber}`);
        const currentPlayerScoreValue = currentPlayerNumber === 1 ? score1 : score2;
        currentPlayerScore.textContent = currentPlayerScoreValue + diceValue;

        diceImage.src = `images/dice-${diceValue}.png`;

        if (currentPlayerNumber === 1) {
            score1 += diceValue;
            currentPlayerNumber = 2;
            rollButton1.disabled = true;
            rollButton2.disabled = false;
        } else {
            score2 += diceValue;
            currentPlayerNumber = 1;
            rollButton1.disabled = false;
            rollButton2.disabled = true;
        }

        if (score1 >= 30 || score2 >= 30) {
            gameFinished = true;
            document.getElementById('resetButton').disabled = false;
            const winnerText = document.getElementById('winner');
            winnerText.textContent = `Player ${score1 >= 30 ? 1 : 2} wins!`;
        }

        const currentPlayerText = document.getElementById('currentPlayer');
        currentPlayerText.textContent = `Player-${currentPlayerNumber} to play`;
    }
}

function resetGame() {
    currentPlayerNumber = 1;
    score1 = 0;
    score2 = 0;
    gameFinished = false;

    const currentPlayerScore1 = document.getElementById('score1');
    const currentPlayerScore2 = document.getElementById('score2');

    currentPlayerScore1.textContent = '0';
    currentPlayerScore2.textContent = '0';

    const rollButton1 = document.getElementById('rollButton1');
    const rollButton2 = document.getElementById('rollButton2');

    rollButton1.disabled = false;
    rollButton2.disabled = true;

    const currentPlayerText = document.getElementById('currentPlayer');
    currentPlayerText.textContent = `Player 1 to play`;

    document.getElementById('resetButton').disabled = true;

    const winnerText = document.getElementById('winner');
    winnerText.textContent = ''; // Reset the winner text
}
