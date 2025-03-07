
let computerChoice = Math.random();

function getComputerChoice () {
    if (computerChoice < 0.33) {
        return "Rock";
    } 
    else if (computerChoice >= 0.33 && computerChoice < 0.66)
        {return "Paper"

        }
    else {
        return "Scissors"
    }

};

console.log(getComputerChoice());

console.log(computerChoice);