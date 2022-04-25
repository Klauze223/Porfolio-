canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")
canvas.style.backgroundColor = "rgb(7, 9, 78)"
document.body.appendChild(canvas)
canvas.style.border = "solid white"
canvas.width = window.innerWidth - 20
canvas.height = window.innerHeight - 30


//Sounds
var winSound = new Audio("game_sound/Victory sound effect.mp3")
var rWallSound = new Audio("game_sound/Taco Bell Bong SFX.mp3")
var deathSound = new Audio("game_sound/oof.mp3")
var musicGenshin = new Audio("game_sound/Liyue Genshin Impact.mp3")


//Images
var titleImage = new Image()
titleImage.src = "game_image/Title image.png"

var lavaImage = new Image()
lavaImage.src = "game_image/Lava image.jpg"


//Win screen
var win = false

function winT() {
    var text = "You win."

    ctx.font = "150px Helvetica"
    ctx.fillStyle = "#186E14"
    ctx.fillText(text, canvas.width / 2 - ctx.measureText(text).width / 2, canvas.height / 2)

    winSound.play()

    if (menu == false) {

        canvas.addEventListener("click", function () {
            win = false
            menu = true
            ctx.clearRect(0, 0, canvas.width, canvas.height)

        })
    }

}


//Make player appear
var player = {
    x: 10,
    y: 80,
    w: 30,
    h: 30,
    color: "orange",
    speed: 10,

}

function drawPlayer() {
    ctx.fillStyle = player.color
    ctx.fillRect(player.x, player.y, player.w, player.h)

}

//Health
var healthBar = {
    x: canvas.width - 240,
    y: 10,
    w: 200,
    h: 10,
    color: "pink"


}

function drawHealthBar() {
    ctx.fillStyle = healthBar.color
    ctx.fillRect(healthBar.x, healthBar.y, healthBar.w, healthBar.h)

}

//Shield
var shieldBar = {
    x: canvas.width - 240,
    y: 10,
    w: 0,
    h: 10,

}

function drawShieldBar() {
    ctx.fillStyle = "rgba(70, 133, 228, 0.7)"
    ctx.fillRect(shieldBar.x, shieldBar.y, shieldBar.w, shieldBar.h)

}

function drawStats() {
    ctx.font = "25px Arial"

    var health = healthBar.w
    ctx.fillText("Health: " + health, canvas.width - 200, 50)

    var shield = shieldBar.w
    ctx.fillText("Shield: " + shield, canvas.width - 200, 75)

}

//End point, goal
var goal = {
    x: 10,
    y: canvas.height - 350,
    w: 30,
    h: 180,
    color: "red"
}

function drawGoal() {
    ctx.fillStyle = goal.color
    ctx.fillRect(goal.x, goal.y, goal.w, goal.h)



    if (collision(player, goal)) {

        player.x = 10
        player.y = 50

        win = true
        console.log(level)

    }

}


//Pads
function Pad(x, y, w, h, color) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.color = color

    this.draw = function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)

    }

}

//Pads
var speedP1L1 = new Pad(canvas.width / 4 - 75, 1, 20, 200, "blue")
var speedP2L1 = new Pad(260, 220, 20, 200, "blue")
var speedP3L1 = new Pad(canvas.width / 2 - 160, 620, 20, 180, "blue")

var slowP1L1 = new Pad(canvas.width / 1.4, 1, 20, 200, "green")
var slowP2L1 = new Pad(660, 220, 20, 200, "green")
var slowP3L1 = new Pad(canvas.width / 4, 620, 20, 180, "green")
var slowP4L1 = new Pad(canvas.width / 2 + 200, 620, 20, 180, "green")

var resetP1L1 = new Pad(canvas.width / 2 - 75, 1, 20, 200, "yellow")
var resetP2L1 = new Pad(canvas.width / 1.1, 220, 20, 200, "yellow")
var resetP3L1 = new Pad(80, 420, 20, 200, "yellow")

