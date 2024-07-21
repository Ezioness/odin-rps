console.log("Hello, world!");

let humanScore = 0;
let computerScore = 0;

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
            if the human wins, increment the human score
            if the computer wins, increment the computer score
        */
    let humanWin = true;
    let draw = false;

    switch(humanChoice) {
        case "rock":
            if (computerChoice === "paper") {
                humanWin = false;
                computerScore++;
            } else if (computerChoice === "scissors") {
                humanScore++;
            } else {
                draw = true;
            }
            break;
        case "paper":
            if (computerChoice === "scissors") {
                humanWin = false;
                computerScore++;
            } else if (computerChoice === "rock") {
                humanScore++;
            } else {
                draw = true;
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                humanWin = false;
                computerScore++;
            } else if (computerChoice === "paper") {
                humanScore++;
            } else {
                draw = true;
            }
            break;
        default:
            humanWin = false;
            break;
    }

    let winnerPhrase = "";
    const capitalizedHumanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1);
    const capitalizedComputerChoice = computerChoice[0].toUpperCase() + computerChoice.slice(1);
    if(!draw) {
        if(humanWin) {
            winnerPhrase = `You win! ${capitalizedHumanChoice} beats ${capitalizedComputerChoice}`;          
        } else {
            winnerPhrase = `You lose! ${capitalizedComputerChoice} beats ${capitalizedHumanChoice}`;  
        }
        console.log(winnerPhrase);
    } else {
        console.log("It's a draw !")
    }
    console.log("Human: " + humanScore)
    console.log("Computer: " + computerScore)
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);
