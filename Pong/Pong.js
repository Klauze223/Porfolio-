var canvas = document.getElementById("screen")
var c = canvas.getContext("2d")


var ballDefaultSpeed = 5
var padAiSpeed = 5


var ball = {
    x: 30,
    y: 30,
    r: 20,
    dx: ballDefaultSpeed,
    dy: ballDefaultSpeed,

}

var padHuman = {
    x: 50,
    y: canvas.width - 10,
    w: 20,
    h: 150,

}

var padAi = {
    x: window.innerWidth - 50,
    y: canvas.width + 10,
    w: 20,
    h: 150,

}


var scoreHuman = 0
var scoreAi = 0

var gameOver = false
var win = false
var menu = true

var collisionPadSound = new Audio("Sons/Bonk Sound Effect.mp3")
var collisionWallSound = new Audio("Sons/Taco Bell Bong SFX.mp3")
var pointSound = new Audio("Sons/Super Mario Bros.-Coin Sound Effect.mp3")
var winSound = new Audio("Sons/Victory Sound Effect.mp3")
var loseSound = new Audio("Sons/oof.mp3")




//Difficulty buttons
document.getElementById("easy").onclick = function () {
    padAiSpeed = 4.1

}

document.getElementById("normal").onclick = function () {
    padAiSpeed = 5

}

document.getElementById("impossible").onclick = function () {
    padAiSpeed = 6

}


//Resize padAi with screen
resizePadAi()
window.addEventListener('resize', resizePadAi)

function resizePadAi() {
    padAi.x = window.innerWidth - 100

}

//Make canvas resize with screen
resizeScreen()
window.addEventListener('resize', resizeScreen)

function resizeScreen() {
    c.canvas.width = window.innerWidth
    c.canvas.height = window.innerHeight
}




//Make the ball move
function drawBall() {
    c.beginPath()
    c.arc(ball.x, ball.y, ball.r, Math.PI * 2, false)

    c.fillStyle = "#FF1800"
    c.fill()

    //collision top and bottom of screen
    if (ball.y < ball.r || ball.y > canvas.height - ball.r) {
        ball.dy = - ball.dy

        collisionWallSound.play()
    }

    //lose condition
    if (ball.x + ball.r < 40) {

        resetBall()
        scoreAi++

        setTimeout(function () {
            ball.dx = ballDefaultSpeed
            ball.dy = ballDefaultSpeed
        }, 1000)

        pointSound.play()
    }


    //win condition
    if (ball.x + ball.r > canvas.width) {

        resetBall()
        scoreHuman++

        setTimeout(function () {
            ball.dx = ballDefaultSpeed
            ball.dy = ballDefaultSpeed
        }, 1000)

        pointSound.play()

    }

    ball.x += ball.dx
    ball.y += ball.dy

}

//Put the ball in a random place on a gain of point
function resetBall() {

    ball.y = Math.random() * canvas.height
    ball.x = canvas.width / 2

    ball.dy = 0
    ball.dx = 0
}




//Make the pad controlled by the user appear
function drawPadHuman() {
    c.fillStyle = "blue"
    c.fillRect(padHuman.x, padHuman.y, padHuman.w, padHuman.h)
}

//Make the pad controlled by the Ai appear
function drawPadAi() {
    c.fillStyle = "blue"
    c.fillRect(padAi.x, padAi.y, padAi.w, padAi.h)
}

//Collison of the human pad
function collisionHuman() {
    if (ball.x + ball.r > padHuman.x &&
        ball.x - ball.r < padHuman.x + padHuman.w &&
        ball.y + ball.r > padHuman.y &&
        ball.y + ball.r < padHuman.y + padHuman.h) {

        ball.dx -= 0.4
        ball.dx = - ball.dx

        collisionPadSound.play()

    }


}

//Collision of the AI pad
function collisionAi() {
    if (ball.x + ball.r > padAi.x &&
        ball.x - ball.r < padAi.x + padAi.w &&
        ball.y + ball.r > padAi.y &&
        ball.y + ball.r < padAi.y + padAi.h) {

        ball.dx += 0.4
        ball.dx = - ball.dx

        collisionPadSound.play()

    }

}

