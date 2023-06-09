const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 4, 7],
    [2, 5, 8],
    [0, 1, 2],
    [2, 4, 6],

]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningmessage')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
let circleTurn

startGame();

function startGame() {
    circleTurn = false
    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick, { once: true })
    })
    setBoardHoverClass();
}

function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    placeMark(cell, currentClass)
    if (checkWin(currentClass)) {
       console.log('winner');
       endGame(false)
    }

    swapTurns()
    setBoardHoverClass()
}

function endGame(draw) {
    if (draw) {
          document.querySelector('.winning-message').innerHTML = `${circleTurn ? "O's" : "X's"} Wins!`
          document.getElementById('winningmessage').classList.add('show')
    } else {
         
   

    }
    
}


function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurns() {
    circleTurn = !circleTurn
}

function setBoardHoverClass() {
    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)
    if (circleTurn) {
        board.classList.add(X_CLASS)
    } else {
        board.classList.add(CIRCLE_CLASS)
      
    }
}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}

