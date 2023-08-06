function computerPlay() {
  const randomNumber = Math.random();
  if (randomNumber < 0.33) {
    return 'Rock';
  } else if (randomNumber < 0.66) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

function playRound(userInput) {
  computerInput = computerPlay();
  console.log(`computer chose ${computerInput}`);
  switch(computerInput.toLowerCase()) {
    case 'rock':
      if(userInput === 'paper'){
        return 'You Win!';
      } else if(userInput === 'scissors') {
        return 'You Lose!';
      } else {
        return 'draw'
      }
    case 'paper':
      if(userInput === 'rock') {
        return 'You Lose!';
      } else if(userInput === 'scissors') {
        return 'You Win!';
      } else {
        return 'draw';
      }
    case 'scissors':
      if(userInput === 'rock') {
        return 'You Win!';
      } else if(userInput === 'paper') {
        return 'You Lose!';
      } else {
        return 'draw';
      }
  }
}

function playerPlay() {
  let playerSelection = prompt("Enter 'Rock', 'Paper', or 'Scissors'");

  // Check if the player canceled the prompt (null)
  if (playerSelection === null) {
    return null; // Return null to indicate the player canceled the input
  }

  playerSelection = playerSelection.trim().toLowerCase();
  
  while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
    playerSelection = prompt("Invalid choice. Please enter 'Rock', 'Paper', or 'Scissors'");
    if (playerSelection === null) {
      return null; // Return null to indicate the player canceled the input
    }
    playerSelection = playerSelection.trim().toLowerCase();
  }
  
  return playerSelection;
}

function game() {
  // Prompt to describe the game
  const welcomeMessage = "Welcome to the Rock, Paper, Scissors game! \nYou will play against the computer. The first to win 3 rounds out of 5 wins the game.";
  alert(welcomeMessage);

  let playAgain = true;

  while (playAgain) {
    let playerScore = 0;
    let computerScore = 0;
    let draw = 0;

    for (let i = 0; i < 5; i++) {
      let playerSelection = playerPlay();

      // Check if the player canceled the prompt (null)
      if (playerSelection === null) {
        alert("You canceled the game.");
        return; // Exit the game function
      }

      console.log(`You chose ${playerSelection}`);
      const computerSelection = computerPlay();
      const roundResult = playRound(playerSelection, computerSelection);
      console.log(roundResult);

      if (roundResult.startsWith("You Win!")) {
        playerScore++;
      } else if (roundResult.startsWith("You Lose!")) {
        computerScore++;
      } else {
        draw++;
      }
    }

    console.log("Game Over!");
    console.log(`Final Scores: You: ${playerScore} | Computer: ${computerScore} | Draw: ${draw}`);

    // Ask the user if they want to play again
    const playAgainInput = prompt("Do you want to play again? (yes/no)").trim().toLowerCase();
    playAgain = playAgainInput === "yes";
  }

  // If the player chooses not to play again
  prompt("Thank you for playing! See you next time.");
}

game();