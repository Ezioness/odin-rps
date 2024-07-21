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

console.log(getComputerChoice())