var respawnP1L1 = new Pad(0, 200, canvas.width, 20, "purple")
var respawnP2L1 = new Pad(0, 400, canvas.width - 80, 20, "purple")
var respawnP3L1 = new Pad(0, 600, canvas.width, 20, "purple")

var damageP1L1 = new Pad(canvas.width / 2 - 75, 420, 150, 180, "pink")
var damageP2L1 = new Pad(canvas.width / 2 + 280, 620, 570, 180, "pink")
var damageP3L1 = new Pad(canvas.width / 2, 620, 200, 180, "pink")

var healP1L1 = new Pad(canvas.width / 1.4, 485, 150, 50, "cyan")
var healP2L1 = new Pad(canvas.width / 2 + 200, 620, 80, 180, "cyan")

var shieldP1L1 = new Pad(canvas.width / 4 - 75, 485, 150, 50, "magenta")
var shieldP2L1 = new Pad(canvas.width - 100, 620, 20, 180, "magenta")

var infoPadP1L1 = new Pad(resetP2L1.x - 500, 220, 500, 180, "rgb(7, 9, 78)")
var infoPadP2L1 = new Pad(damageP1L1.x - 200, 420, 200, 180, "rgb(7, 9, 78)")
var infoPadP3L1 = new Pad(healP1L1.x - 200, 420, 200, 180, "rgb(7, 9, 78)")
var infoPadP4L1 = new Pad(shieldP1L1.x - 200, 420, 200, 180, "rgb(7, 9, 78)")

var infoPadP5L1 = new Pad(speedP1L1.x - 200, 0, 200, 200, "rgb(7, 9, 78)")
var infoPadP6L1 = new Pad(resetP1L1.x - 200, 0, 200, 200, "rgb(7, 9, 78)")
var infoPadP7L1 = new Pad(slowP1L1.x - 200, 0, 200, 200, "rgb(7, 9, 78)")

var infoPadP8L1 = new Pad(canvas.width - 200, respawnP1L1.y - 200, 300, 200, "rgb(7, 9, 78)")

//Walls
function Wall(x, y, w, h, color) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.color = color

    this.draw = function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)

    }

}

function ResetWall(x, y, w, h, color, speed) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.color = color
    this.speed = speed
    this.draw = function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)

        if (this.y < 220 || this.y + this.h > 400) {
            this.speed = -this.speed

        }

        this.y += this.speed

    }

}

function ResetWall2(x, y, w, h, color, speed) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.color = color
    this.speed = speed
    this.draw = function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)

        if (this.y < 420 || this.y + this.h > 600) {
            this.speed = -this.speed

        }

        this.y += this.speed

    }

}

function ResetWall3(x, y, w, h, color, speed) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.color = color
    this.speed = speed
    this.draw = function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)

        if (this.y < 620 || this.y + this.h > 800) {
            this.speed = -this.speed

        }

        this.y += this.speed

    }

}

//Level 1 walls
var wall1L1 = new Wall(0, 200, canvas.width - 80, 20, "gray")
var wall2L1 = new Wall(80, 400, canvas.width, 20, "gray")
var wall3L1 = new Wall(0, 600, canvas.width - 80, 20, "gray")

var rWallP2L1 = new ResetWall(600, 230, 20, 70, "red", 3)
var rWallP3L1 = new ResetWall(1000, 230, 20, 70, "red", 2)
var rWallP4L1 = new ResetWall(200, 230, 20, 110, "red", 2)

var rWallP5L1 = new ResetWall2(canvas.width / 1.1, 430, 20, 130, "red", 1)

var rWallP6L1 = new ResetWall3(canvas.width / 1.3, 630, 20, 100, "red", 1)
var rWallP7L1 = new ResetWall3(canvas.width / 2, 630, 20, 90, "red", 1.7)
var rWallP8L1 = new ResetWall3(canvas.width / 10, 650, 600, 20, "red", 2)

