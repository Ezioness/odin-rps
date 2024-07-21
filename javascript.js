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

let getHumanChoice = () => {
    /*
        get the user input with a prompt
        checks whether the input is valid or not
        returns that input or a default value
    */
   let humanChoice = prompt("Rock, paper or scissors ?").toLowerCase();

   if(humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors") {
    humanChoice = "invalid";
   }

   return humanChoice;
}

let playRound = (humanChoice, computerChoice) => {
        /*
            compare the two parameters according to the rps rules
            if the human wins, return 1
            if the computer wins, return -1
            if it's a draw, return 0
        */
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
    
    return humanWin;
}

let playGame = () => {
    /*
        loops 5 times to play 5 rounds
    */
    let humanScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        const humanWin = playRound(humanChoice, computerChoice);

        let winnerPhrase = "";
        const capitalizedHumanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1);
        const capitalizedComputerChoice = computerChoice[0].toUpperCase() + computerChoice.slice(1);

        switch(humanWin) {
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
    }

    console.log();

    if (humanScore > computerScore) {
        console.log("You win !");
    } else if (humanScore < computerScore){
        console.log("You lose !");
    } else {
        console.log("Draw !")
    }
    console.log("Scores: ");
    console.log(`\t- Human: ${humanScore}`);
    console.log(`\t- Computer: ${computerScore}`);
}

playGame();