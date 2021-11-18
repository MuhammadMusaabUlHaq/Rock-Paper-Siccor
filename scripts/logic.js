choices = ['Scissors', 'Rock', 'Paper']
let playerScore = 0
let computerScore = 0

function randomValueFromArray(array) {
    const random = Math.floor(Math.random()*array.length)
    return array[random]
}

function computerPlay() {
    return randomValueFromArray(choices).toLowerCase()
}

function playerSelection() {
    let playerChoice = prompt('Rock, Paper, Scissors?').toLowerCase()
    return playerChoice
}


function move(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        displayResults(`Tie game!\n ${computerSelection} tries to beat ${playerSelection}`);
      } else if (whoWon(computerSelection,playerSelection) == false) {
        computerScore = ++computerScore;
        computerMotivatedResults(computerSelection,playerSelection)
      } else if(whoWon(computerSelection,playerSelection) == true) {
        playerScore = ++playerScore;
        playerMotivatedResults(computerSelection,playerSelection)
      }
      else {
        alert('invalid option. Did you type it correctly? (eg scissors, not scissor)')
      }
    }

/**returns true if its player, false if its not player */
function whoWon(computerSelection,playerSelection) {
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
    ){
    return true /**Player won */
  }else if(
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock")
  ){
    return false /**Computer won */
  }
}

/**a function which does motivational quotes on the number of wins */
function computerMotivatedResults(computerSelection,playerSelection) {
  if (computerScore === 1) {
    displayResults(
      `Oh no! You lost.
      ${computerSelection} beats ${playerSelection}.`
    );
  } else if (computerScore === 2) {
    displayResults(
      `Arghh. ${(
        computerSelection
      )} beats ${playerSelection}. Give it another shot!`
    );
  } else if (computerScore === 3) {
    displayResults(
      `${(
        computerSelection
      )} beats ${playerSelection}. It's ok. You got this!!`
    );
  } else if (computerScore === 4) {
    displayResults(
      `Oh no. It's match point!! ${(
        computerSelection
      )} beats ${playerSelection}. Don't let us down!`
    );
  } else {
    displayResults(`${computerSelection} beats ${playerSelection}`);
  }
}

function playerMotivatedResults(computerSelection,playerSelection) {
  if (playerScore === 1) {
    displayResults(
      `Lets go!!! You won.
      ${playerSelection} beats ${computerSelection}.`
    );
  } else if (playerScore === 2) {
    displayResults(
      `You're pretty good at this. ${
        playerSelection
      } beats ${computerSelection}.`
    );
  } else if (playerScore === 3) {
    displayResults(
      `${
        playerSelection
      } beats ${computerSelection}! Has mankind found its savior??`
    );
  } else if (playerScore === 4) {
    displayResults(
      `${
        playerSelection
      } beats ${computerSelection}. One more and you're a hero!`
    );
  } else {
    displayResults(`${playerSelection} beats ${computerSelection}`);
  }
}

function displayResults(string) {
    alert(string)
}



const scissorButton = document.querySelector('#scissor')
const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')

/**Add event listeners and style changing */
function changingStylesAndSelect(btnElement) {
  btnElement.addEventListener('click', (e)=>{
    changeStyle(e.target)    
  })
}
changingStylesAndSelect(scissorButton)
changingStylesAndSelect(paperButton)
changingStylesAndSelect(rockButton)

function changeStyle(element) {
  if (element.innerText == 'Rock') {
    paperButton.classList.remove('target')
    scissorButton.classList.remove('target')
    rockButton.classList.add('target')
  } else if (element.innerText == 'Paper'){
    rockButton.classList.remove('target')
    scissorButton.classList.remove('target')
    paperButton.classList.add('target')
  }
  else{
    rockButton.classList.remove('target')
    paperButton.classList.remove('target')
    scissorButton.classList.add('target')
  }
}


/**
 *Add event listener to play button and finally play the game
 *connect logs with its desired output
 */