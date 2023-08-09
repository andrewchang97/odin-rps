// pseudocode
// I will start by creating a choice of either rock, paper, or scissors
function getComputerChoice(){
    const options = ['Rock', 'Paper', 'Scissors']
    let computerChoice = Math.floor(Math.random() * options.length)
    if (computerChoice === 0){
        return choice = 'Rock';
    } else if (computerChoice === 1){
        return choice = 'Paper';
    } else if (computerChoice === 2){
        return choice = 'Scissors';
    } else{
        console.log("error in getComputerChoice")
    }
}
let playerScore = 0;
let computerScore = 0;
const buttonR = document.getElementById("buttonRock")
buttonR.addEventListener("click",function(){
    let playerSelect = "rock";
    const result = playRound(playerSelect);
    console.log(result);
});
const buttonP = document.getElementById("buttonPaper")
buttonP.addEventListener("click",function(){
    let playerSelect = "paper";
    const result = playRound(playerSelect);
    console.log(result);
});
const buttonS = document.getElementById("buttonScissors")
buttonS.addEventListener("click",function(){
    let playerSelect = "scissors";
    const result = playRound(playerSelect);
    console.log(result);
});
// Then, I will have players select either rock, paper, or scissors 
// (and it will not be case sensitive)
// Finally, it will return the outcome of the game, i.e. if they lost, "You lose!"

function playRound(playerSelect){
    const computerSelect = getComputerChoice();
    if (computerSelect === playerSelect){
    return `You both played ${playerSelect}. It's a tie!`;
    } else if (
    (computerSelect === 'Scissors' && playerSelect === "rock") ||
    (computerSelect === 'Rock' && playerSelect === "paper") ||
    (computerSelect === 'Paper' && playerSelect === "scissors")
    ) {
    return `Computer played ${computerSelect}. You played ${playerSelect}. You win!`;
    } else {
    return `Computer played ${computerSelect}. You played ${playerSelect}. You lose!`;
    }
}
// gonna try cleaning up the following code, above.
// function playRound(playerSelect){
//     const computerSelect = getComputerChoice();
//     if (computerSelect === 'Rock' && playerSelect === "ROCK"){
//     return "You both tied!";
//     } else if (computerSelect === 'Scissors' && playerSelect === "ROCK"){
//     return "You win!";
//     } else if (computerSelect === 'Paper' && playerSelect === "ROCK"){
//     return "You lose!";
//     } else if (computerSelect === 'Rock' && playerSelect === "PAPER"){
//     return "You win!";
//     } else if (computerSelect === 'Scissors' && playerSelect === "PAPER"){
//     return "You lose!";
//     } else if (computerSelect === 'Paper' && playerSelect === "PAPER"){
//     return "You both tied!";
//     } else if (computerSelect === 'Rock' && playerSelect === "SCISSORS"){
//     return "You lose!";
//     } else if (computerSelect === 'Scissors' && playerSelect === "SCISSORS"){
//     return "You both tied!";
//     } else if (computerSelect === 'Paper' && playerSelect === "SCISSORS"){
//     return "You win!";
//     } else{
//     return console.log("error in game")
//     }
// }
// After finishing a game, it will reroll the choice of rock, paper, or scissors.
// New function of game(), it will play a 5 round game that keeps score and reports
// a winner or loser at the end.