const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset')
const playTo = document.querySelector('#playTo')
const playerWon = document.querySelector('#playerWon')

let winningScore = 3;
let isGameOver = false;

function checkScores() {
        //if p1 score is winning score AND opp score is not winning score - 1, game is over
        if (winningScoreReached() && winBy2()) {
            isGameOver = true
            p1.button.disabled = true
            p2.button.disabled = true
            if (p1.score > p2.score) {
                p1.display.classList.add('has-text-success')
                p2.display.classList.add('has-text-danger')
                playerWon.textContent = 'Player 1 won!'
            } else if (p2.score > p1.score) {
                p2.display.classList.add('has-text-success')
                p1.display.classList.add('has-text-danger')
                playerWon.textContent = 'Player 2 won!'
            }
        }
}

function winningScoreReached() {
    //check if p1 score >= winning score OR p2 score >= winning score, return true
    if (p1.score >= winningScore || p2.score >= winningScore) {
        console.log('test true')
        return true 
    } else {
        console.log('test false')
        return false
    }
}

//get the diff between scores and make sure diff is by 2
function winBy2() {
    let diff = p1.score - p2.score
    if (diff > 1 || diff < -1) {
        return true
    } else {
        return false
    }
}

p1.button.addEventListener('click', function() {
    p1.score++
    p1.display.textContent = p1.score
    checkScores()
})

p2.button.addEventListener('click', function() {
    p2.score++
    p2.display.textContent = p2.score
    checkScores()
})

playTo.addEventListener('change', function() {
    winningScore = parseInt(this.value) // changes from string to number
    reset() // executing callback here
})

resetButton.addEventListener('click', reset) //passing it here

function reset() {
    isGameOver = false
    for (let p of [p1, p2]) {
        p.score = 0
        p.display.textContent = 0
        p.display.classList.remove('has-text-success', 'has-text-danger')
        p.button.disabled = false
    }
}
