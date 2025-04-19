const scoreInfo = document.querySelector("#scoreInfo");
const scoreMessage = document.querySelector("#scoreMessage");
const humanScorePara = document.querySelector("#humanScore");
const computerScorePara = document.querySelector("#computerScore");
const playerSign = document.querySelector("#playerSign");
const computerSign = document.querySelector("#computerSign");
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

let humanScore = 0;
let computerScore = 0;
let roundWinner = "";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function getComputerChoice() {
  const random = getRandomInt(3);
  switch (random) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}
const restartButton = document.querySelector(".restartBtn")

restartButton.addEventListener("click",() => location.reload())

function handleClick(humanChoice) {
  if (humanScore === 5 || computerScore === 5) return;

  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  updateChoices(humanChoice, computerChoice);
  updateScore();

  if (humanScore === 5 || computerScore === 5) 
  {
    restartButton.style.display = "block";
    const finalMessage = humanScore === 5 ? "🎉 You won the game!" : "💀 You lost the game!";
    scoreInfo.textContent = finalMessage;
  };
}

rockBtn.addEventListener("click",() => handleClick("rock"));
paperBtn.addEventListener("click",() => handleClick("paper"));
scissorsBtn.addEventListener("click",() => handleClick("scissors"))
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    roundWinner = "tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    roundWinner = "player";
  } else {
    computerScore++;
    roundWinner = "computer";
  }
  updateScoreMessage(roundWinner, humanChoice, computerChoice);
}

function updateScoreMessage(winner, humanChoice, computerChoice) {
  if (winner === "player") {
    scoreMessage.textContent = `${capitalizeFirstLetter(
      humanChoice
    )} beats ${computerChoice.toLowerCase()}`;
    return;
  }
  if (winner === "computer") {
    scoreMessage.textContent = `${capitalizeFirstLetter(
      humanChoice
    )} is beaten by ${computerChoice.toLowerCase()}`;
    return;
  }

  scoreMessage.textContent = `${capitalizeFirstLetter(
    humanChoice
  )} ties with ${computerChoice.toLowerCase()}`;
}


function updateChoices(humanChoice, computerChoice) {
  switch (humanChoice) {
    case "rock":
      playerSign.textContent = "✊";
      break;
    case "paper":
      playerSign.textContent = "✋";
      break;
    case "scissors":
      playerSign.textContent = "✌";
      break;
  }

  switch (computerChoice) {
    case "rock":
      computerSign.textContent = "✊";
      break;
    case "paper":
      computerSign.textContent = "✋";
      break;
    case "scissors":
      computerSign.textContent = "✌";
      break;
  }
}

function updateScore()
{
  if (roundWinner === 'tie') {
    scoreInfo.textContent = "It's a tie!"
  } else if (roundWinner === 'player') {
    scoreInfo.textContent = 'You won!'
  } else if (roundWinner === 'computer') {
    scoreInfo.textContent = 'You lost!'
  }
  humanScorePara.textContent = `Player: ${humanScore}`
  computerScorePara.textContent = `Computer: ${computerScore}`
}

