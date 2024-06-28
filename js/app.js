
/*-------------------------------- Constants --------------------------------*/
const choices = ['rock', 'paper', 'scissor'];
/*-------------------------------- Variables --------------------------------*/
let playerChoice;
let computerChoice;
let msg;

/*------------------------ Cached Element References ------------------------*/
const resultDisplay = document.getElementById('result-display');
/*-------------------------------- Functions --------------------------------*/
const resetGame = () => {
  playerChoice = null;
  computerChoice = null;
  msg = null;
  resultDisplay.textContent = '';  // Clear the display
}


const getPlayerChoice = (evt) => {
  playerChoice = evt.target.id
  console.log(`player choice: `,evt.target.id)
}
const getComputerChoice = () => {
  const randomIndex = (Math.floor(Math.random() * choices.length))
computerChoice = choices[randomIndex]
console.log(`computer choice: `, computerChoice)
}

const compare = () => {
  if (playerChoice === computerChoice) {
    msg = 'You Tied';
  } else if (playerChoice === choices[0] && computerChoice === choices[2]) {
    msg = 'You Win';
  } else if (playerChoice === choices[1] && computerChoice === choices[0]) {
    msg = 'You Win';
  } else if (playerChoice === choices[2] && computerChoice === choices[1]) {
    msg = 'You Win';
  } else {
    msg = 'You Lose!';
  }
}

const render = () => {
  resultDisplay.textContent = `You chose  ${playerChoice} and the computer chose ${computerChoice}, ${msg}`
}

const play = function(evt) {
  getPlayerChoice(evt)
  getComputerChoice()
  compare();
  render();
}

/*----------------------------- Event Listeners -----------------------------*/
document.querySelector('main').addEventListener('click', play)

document.getElementById('rock').addEventListener('click', play)
document.getElementById('paper').addEventListener('click', play)
document.getElementById('scissor').addEventListener('click', play)
document.getElementById('reset').addEventListener('click', resetGame)

// document.querySelectorAll('button').forEach(function(button) {
//   button.addEventListener('click', play)
// });
