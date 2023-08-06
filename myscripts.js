// pseudocode
// I will start by creating a choice of either rock, paper, or scissors

function getComputerChoice(){
    const options = ['Rock', 'Paper', 'Scissors']
    let computerChoice = Math.floor(Math.random() * options.length)
    // console.log(computerChoice)
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
// Then, I will have players select either rock, paper, or scissors 
// (and it will not be case sensitive)
// Finally, it will return the outcome of the game, i.e. if they lost, "You lose!"
// console.log(`Hello! Welcome to "rock, paper, scissors. What would you like to choose?`)
// playerChoice = "scISSORs"
let i = 0;
let j = 0;
function game(){
    if (choice === 'Rock' && playerChoice.toUpperCase() === "ROCK"){
    return console.log("You both tied!")
    } else if (choice === 'Scissors' && playerChoice.toUpperCase() === "ROCK"){
    return console.log("You win!"), i++;
    } else if (choice === 'Paper' && playerChoice.toUpperCase() === "ROCK"){
    return console.log("You lose!"), j++;
    } else if (choice === 'Rock' && playerChoice.toUpperCase() === "PAPER"){
    return console.log("You win!"), i++;
    } else if (choice === 'Scissors' && playerChoice.toUpperCase() === "PAPER"){
    return console.log("You lose!"), j++;
    } else if (choice === 'Paper' && playerChoice.toUpperCase() === "PAPER"){
    return console.log("You both tied!")
    } else if (choice === 'Rock' && playerChoice.toUpperCase() === "SCISSORS"){
    return console.log("You lose!"), j++;
    } else if (choice === 'Scissors' && playerChoice.toUpperCase() === "SCISSORS"){
    return console.log("You both tied!")
    } else if (choice === 'Paper' && playerChoice.toUpperCase() === "SCISSORS"){
    return console.log("You win!"), i++;
    } else{
    return console.log("error in game")
    }
}
// game();
function gameCheck(){
    let answers = prompt("Welcome to rock, paper, scissors! Please enter each option, separated by a comma and no spaces(i.e. rock,paper,scissors,etc.) to play a 5 round game.")
    // console.log(answers);
    playerAnswers = answers.toUpperCase();
    convertAnswers = playerAnswers.split(",")
    // console.log(convertAnswers)
    if (convertAnswers.length === 5){
        gameOfFive(convertAnswers, computerAnswers1);
    } else if (convertAnswers.length > 5){
        console.log("Too many inputs!")
    } else if (convertAnswers.length < 5){
        console.log("Too few answers!")
    }
}
computerAnswers1 = getComputerChoice();
gameCheck();

function gameOne(){
    getComputerChoice();
    playerChoice = gameOnePerson;
    game();
}
function gameTwo(){
    getComputerChoice();
    playerChoice = gameTwoPerson;
    game();
}
function gameThree(){
    getComputerChoice();
    playerChoice = gameThreePerson;
    game();
}
function gameFour(){
    getComputerChoice();
    playerChoice = gameFourPerson;
    game();
}
function gameFive(){
    getComputerChoice();
    playerChoice = gameFivePerson;
    game();
}
function gameOfFive(){
    // console.log(convertAnswers);
    gameOnePerson = convertAnswers[0];
    // console.log(gameOnePerson)
    gameTwoPerson = convertAnswers[1];
    // console.log(gameTwoPerson)
    gameThreePerson = convertAnswers[2];
    // console.log(gameThreePerson)
    gameFourPerson = convertAnswers[3];
    // console.log(gameFourPerson)
    gameFivePerson = convertAnswers[4];
    // console.log(gameFivePerson)
    gameOne();
    gameTwo();
    gameThree();
    gameFour();
    gameFive();
if (i > j){
    console.log("You won more rounds. You win the game!")
} else if (i < j){
    console.log("You lost more rounds. The computer wins!")
} else if (i === j){
    console.log("It was a tie game!")
}
}
// After finishing a game, it will reroll the choice of rock, paper, or scissors.
// New function of game(), it will play a 5 round game that keeps score and reports
// a winner or loser at the end.