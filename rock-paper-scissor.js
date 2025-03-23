
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

//unnessary code. The buttons now serve as the function for getting humanc choice

/*function getHumanChoice () {
   let humanChoice = prompt("Choose rock, paper, or scissors: ").toLowerCase();
   if (humanChoice == "rock") {
    return "Rock"
   } else if(humanChoice == "paper") {
    return "Paper"
   } else if (humanChoice == "scissors") {
    return "Scissors"
   }
    
};*/

function playRound (humanChoice, computerChoice) {
    if (humanChoice == "Rock" && computerChoice == "Scissors") {
        console.log("You win! Rock beats scissors!");
        humanScore = ++humanScore;
    }
    else if (humanChoice == "Paper" && computerChoice == "Rock") {
        console.log("You win! Paper beats rock!");
        humanScore = ++humanScore;
    }
    else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        console.log("You win! Scissors beats paper!");
        humanScore = ++humanScore;
    }
    else if (humanChoice == computerChoice) {
        console.log("Draw! Go again!");
    }
    else {
        console.log("You lose! Computer chose " + computerChoice + ". " + computerChoice + " beats " + humanChoice);
        computerScore = ++computerScore
    }
};

//counter = 0

function playGame () {
    //while (counter < 6) {
    //let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("Human score is: " + humanScore);
    console.log("Computer score is: " + computerScore);
    //++counter;
    //}

    if (humanScore > computerScore) {
        console.log("Congrats you beat the computer!");
    }
        else {
            console.log("The computer beat you...better luck next time.");
        };
    ;
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

//playGame();

//playRound();