//Draw levels
var level = 0
/*var win = false
 
function levels() {
    win = true
 
    if (level++) {
        win = false
 
    }
 
}*/

function drawWalls() {

    if (level == 0) {
        wall1L1.draw()
        wall2L1.draw()
        wall3L1.draw()

        wallCollision(player, wall1L1)
        wallCollision(player, wall2L1)
        wallCollision(player, wall3L1)

    }

}

function drawSpeedPad() {
    if (level == 0) {
        speedP1L1.draw()
        speedP2L1.draw()
        speedP3L1.draw()

        speedPadCollisionT(speedP1L1, player)
        speedPadCollisionT(speedP2L1, player)
        speedPadCollisionT(speedP3L1, player)

    }

}

function drawSlowPad() {
    if (level == 0) {
        slowP1L1.draw()
        slowP2L1.draw()
        slowP3L1.draw()
        slowP4L1.draw()

        slowPadCollisionT(slowP1L1, player)
        slowPadCollisionT(slowP2L1, player)
        slowPadCollisionT(slowP3L1, player)
        slowPadCollisionT(slowP4L1, player)

    }

}

function drawResetSpeedPad() {
    if (level == 0) {
        resetP1L1.draw()
        resetP2L1.draw()
        resetP3L1.draw()

        resetSpeedPadCollisionT(resetP1L1, player)
        resetSpeedPadCollisionN(resetP2L1, player)
        resetSpeedPadCollisionN(resetP3L1, player)
    }

}


function drawRespawnPad() {
    if (level == 0) {

        respawnP1L1.draw()
        respawnP2L1.draw()
        respawnP3L1.draw()

        respawnPadCollisionT(respawnP1L1, player)
        respawnPadCollisionT(respawnP2L1, player)
        respawnPadCollisionT(respawnP3L1, player)

    }

}

function drawResetWall() {
    if (level == 0) {
        rWallP2L1.draw()
        rWallP3L1.draw()
        rWallP4L1.draw()

        rWallP5L1.draw()

        rWallP6L1.draw()
        rWallP7L1.draw()
        rWallP8L1.draw()

        resetPadCollisionT(rWallP2L1, player)
        resetPadCollisionT(rWallP3L1, player)
        resetPadCollisionT(rWallP4L1, player)

        resetPadCollisionT(rWallP5L1, player)

        resetPadCollisionT(rWallP6L1, player)
        resetPadCollisionT(rWallP7L1, player)
        resetPadCollisionT(rWallP8L1, player)

    }

}

function drawInfoPad() {
    if (level == 0) {
        infoPadP1L1.draw()
        infoPadP2L1.draw()
        infoPadP3L1.draw()
        infoPadP4L1.draw()

        infoPadP5L1.draw()
        infoPadP6L1.draw()
        infoPadP7L1.draw()

        infoPadP8L1.draw()

        infoPadCollisionT1(infoPadP1L1, player)
        infoPadCollisionT2(infoPadP2L1, player)
        infoPadCollisionT3(infoPadP3L1, player)
        infoPadCollisionT4(infoPadP4L1, player)
        infoPadCollisionT5(infoPadP5L1, player)
        infoPadCollisionT6(infoPadP6L1, player)
        infoPadCollisionT7(infoPadP7L1, player)
        infoPadCollisionT8(infoPadP8L1, player)

    }

}

function drawDamagePad() {
    if (level == 0) {
        ctx.drawImage(lavaImage, canvas.width / 2 - 75, 420, 150, 180)
        ctx.drawImage(lavaImage, canvas.width / 2 + 280, 620, 570, 180)
        ctx.drawImage(lavaImage, canvas.width / 2, 620, 200, 180)

        damagePadCollision(damageP1L1, player)
        damagePadCollision(damageP2L1, player)
        damagePadCollision(damageP3L1, player)

    }

}

function drawHealPad() {
    if (level == 0) {
        healP1L1.draw()
        healP2L1.draw()

        healPadCollision(healP1L1, player)
        healPadCollision(healP2L1, player)

    }

}

