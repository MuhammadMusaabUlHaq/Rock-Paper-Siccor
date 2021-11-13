choices = ['Scissor', 'Rock', 'Paper']
playerGrid = [[-1,-1,-1],
              [-1,-1,-1],
              [-1,-1,-1]]
function randomValueFromArray(array) {
    const random = Math.floor(Math.random()*array.length)
    return array[random]
}

function computerPlay() {
    return randomValueFromArray(choices)
}

function playerSelection() {
    let playerChoice = prompt('Rock, Paper, Scissor?').toLowerCase
    return playerChoice
}

function move(playerSelection, computerSelection) {
    
}

function errorCheck(array) {
    let error = 'Restart the game'
    if (array.length !== 3){
        return error
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i].length !== 3){
            return error
        }
    }
}

/**
 * Case 1 : Criss Cross
 * Case 2 : straight line
 * if [0][0], [1][1], [2][2] same, then that thing won
 * if [0][2], [1][1], [2][0] same, then that thing won
 */