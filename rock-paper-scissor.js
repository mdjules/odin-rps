
let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let computerChoice = Math.random();
    if (computerChoice < 0.33) {
        return "Rock";
    } 
    else if (computerChoice >= 0.33 && computerChoice < 0.66){
        return "Paper"
    }
    else {
        return "Scissors"
    }

};


function playRound (humanChoice, computerChoice) {
    
    if (humanChoice == "Rock" && computerChoice == "Scissors") {
        //console.log("You win! Rock beats scissors!");
        let roundOutcome = document.querySelector("#roundOutcome");
        roundOutcome.textContent = "You win! Rock beats scissors!";
        humanScore = ++humanScore;
    }
    else if (humanChoice == "Paper" && computerChoice == "Rock") {
        //console.log("You win! Paper beats rock!");
        let roundOutcome = document.querySelector("#roundOutcome");
        roundOutcome.textContent = "You win! Paper beats rock!";
        humanScore = ++humanScore;
       
        
    }
    else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        //console.log("You win! Scissors beats paper!");
        let roundOutcome = document.querySelector("#roundOutcome");
        roundOutcome.textContent = "You win! Scissors beats paper!";
        humanScore = ++humanScore;
    }
    else if (humanChoice == computerChoice) {
        //console.log("Draw! Go again!");
        let roundOutcome = document.querySelector("#roundOutcome");
        roundOutcome.textContent = "Draw! Go again!";
    }
    else {
        //console.log("You lose! Computer chose " + computerChoice + ". " + computerChoice + " beats " + humanChoice);
        let roundOutcome = document.querySelector("#roundOutcome");
        roundOutcome.textContent = "You lose! Computer chose " + computerChoice + ". " + computerChoice + " beats " + humanChoice;
        computerScore = ++computerScore;
    };
        updateDisplayedScore();
        checkForWinner();
    
    };

//rock button event listener uses playRound() as callback function

const rockBtn = document.querySelector("#rockBtn");

rockBtn.addEventListener("click", function() {
    playRound("Rock", getComputerChoice())
});

//paper button event listener uses playRound() as callback function

const paperBtn = document.querySelector("#paperBtn");

paperBtn.addEventListener("click", function() {
    playRound("Paper", getComputerChoice())
});

//scissors button event listener uses playRound() as callback function

const scissorsBtn = document.querySelector("#scissorsBtn");

scissorsBtn.addEventListener("click", function() {
    playRound("Scissors", getComputerChoice())
});

const scoreTable = document.querySelector("#scoreTable");

scoreTable.textContent = "Score Table:";

//display human score on html
let humanDisplayedScore = document.querySelector("#humanDisplayedScore");

humanDisplayedScore.textContent = `Player Score: ${humanScore}`;

//display computerScore score on html
let computerDisplayedScore = document.querySelector("#computerDisplayedScore")

computerDisplayedScore.textContent = `Computer Score: ${computerScore}`;

//display roundOutcome on html
let roundOutcome = document.querySelector("#roundOutcome");
roundOutcome.textContent = "The score is 0-0.";

function displayRoundOutcome() {
    let roundOutcome = document.querySelector("#roundOutcome");
    roundOutcome.textContent = "The score is 0-0.";
}

//function to update the score each time playRound is called (whenever the buttons are clicked)
function updateDisplayedScore() {
    let humanDisplayedScore = document.querySelector("#humanDisplayedScore");
    humanDisplayedScore.textContent = `Player Score: ${humanScore}`;

    let computerDisplayedScore = document.querySelector("#computerDisplayedScore");
    computerDisplayedScore.textContent = `Computer Score: ${computerScore}`;
}

//intro message
let winner = document.querySelector("#winner");
winner.textContent = "Welcome to Rock, Paper, Scissors! See if you can beat the computer!"

function checkForWinner() {

    if (humanScore == 5) {
        let winner = document.querySelector("#winner");
        winner.textContent = "You beat the computer!!! Click the Reset Game button below to start another game!";
    }
    else if (computerScore == 5) {
        let winner = document.querySelector("#winner");
        winner.textContent = "The computer beat you! Click the Reset Game button below to start another game!";
    }
    else {
        let winner = document.querySelector("#winner");
        winner.textContent = "Make a choice...First one to 5 wins!!";
    }
}

//function to reset the game. Triggered when user clicks the reset button

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    updateDisplayedScore();
    let winner = document.querySelector("#winner");
    winner.textContent = "Welcome to Rock, Paper, Scissors! See if you can beat the computer!";

    let roundOutcome = document.querySelector("#roundOutcome");
    roundOutcome.textContent = "The score is 0-0."

};

let resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", function() {
    resetGame()
});

//playRound();