function drawShieldPad() {
    if (level == 0) {
        shieldP1L1.draw()
        shieldP2L1.draw()

        shieldPadCollision(shieldP1L1, player)
        shieldPadCollision(shieldP2L1, player)


    }

}


//Collision
function collision(a, b) {
    if (a.x + a.w > b.x &&
        a.x < b.x + b.w &&
        a.y < b.y + b.h &&
        a.y + a.h > b.y) {

        return (true)
    }

}

function wallCollision(j, c) {
    if (collision(j, c)) {
        if (37 in keyDown || 39 in keyDown) {
            if (j.x < c.x + c.w / 2) {
                j.x -= j.speed
            } else {
                j.x += j.speed
            }
        }

        if (38 in keyDown || 40 in keyDown) {
            if (j.y < c.y + c.h / 2) {
                j.y -= j.speed;
            } else {
                j.y += j.speed;
            }
        }
    }
}

function speedPadCollisionT(a, b) {
    if (collision(a, b)) {
        player.speed = 15

    }

}

function slowPadCollisionT(a, b) {
    if (collision(a, b)) {
        player.speed = 5

    }

}

function resetSpeedPadCollisionT(a, b) {
    if (collision(a, b)) {
        player.speed = 10

    }

}

function respawnPadCollisionT(a, b) {
    if (collision(a, b)) {

    }

}

var respawnP = 0

function respawnPadCollisions() {
    if (collision(player, respawnP1L1)) {
        respawnP = 1
    }

    if (collision(player, respawnP2L1)) {
        respawnP = 2
    }

    if (collision(player, respawnP3L1)) {
        respawnP = 3
    }

}

function resetPadCollisionT(a, b) {
    if (collision(a, b)) {
        rWallSound.play()

        if (respawnP == 0) {
            player.x = 10
            player.y = 80

            healthBar.w = 200

        }


        if (respawnP == 1) {
            player.x = canvas.width - 30
            player.y = 290

            healthBar.w = 200

        }

        if (respawnP == 2) {
            player.x = 10
            player.y = 500

            healthBar.w = 200

        }

        if (respawnP == 3) {
            player.x = canvas.width - 30
            player.y = 690

            healthBar.w = 200

        }


    }

}


function infoPadCollisionT1(a, b) {
    if (collision(a, b)) {
        var text = "These pads in front resets your position back to your respawn point"

        ctx.fillStyle = "red"
        ctx.fillText(text, canvas.width / 2 - ctx.measureText(text).width / 2, 30)
        ctx.font = "25px Arial"

    }

}

function infoPadCollisionT2(a, b) {
    if (collision(a, b)) {
        var text = "This is a damage pad. It removes 1 health and 2 shield per tick. You die from it."

        ctx.fillStyle = "red"
        ctx.fillText(text, canvas.width / 2 - ctx.measureText(text).width / 2, 30)
        ctx.font = "25px Arial"

    }

}

function infoPadCollisionT3(a, b) {
    if (collision(a, b)) {
        var text = "This is a healing pad. It heals 0.5 health per tick"

        ctx.fillStyle = "red"
        ctx.fillText(text, canvas.width / 2 - ctx.measureText(text).width / 2, 30)
        ctx.font = "25px Arial"

    }

}

function infoPadCollisionT4(a, b) {
    if (collision(a, b)) {
        var text = "This pad gives you 200 shield"

        ctx.fillStyle = "red"
        ctx.fillText(text, canvas.width / 2 - ctx.measureText(text).width / 2, 30)
        ctx.font = "25px Arial"

    }

}

function infoPadCollisionT5(a, b) {
    if (collision(a, b)) {
        var text = "This is a speed pad, it gives you 5 extra speed."

        ctx.fillStyle = "red"
        ctx.fillText(text, canvas.width / 2 - ctx.measureText(text).width / 2, 30)
        ctx.font = "25px Arial"

    }

}

