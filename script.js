const choices = ["rock", "paper", "scissors"]
const playerDisplay = document.getElementById("playerDisplay")
const computerDisplay = document.getElementById("computerDisplay")
const resultDisplay = document.getElementById("resultDisplay")
const winsDisplay = document.getElementById("winsDisplay")
const lossesDisplay = document.getElementById("lossesDisplay")
let wins = 0;
let losses = 0;

let result = "";

function playGame(playerChoice){

  const computerChoice = choices[Math.floor(Math.random() * 3)]
  
  if(playerChoice === computerChoice){
    result = "IT'S A TIE!"
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.classList.remove("redText")
    resultDisplay.classList.remove("greenText")
    resultDisplay.classList.add("tieText")
    resultDisplay.textContent = result;
    return;
  }
  else{
      switch(playerChoice){
          case "rock":
         result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!" 
           break;
          case "paper":
         result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!" 
           break;
          case "scissors":
         result =  (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!"   
           break;
      }
  

  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
  resultDisplay.textContent = result;
  }

  switch(result){
      case "YOU WIN!":
      wins += 1;
       resultDisplay.classList.remove("redText")
       resultDisplay.classList.remove("tieText")
      resultDisplay.classList.add("greenText")

winsDisplay.textContent = `Wins: ${wins}`
      break;
      case "YOU LOSE!":
      losses += 1;
      resultDisplay.classList.remove("greenText")
      resultDisplay.classList.remove("tieText")
      resultDisplay.classList.add("redText")
      
lossesDisplay.textContent = `LOSSES: ${losses}`;
      break;
  }
}