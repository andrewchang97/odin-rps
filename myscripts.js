// pseudocode
// I will start by creating a choice of either rock, paper, or scissors

function getComputerChoice(){
    const options = ['Rock', 'Paper', 'Scissors']
    let computerChoice = Math.floor(Math.random() * options.length)
    console.log(computerChoice)
    if (computerChoice === 0){
        choice = 'Rock';
        console.log(`It chose ${choice}`);
    } else if (computerChoice === 1){
        choice = 'Paper';
        console.log(`It chose ${choice}`);
    } else if (computerChoice === 2){
        choice = 'Scissors';
        console.log(`It chose ${choice}`);
    } else{
        console.log("error in getComputerChoice")
    }
}
getComputerChoice();

// Then, I will have players select either rock, paper, or scissors 
console.log(`Hello! Welcome to "rock, paper, scissors. What would you like to choose?`)
playerChoice = "scISSORs"
function game(){
    if (choice === 'Rock' && playerChoice.toUpperCase() === "ROCK"){
    return console.log("You both tied! Select again.")
    } else if (choice === 'Scissors' && playerChoice.toUpperCase() === "ROCK"){
    return console.log("You win!")
    } else if (choice === 'Paper' && playerChoice.toUpperCase() === "ROCK"){
    return console.log("You lose!")
    } else if (choice === 'Rock' && playerChoice.toUpperCase() === "PAPER"){
    return console.log("You win!")
    } else if (choice === 'Scissors' && playerChoice.toUpperCase() === "PAPER"){
    return console.log("You lose!")
    } else if (choice === 'Paper' && playerChoice.toUpperCase() === "PAPER"){
    return console.log("You both tied! Select again.")
    } else if (choice === 'Rock' && playerChoice.toUpperCase() === "SCISSORS"){
    return console.log("You lose!")
    } else if (choice === 'Scissors' && playerChoice.toUpperCase() === "SCISSORS"){
    return console.log("You both tied! Select again.")
    } else if (choice === 'Paper' && playerChoice.toUpperCase() === "SCISSORS"){
    return console.log("You win!")
    } else{
    return console.log("error in game")
    }
}
game();
// (and it will not be case sensitive)
// Finally, it will return the outcome of the game, i.e. if they lost, "You lose!"
// After finishing a game, it will reroll the choice of rock, paper, or scissors.
// New function of game(), it will play a 5 round game that keeps score and reports
// a winner or loser at the end.