function infoPadCollisionT6(a, b) {
    if (collision(a, b)) {
        var text = "This is a neutral pad, it resets to the default speed of 10."

        ctx.fillStyle = "red"
        ctx.fillText(text, canvas.width / 2 - ctx.measureText(text).width / 2, 30)
        ctx.font = "25px Arial"

    }

}

function infoPadCollisionT7(a, b) {
    if (collision(a, b)) {
        var text = "This is a slow pad, it removes 5 speed."

        ctx.fillStyle = "red"
        ctx.fillText(text, canvas.width / 2 - ctx.measureText(text).width / 2, 30)
        ctx.font = "25px Arial"

    }

}

function infoPadCollisionT8(a, b) {
    if (collision(a, b)) {
        var text = "This is a respawn pad, it respawns you here if you die."

        ctx.fillStyle = "red"
        ctx.fillText(text, canvas.width / 2 - ctx.measureText(text).width / 2, 30)
        ctx.font = "25px Arial"

    }

}

//Level part
function resetSpeedPadCollisionN(a, b) {
    if (collision(a, b)) {
        player.speed = 10

    }

}

function damagePadCollision(a, b) {
    if (collision(a, b)) {
        if (shieldBar.w > 0) {
            shieldBar.w -= 2

        }

        else {
            healthBar.w -= 1

            if (healthBar.w == 0 || healthBar.w < 0) {
                deathSound.play()

                player.x = 10
                player.y = 80

                healthBar.w = + 200

            }
        }

    }

}

function healPadCollision(a, b) {
    if (collision(a, b)) {
        if (healthBar.w < 200) {
            healthBar.w += 0.5

        }

    }

}

function shieldPadCollision(a, b) {
    if (collision(a, b)) {
        shieldBar.w = 200

    }

}


//Make player move
var keyDown = {}

function keyboard() {

    if (37 in keyDown && player.x > 0) {
        player.x -= player.speed

    }

    if (38 in keyDown && player.y > 0) {
        player.y -= player.speed

    }


    if (39 in keyDown && player.x < canvas.width - player.w) {
        player.x += player.speed

    }


    if (40 in keyDown && player.y < canvas.height - player.h) {
        player.y += player.speed

    }



}


document.addEventListener("keydown", function (e) {
    keyDown[e.keyCode] = true
    //console.log(keyDown)

})

document.addEventListener("keyup", function (e) {
    delete keyDown[e.keyCode]
    //console.log(keyDown)

})

var menu = true

function showMenu() {

    var text = 'Play'
    var text2 = '(Click anywhere to start)'

    ctx.font = "50px Arial"
    ctx.fillStyle = "white"
    ctx.fillText(text, canvas.width / 2 - ctx.measureText(text).width / 2, canvas.height / 1.5)

    ctx.font = "20px Arial"
    ctx.fillStyle = "white"
    ctx.fillText(text2, canvas.width / 2 - ctx.measureText(text2).width / 2, canvas.height / 1.4)



    canvas.addEventListener("click", function () {
        menu = false

    })

}


//Activate game
function game() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    musicGenshin.play()

    if (menu == true) {
        showMenu()
        ctx.drawImage(titleImage, canvas.width / 2 - 350, 0, 700, 500)
        healthBar.w = 200

    }

    if (menu == false) {
        if (win == false) {
            drawDamagePad()
            drawShieldPad()
            drawHealPad()
            drawSpeedPad()
            drawSlowPad()
            drawResetSpeedPad()
            drawRespawnPad()
            drawResetWall()
            drawInfoPad()

            respawnPadCollisions()

            drawPlayer()
            keyboard()

            drawWalls()
            drawGoal()

            drawStats()
            drawHealthBar()
            drawShieldBar()

        }

        if (win == true) {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            winT()

            musicGenshin.pause()

        }

        /*if (win == true) {
            levels()
 
            console.log(level)
 
        }*/

    }

    requestAnimationFrame(game)
}

game()