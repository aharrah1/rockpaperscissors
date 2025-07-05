console.log("Howdy");

const buttons = document.querySelectorAll(".button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    const computerScoreElement = document.querySelector(".computer-score");
    const userScoreElement = document.querySelector(".user-score");
    let currentComputerScore = parseInt(computerScoreElement.textContent);
    let currentUserScore = parseInt(userScoreElement.textContent);

    if (currentUserScore === 5 || currentComputerScore === 5) {
      alert("Game is over. Stop clicking that");
    } else {
      const computerChoice = getComputerChoice();
      const humanChoice = e.target.attributes.value.value;
      console.log(humanChoice);
      const result = playRound(humanChoice, computerChoice);
      if (result === "Computer Win") {
        let newScore = currentComputerScore + 1;
        if (newScore < 5) {
          computerScoreElement.textContent = newScore;
        } else {
          computerScoreElement.textContent = newScore;
          alert("You lose! Refresh to try again.");
        }
      } else if (result === "User Win") {
        let newScore = currentUserScore + 1;
        if (newScore < 5) {
          userScoreElement.textContent = newScore;
        } else {
          userScoreElement.textContent = newScore;
          alert("You win! Refresh to play again.");
        }
      } else {
        alert("Tie! Try again.");
      }
    }
  });
}

function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber <= 0.33) {
    return "rock";
  } else if (randomNumber > 0.33 && randomNumber <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(userSelection, computerSelection) {
  if (userSelection === computerSelection) {
    console.log("Tie!");
    return "Tie";
  } else if (userSelection === "rock" && computerSelection === "paper") {
    console.log("You lose! " + computerSelection + " beats " + userSelection);
    return "Computer Win";
  } else if (userSelection === "paper" && computerSelection === "scissors") {
    console.log("You lose! " + computerSelection + " beats " + userSelection);
    return "Computer Win";
  } else if (userSelection === "scissors" && computerSelection === "rock") {
    console.log("You lose! " + computerSelection + " beats " + userSelection);
    return "Computer Win";
  } else {
    console.log("You win! " + userSelection + " beats " + computerSelection);
    return "User Win";
  }
}
