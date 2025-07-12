function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  return choice[randomIndex];
}

function getHumanChoice() {
  let input = prompt("Enter your choice (rock, paper, scissors):");
  if (!input) return null;

  input = input.trim().toLowerCase();
  if (["rock", "paper", "scissors"].includes(input)) {
    return input;
  } else {
    alert("Don't be a smartass, please enter a valid choice");
    return getHumanChoice();
  }
}

let humanScore = 0,
  computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Close Call >_<, It's a tie!!!");
  } else if (
    (humanChoice.toLowerCase() == "rock" && computerChoice == "scissors") ||
    (humanChoice.toLowerCase() == "scissors" && computerChoice == "paper") ||
    (humanChoice.toLowerCase() == "paper" && computerChoice == "rock")
  ) {
    console.log(`You chose ${humanChoice}, computer chose ${computerChoice}`);
    console.log("It's a win for you, Hurrray!!!");
    humanScore++;
  } else {
    console.log(`You chose ${humanChoice}, computer chose ${computerChoice}`);
    console.log("You lost, (┬┬﹏┬┬)");
    computerScore++;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}`);

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    console.log(
      `Current Score:
      YOU:- ${humanScore}; COMPUTER:- ${computerScore}`
    );
  }
  let input = prompt("Want to play again? (y for yes, n for no)");

  if (input && input.toLowerCase() === "y") {
    humanScore = 0;
    computerScore = 0;
    playGame();
  }
}

playGame();
