function getComputerChoice() {
  const r = Math.random();
  if (r < 1 / 3) return "rock";
  if (r < 2 / 3) return "paper";
  return "scissors";
}

function getHumanChoice() {
  return prompt("enter your choice").toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    console.log(`Human: ${humanChoice} | Computer: ${computerChoice}`);
    if (humanChoice === computerChoice) {
      return "It's a tie!";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      return "You win! Rock beats Scissors";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      return "You win! Paper beats Rock";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      return "You win! Scissors beats Paper";
    } else {
      computerScore++;
      return "You lose! Better luck next time.";
    }
  }
  for (let i = 0; i < 5; i++) {
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log(
      `Human Score: ${humanScore} | Computer Score: ${computerScore}`,
    );
  }

  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (humanScore < computerScore) {
    console.log("You lost the game!");
  } else {
    console.log("The Match was tie");
  }
}

playGame();
