// pseudocode
// I will start by creating a choice of either rock, paper, or scissors
function getComputerChoice(){
    const options = ['Rock', 'Paper', 'Scissors']
    let computerChoice = Math.floor(Math.random() * options.length)
    if (computerChoice === 0){
        return choice = 'rock';
    } else if (computerChoice === 1){
        return choice = 'paper';
    } else if (computerChoice === 2){
        return choice = 'scissors';
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
    document.getElementById("result").textContent = `Computer played ${computerSelect}. You played ${playerSelect}. You tied! You have ${playerScore} points.`;
    return `You both played ${playerSelect}. It's a tie!`;
    } else if (
    (computerSelect === 'scissors' && playerSelect === "rock") ||
    (computerSelect === 'rock' && playerSelect === "paper") ||
    (computerSelect === 'paper' && playerSelect === "scissors")
    ) {
    playerScore++;
    document.getElementById("playerScore").textContent = "Player Score: " + playerScore;
    document.getElementById("result").textContent = `Computer played ${computerSelect}. You played ${playerSelect}. You win! You have ${playerScore} points.`;
    if (playerScore === 5){
        document.getElementById("result").textContent = `Congratulations! You are the winner with ${playerScore} points. Refresh to play again!`;
        disableButtons();
    }
    return `Computer played ${computerSelect}. You played ${playerSelect}. You win! You have ${playerScore} points.`;
    } else {
    computerScore++;
    document.getElementById("computerScore").textContent = "Computer Score: " + computerScore;
    document.getElementById("result").textContent = `Computer played ${computerSelect}. You played ${playerSelect}. You lose! Computer has ${computerScore} points.`;
    if (computerScore === 5){
        document.getElementById("result").textContent = `Computer wins with ${computerScore} points. Refresh to play again!`;
        disableButtons();
    }
    return `Computer played ${computerSelect}. You played ${playerSelect}. You lose! Computer has ${computerScore} points.`;
    }
function disableButtons() {
    buttonR.disabled = true;
    buttonP.disabled = true;
    buttonS.disabled = true;
}
}
// After finishing a game, it will reroll the choice of rock, paper, or scissors.
// New function of game(), it will play a 5 round game that keeps score and reports
// a winner or loser at the end.