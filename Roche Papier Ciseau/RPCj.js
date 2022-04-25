/*Variables*/
var cPlayer = 0
var cComp = 10
var healthLeft = 100
var healthRight = 100
var damageSound = new Audio()
damageSound.src = ("oof.mp3")

/*Rick Roll*/
document.getElementById("iVs").onclick = function () {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
}

/*Selection Number*/
function pSelect() {
    cPlayer = 1
    document.getElementById("ilPaper").style.border = "3px solid white"
    document.getElementById("ilScissors").style.border = "none"
    document.getElementById("ilRock").style.border = "none"
    console.log(cPlayer)
}

function sSelect() {
    cPlayer = 2
    document.getElementById("ilScissors").style.border = "3px solid white"
    document.getElementById("ilPaper").style.border = "none"
    document.getElementById("ilRock").style.border = "none"
    console.log(cPlayer)
}

function rSelect() {
    cPlayer = 3
    document.getElementById("ilRock").style.border = "3px solid white"
    document.getElementById("ilScissors").style.border = "none"
    document.getElementById("ilPaper").style.border = "none"
    console.log(cPlayer)
}

/*Computer number generator and the rest of the code*/
function fight() {
    var cComp = Math.ceil(Math.random() * 3)
    console.log(cComp)

    /*Timeout for removing the computer's selection*/ 
    setTimeout(function () {
        document.getElementById("irPaper").style.border = "none"
        document.getElementById("irScissors").style.border = "none"
        document.getElementById("irRock").style.border = "none"
    }, 1500)

    /*Conditions for Paper*/ 
    if (cPlayer == 1) {
        if (cComp == 1) {
            document.getElementById("mTie").style.opacity = "1"
            document.getElementById("irPaper").style.border = "3px solid white"
            document.getElementById("irScissors").style.border = "none"
            document.getElementById("irRock").style.border = "none"

            document.getElementById("mWin").style.opacity = "0"
            document.getElementById("mLose").style.opacity = "0"

        }

        if (cComp == 2) {
            document.getElementById("mLose").style.opacity = "1"
            document.getElementById("irScissors").style.border = "3px solid white"
            document.getElementById("irPaper").style.border = "none"
            document.getElementById("irRock").style.border = "none"

            document.getElementById("mTie").style.opacity = "0"
            document.getElementById("mWin").style.opacity = "0"

            /*Health Lost For Player*/ 
            healthLeft -= 20
            document.getElementById("hLeft").style.backgroundColor = "hsl(" + healthLeft + ",100%, 40%)"
            document.getElementById("hLeft").style.transform = "scaleY(" + healthLeft / 100 + ")"

            if (healthLeft <= 0) {
                document.getElementById("mDefeat").style.opacity = "1"
                document.getElementById("bFight").remove()
                damageSound.play()
                setTimeout(function () {
                    window.location.reload(false)
                    document.getElementById("mTie").style.opacity = "0"
                    document.getElementById("mLose").style.opacity = "0"
                    document.getElementById("mWin").style.opacity = "0"
                }, 2000)

            }

        }

        if (cComp == 3) {
            document.getElementById("mWin").style.opacity = "1"
            document.getElementById("irRock").style.border = "3px solid white"
            document.getElementById("irScissors").style.border = "none"
            document.getElementById("irPaper").style.border = "none"

            document.getElementById("mTie").style.opacity = "0"
            document.getElementById("mLose").style.opacity = "0"

            /*Health Lost For Computer*/ 
            healthRight -= 20
            document.getElementById("hRight").style.backgroundColor = "hsl(" + healthRight + ",100%, 40%)"
            document.getElementById("hRight").style.transform = "scaleY(" + healthRight / 100 + ")"

            if (healthRight <= 0) {
                document.getElementById("mVictory").style.opacity = "1"
                document.getElementById("bFight").remove()
                setTimeout(function () {
                    window.location.reload(false)
                    document.getElementById("mTie").style.opacity = "0"
                    document.getElementById("mLose").style.opacity = "0"
                    document.getElementById("mWin").style.opacity = "0"
                }, 2000)

            }

        }

    }

    /*Condition for Scissors*/
    if (cPlayer == 2) {
        if (cComp == 1) {
            document.getElementById("mWin").style.opacity = "1"
            document.getElementById("irPaper").style.border = "3px solid white"
            document.getElementById("irScissors").style.border = "none"
            document.getElementById("irRock").style.border = "none"

            document.getElementById("mTie").style.opacity = "0"
            document.getElementById("mLose").style.opacity = "0"

            /*Health Lost For Computer*/
            healthRight -= 20
            document.getElementById("hRight").style.backgroundColor = "hsl(" + healthRight + ",100%, 40%)"
            document.getElementById("hRight").style.transform = "scaleY(" + healthRight / 100 + ")"

            if (healthRight <= 0) {
                document.getElementById("mVictory").style.opacity = "1"
                document.getElementById("bFight").remove()
                setTimeout(function () {
                    window.location.reload(false)
                    document.getElementById("mTie").style.opacity = "0"
                    document.getElementById("mLose").style.opacity = "0"
                    document.getElementById("mWin").style.opacity = "0"
                }, 2000)

            }
        }

        if (cComp == 2) {
            document.getElementById("mTie").style.opacity = "1"
            document.getElementById("irScissors").style.border = "3px solid white"
            document.getElementById("irPaper").style.border = "none"
            document.getElementById("irRock").style.border = "none"

            document.getElementById("mWin").style.opacity = "0"
            document.getElementById("mLose").style.opacity = "0"
        }

        if (cComp == 3) {
            document.getElementById("mLose").style.opacity = "1"
            document.getElementById("irRock").style.border = "3px solid white"
            document.getElementById("irScissors").style.border = "none"
            document.getElementById("irPaper").style.border = "none"

            document.getElementById("mTie").style.opacity = "0"
            document.getElementById("mWin").style.opacity = "0"

            /*Health Lost For Player*/
            healthLeft -= 20
            document.getElementById("hLeft").style.backgroundColor = "hsl(" + healthLeft + ",100%, 40%)"
            document.getElementById("hLeft").style.transform = "scaleY(" + healthLeft / 100 + ")"

            if (healthLeft <= 0) {
                document.getElementById("mDefeat").style.opacity = "1"
                document.getElementById("bFight").remove()
                damageSound.play()
                setTimeout(function () {
                    window.location.reload(false)
                    document.getElementById("mTie").style.opacity = "0"
                    document.getElementById("mLose").style.opacity = "0"
                    document.getElementById("mWin").style.opacity = "0"
                }, 2000)
            }

        }

    }

    /*Condition for Rock*/
    if (cPlayer == 3) {
        if (cComp == 1) {
            document.getElementById("mLose").style.opacity = "1"
            document.getElementById("irPaper").style.border = "3px solid white"
            document.getElementById("irScissors").style.border = "none"
            document.getElementById("irRock").style.border = "none"

            document.getElementById("mTie").style.opacity = "0"
            document.getElementById("mWin").style.opacity = "0"

            /*Health Lost For Player*/
            healthLeft -= 20
            document.getElementById("hLeft").style.backgroundColor = "hsl(" + healthLeft + ",100%, 40%)"
            document.getElementById("hLeft").style.transform = "scaleY(" + healthLeft / 100 + ")"

            if (healthLeft <= 0) {
                document.getElementById("mDefeat").style.opacity = "1"
                document.getElementById("bFight").remove()
                damageSound.play()
                setTimeout(function () {
                    window.location.reload(false)
                    document.getElementById("mTie").style.opacity = "0"
                    document.getElementById("mLose").style.opacity = "0"
                    document.getElementById("mWin").style.opacity = "0"
                }, 2000)
            }

        }

        if (cComp == 2) {
            document.getElementById("mWin").style.opacity = "1"
            document.getElementById("irScissors").style.border = "3px solid white"
            document.getElementById("irPaper").style.border = "none"
            document.getElementById("irRock").style.border = "none"

            document.getElementById("mTie").style.opacity = "0"
            document.getElementById("mLose").style.opacity = "0"

            /*Health Lost For Computer*/
            healthRight -= 20
            document.getElementById("hRight").style.backgroundColor = "hsl(" + healthRight + ",100%, 40%)"
            document.getElementById("hRight").style.transform = "scaleY(" + healthRight / 100 + ")"

            if (healthRight <= 0) {
                document.getElementById("mVictory").style.opacity = "1"
                document.getElementById("bFight").remove()
                setTimeout(function () {
                    window.location.reload(false)
                    document.getElementById("mTie").style.opacity = "0"
                    document.getElementById("mLose").style.opacity = "0"
                    document.getElementById("mWin").style.opacity = "0"
                }, 2000)

            }
        }

        if (cComp == 3) {
            document.getElementById("mTie").style.opacity = "1"
            document.getElementById("irRock").style.border = "3px solid white"
            document.getElementById("irScissors").style.border = "none"
            document.getElementById("irPaper").style.border = "none"

            document.getElementById("mWin").style.opacity = "0"
            document.getElementById("mLose").style.opacity = "0"
        }

    }

}

