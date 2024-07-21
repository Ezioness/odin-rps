console.log("Hello, world!")

let getComputerChoice = () => {
    /*
        get a random number from 0 to 2
        use a switch statement to check that number
        return the move choosen from the switch statement
    */
    const randomNumber = Math.floor(Math.random() * 3)
    let move = ""
    switch(randomNumber) {
        case 0:
            move = "rock"
            break
        case 1:
            move = "paper"
            break
        case 2:
            move = "scissors"
            break
    }

    return move
}


let getHumanChoice = () => {
    /*
        get the user input with a prompt
        checks whether the input is valid or not
        returns that input or a default value
    */
   let humanChoice = prompt("Rock, paper or scissors ?").toLowerCase()

   if(humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors") {
    humanChoice = "invalid"
   }
   
   return humanChoice
}

console.log(getHumanChoice())
console.log(getComputerChoice())