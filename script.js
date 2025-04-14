function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function getComputerChoice()
{
    const random = getRandomInt(3)
    switch (random) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            break;
    }
}

function getHumanChoice() 
{
    const choice = window.prompt("Enter Rock,Paper or Scissors").toLowerCase();
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice)
{
    const capitalizedhumanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
    const capitalizedcomputerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

    if (humanChoice === computerChoice){
        console.log(`It's a tie! both selected ${capitalizedhumanChoice}`);
    } 
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ){
        humanScore++;
        console.log(`You Win This Round! ${capitalizedhumanChoice} Defeats ${capitalizedcomputerChoice}`);
    }
    else {
        computerScore++;
        console.log(`You lost this round. ${capitalizedcomputerChoice} Defeats ${capitalizedhumanChoice}`);
    }
}

function playGame()
{
    for (let i = 1; i <= 5; i++) {
        console.log(`\nRound ${i}`)
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    
    if (humanScore > computerScore) {
        console.log("You Win!")
    } else if (computerScore > humanScore) {
        console.log("The computer won.")
    } else {
        console.log("It's a tie!")
    }
}

playGame();
