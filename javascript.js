console.log("Howdy");

function getComputerChoice() {
    const randomNumber = Math.random();
    if(randomNumber <= .33) {
        return "Rock"
    } else if (randomNumber > .33 && randomNumber <= .66) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function getHumanChoice(promptText) {
    let userChoice = prompt(promptText);
    let lowerCaseUserChoice = userChoice.toLowerCase()
    if (lowerCaseUserChoice === "rock") {
        return "Rock"
    } else if (lowerCaseUserChoice === "paper") {
        return "Paper"
    } else if (lowerCaseUserChoice === "scissors") {
        return "Scissors"
    } else {
        alert("reload and try again fuckwit")
    }
}

function playRound(userSelection,computerSelection) {
    if (userSelection === computerSelection) {
        console.log("Tie!");
        return "Tie"
    } else if (userSelection === "Rock" && computerSelection === "Paper") {
        console.log("You lose! " + computerSelection + " beats " + userSelection);
        return "Computer Win"
    } else if (userSelection === "Paper" && computerSelection === "Scissors") {
        console.log("You lose! " + computerSelection + " beats " + userSelection)
        return "Computer Win"
    } else if (userSelection === "Scissors" && computerSelection === "Rock") {
        console.log("You lose! " + computerSelection + " beats " + userSelection)
        return "Computer Win"
    } else {
        console.log("You win! " + userSelection + " beats " + computerSelection)
        return "User Win"
    }
}

let userScore = 0;
let computerScore = 0;

function playGame(numberOfRounds) {
    for (let i = 1; i <= numberOfRounds; i++) {
        let computerChoice = getComputerChoice();
        let userChoice = getHumanChoice("Enter Rock, Paper, or Scissors");
        console.log("User Choice: " +userChoice);
        let winner = playRound(userChoice, computerChoice);
        if (winner === "User Win") {
            userScore++
        } else if (winner === "Computer Win") {
            computerScore++
        } else {
            numberOfRounds++
        }
        if (i === numberOfRounds) {
            let victoryMessage;
            if (userScore > computerScore) {
                victoryMessage = "Congrats foo, you won. Final score: " + userScore + " to " + computerScore
            } else {
                victoryMessage = "You lost fucking idiot. Final score: " + userScore + " to " + computerScore
            }
            alert(victoryMessage)
        } else {
            console.log("Current Score: User - " + userScore + " Computer - " + computerScore);
            console.log("Current Round: " + i);
            console.log("Rounds Remaining: " + (numberOfRounds - i))
        }

    }
}


