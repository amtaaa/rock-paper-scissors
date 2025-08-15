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
const playerScoreElement = document.querySelector("#player-score");
const computerScoreElement = document.querySelector("#computer-score");
const currentWinnerElement = document.querySelector("#declare-current-winner");

playerScoreElement.addEventListener("score", function(e){
    humanScore++;
    playerScoreElement.textContent = `Player Score:${humanScore}`;
});

computerScoreElement.addEventListener("score", function(e){
    computerScore++;
    computerScoreElement.textContent = `Computer Score:${computerScore}`;
});

function playRound(humanChoice = getHumanChoice(), computerChoice = getComputerChoice()){
    const result = compareChoices(humanChoice, computerChoice);
    if(result == "Win"){
        currentWinnerElement.textContent = `You Win! ${humanChoice} Beats ${computerChoice}`;
        playerScoreElement.dispatchEvent(new CustomEvent("score"));
    }else if(result == "Loose"){
        currentWinnerElement.textContent = `You Loose! ${computerChoice} Beats ${humanChoice}`;
        computerScoreElement.dispatchEvent( new CustomEvent("score"));
    }else {
        currentWinnerElement.textContent = "Tie";
    }
}

const btns = document.querySelector(".buttons");
btns.addEventListener("click", function(e){
    playRound(humanChoice = e.target.textContent.toLowerCase());
});