//Human controlled pad following mouse 
canvas.addEventListener("mousemove", mouse)

function mouse(e) {

    if (e.offsetY < canvas.height - padHuman.h) {
        padHuman.y = e.offsetY

    }

    else {
        padHuman.y = canvas.height - padHuman.h

    }

}

//Ai pad movement
function aiPadMove() {

    if (ball.y > padAi.y + 75) {
        padAi.y += padAiSpeed

    }

    if (ball.y < padAi.y + 75) {
        padAi.y -= padAiSpeed

    }

}




//Points for the user
function pointsHuman() {
    c.font = "25px Arial"
    c.textAlign = "left"
    c.fillStyle = "#0A44A6"
    c.fillText(scoreHuman, 30, 30)

    if (scoreHuman == 5) {
        win = true

    }


}

//Points for the AI
function pointsAi() {
    c.font = "25px Arial"
    c.textAlign = "right"
    c.fillStyle = "#0A44A6"
    c.fillText(scoreAi, canvas.width - 30, 30)

    if (scoreAi == 5) {
        gameOver = true

    }

}




//Starting menu
function showMenu() {
    c.font = "45px Arial"
    c.textAlign = "center"
    c.fillStyle = "white"
    c.fillText("PONG", canvas.width / 2, canvas.height / 9)

    c.fillStyle = "red"
    c.fillText("Click anywhere to start", canvas.width / 2, canvas.height / 2)

    ball.y = Math.random() * canvas.height
    ball.x = canvas.width / 2

    document.getElementById("easy").hidden = false
    document.getElementById("normal").hidden = false
    document.getElementById("impossible").hidden = false


    canvas.addEventListener("click", function () {
        menu = false
        scoreHuman = 0
        scoreAi = 0
        document.getElementById("easy").hidden = true
        document.getElementById("normal").hidden = true
        document.getElementById("impossible").hidden = true
    })

}

//Lose menu
function aiWin() {
    c.font = "150px Helvetica"
    c.textAlign = "center"
    c.fillStyle = "#C80E00"
    c.fillText("Game Over", canvas.width / 2, canvas.height / 2)
    c.fillText(scoreAi, canvas.width / 2, canvas.height / 5)

    loseSound.play()

    if (menu == false) {

        canvas.addEventListener("click", function () {
            gameOver = false
            menu = true
            c.clearRect(0, 0, canvas.width, canvas.height)

        })
    }

}

//Win menu
function humanWin() {
    c.font = "150px Helvetica"
    c.textAlign = "center"
    c.fillStyle = "#186E14"
    c.fillText("You Win", canvas.width / 2, canvas.height / 2)
    c.fillText(scoreHuman, canvas.width / 2, canvas.height / 5)

    winSound.play()

    if (menu == false) {

        canvas.addEventListener("click", function () {
            win = false
            menu = true
            c.clearRect(0, 0, canvas.width, canvas.height)

        })
    }

}

//Draw line in middle
function drawLine() {
    c.strokeStyle = "white"
    c.lineWidth = 5
    c.setLineDash([10, 4])
    c.beginPath()
    c.moveTo(canvas.width / 2, 0)
    c.lineTo(canvas.width / 2, canvas.height)
    c.stroke()
}





//Execute game
function game() {

    if (menu == true) {
        showMenu()
    }


    if (menu == false) {
        c.clearRect(0, 0, canvas.width, canvas.height)
        document.body.style.cursor = "none"
        collisionHuman()
        collisionAi()
        pointsHuman()
        pointsAi()
        aiPadMove()
        drawLine()


        if (gameOver || win == false) {
            drawBall()
            drawPadHuman()
            drawPadAi()
        }

    }

    if (gameOver == true) {
        c.clearRect(0, 0, canvas.width, canvas.height)

        document.body.style.cursor = "default"
        loseSound.play()

        aiWin()

        ball.x = canvas.width / 2
        ball.y = canvas.height / 2
    }

    if (win == true) {
        c.clearRect(0, 0, canvas.width, canvas.height)

        document.body.style.cursor = "default"
        winSound.play()

        humanWin()

        ball.x = canvas.width / 2
        ball.y = canvas.height / 2
    }

    requestAnimationFrame(game)


}

game()