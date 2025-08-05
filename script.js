function getComputerChoice(){
    return ["rock", "paper", "scissors"][Math.floor(Math.random()*3)];
}

function getHumanChoice(){
    return prompt('What is your input?').toLowerCase();
}

function compareChoices(humanChoice, computerChoice){
    if(humanChoice == computerChoice){
        return "Tie";
    }
    if (humanChoice == "paper"){
        if(computerChoice == "rock"){
            return "Win";
        } else {
            return "Loose";
        }
    }
    if (humanChoice == "rock"){
        if (computerChoice == "scissors"){
            return "Win";
        } else {
            return "Loose";
        }
    }
    if (humanChoice == "scissors"){
        if (computerChoice == "paper"){
            return "Win";
        } else {
            return "Loose";
        }
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()){
    const result = compareChoices(humanChoice, computerChoice);
    if(result == "Win"){
        console.log(`You Win! ${humanChoice} Beats ${computerChoice}`);
        humanScore++;
    }else if(result == "Loose"){
        console.log(`You Loose! ${computerChoice} Beats ${humanChoice}`);
        computerScore++
    }else {
        console.log("Tie");
    }
}

function playGame(){
    for(let i = 0 ; i < 5 ; i++){
        playRound();
    }
    if(humanScore == computerScore) {
        console.log("Game Over - Tie..")
    }
    if(humanScore > computerScore){
        console.log("You Won The Game!");
    }
    else {
        console.log("You Lost the Game!");
    }
}

playGame()
