let humanScore = 0;
let computerScore = 0;

const resultsDisplay = document.querySelector("#results");

let getComputerChoice = () => {
    /*
        get a random number from 0 to 2
        use a switch statement to check that number
        return the move choosen from the switch statement
    */
    const randomNumber = Math.floor(Math.random() * 3);
    let move = "";
    switch(randomNumber) {
        case 0:
            move = "rock";
            break;
        case 1:
            move = "paper";
            break;
        case 2:
            move = "scissors";
            break;
    }

    return move;
}

let playRound = (humanChoice) => {
    /*
        compare the two parameters according to the rps rules
        if the human wins, return 1
        if the computer wins, return -1
        if it's a draw, return 0
    */
    const computerChoice = getComputerChoice();

    let humanWin = 1;
    let draw = humanChoice == computerChoice;

    if(!draw) {
        switch(humanChoice) {
            case "rock":
                if (computerChoice === "paper") {
                    humanWin = -1;
                }
                break;
            case "paper":
                if (computerChoice === "scissors") {
                    humanWin = -1;
                }
                break;
            case "scissors":
                if (computerChoice === "rock") {
                    humanWin = -1;
                }
                break;
            default:
                humanWin = -1;
                break;
        }
    } else {
        humanWin = 0;
    }
    
    checkRoundWinner(humanWin, humanChoice, computerChoice);
}

let checkRoundWinner = (winner, humanChoice, computerChoice) => {
    let winnerPhrase = "";
    const capitalizedHumanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1);
    const capitalizedComputerChoice = computerChoice[0].toUpperCase() + computerChoice.slice(1);

    switch(winner) {
        case -1:
            winnerPhrase = `You lose! ${capitalizedComputerChoice} beats ${capitalizedHumanChoice}`;
            computerScore++;
            break;
        case 0:
            winnerPhrase = "It's a draw !";
            break;
        case 1:
            winnerPhrase = `You win! ${capitalizedHumanChoice} beats ${capitalizedComputerChoice}`;
            humanScore++;
            break;
    }
    console.log(winnerPhrase);
    displayMessage(winnerPhrase);
    displayScores();

    checkGameWinner();
}

let checkGameWinner = () => {
    const winnerDisplay = document.createElement("p");
    if(humanScore === 5) {
        winnerDisplay.textContent = "You win !"
        resultsDisplay.appendChild(winnerDisplay);
        endGame();
    } else if(computerScore === 5) {
        winnerDisplay.textContent = "You Lose !"
        resultsDisplay.appendChild(winnerDisplay);
        endGame();
    }

}

let endGame = () => {
    const playerButtons = document.querySelectorAll("button");
    playerButtons.forEach(button => {
        button.disabled = true;
    });

    const newGameButton = document.createElement("button");
    newGameButton.textContent = "New Game";

    newGameButton.addEventListener("click", playNewGame);

    resultsDisplay.appendChild(newGameButton);
}

let playNewGame = () => {
    window.location.reload();
}

let displayMessage = (phrase) => {
    resultsDisplay.textContent = phrase;
}

let displayScores = () => {
    const humanDisplay = document.createElement("p");
    const computerDisplay = document.createElement("p");

    humanDisplay.textContent = `Human: ${humanScore}`;
    computerDisplay.textContent = `Computer: ${computerScore}`;

    resultsDisplay.appendChild(humanDisplay);
    resultsDisplay.appendChild(computerDisplay);
}

const playerButtons = document.querySelectorAll("button");
playerButtons.forEach(button => {
    button.addEventListener("click", e => {
        playRound(e.target.id);
    });
});