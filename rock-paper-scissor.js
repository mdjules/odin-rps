
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

function getHumanChoice () {
   let humanChoice = prompt("Choose rock, paper, or scissors: ").toLowerCase();
   if (humanChoice == "rock") {
    return "Rock"
   } else if(humanChoice == "paper") {
    return "Paper"
   } else if (humanChoice == "scissors") {
    return "Scissors"
   }
    
};

function playRound (humanChoice, computerChoice) {
    let lowerCaseHumanChoice = humanChoice.toLowerCase();
    if (lowerCaseHumanChoice == "rock" && computerChoice == "Scissors") {
        console.log("You win! Rock beats scissors!");
        humanScore = ++humanScore;
    }
    else if (lowerCaseHumanChoice == "paper" && computerChoice == "Rock") {
        console.log("You win! Paper beats rock!");
        humanScore = ++humanScore;
    }
    else if (lowerCaseHumanChoice == "scissors" && computerChoice == "Paper") {
        console.log("You win! Scissors beats paper!");
        humanScore = ++humanScore;
    }
    else if (lowerCaseHumanChoice == computerChoice.toLowerCase()) {
        console.log("Draw! Go again!");
    }
    else {
        console.log("You lose! Computer chose " + computerChoice + ". " + computerChoice + " beats " + humanChoice);
        computerScore = ++computerScore
    }
};

counter = 0

function playGame () {
    while (counter < 6) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("Human score is: " + humanScore);
    console.log("Computer score is: " + computerScore);
    ++counter;
    }

    if (humanScore > computerScore) {
        console.log("Congrats you beat the computer!");
    }
        else {
            console.log("The computer beat you...better luck next time.");
        };
    ;
};


playGame();
