var number = Math.round(Math.random()*100)
console.log(number)
var widthHealth
var numberOfTries = 0

var damageSound = new Audio()
damageSound.src = ("oof.mp3")

var musicSweden = new Audio()
musicSweden.src = ("sweden.mp3")
musicSweden.play()


function start(){
	musicSweden.play()
}

function stop(){
	musicSweden.pause();
   	musicSweden.currentTime = 0;
}

function pause(){
	musicSweden.pause();
}


function normal(){
	widthHealth  = 1000
	document.getElementById("vie").style.width = widthHealth
	console.log(widthHealth)
}

function hard(){
	widthHealth = 200
	document.getElementById("vie").style.width = widthHealth + "px"	
	console.log(widthHealth)
}


function check(){
    
    var userInput = document.getElementById("num").value

	
	if (userInput==""){
		document.getElementById("text").innerHTML = "Entrer un chiffre"
        document.getElementById("text").style.color = "red"
		console.log(widthHealth)
		}
		
    else if (userInput>100){
		document.getElementById("text").innerHTML = "Entrer un chiffre entre 1 et 100"
        document.getElementById("text").style.color = "red"
		console.log(widthHealth)
		}
		
	else if (userInput<1){
		document.getElementById("text").innerHTML = "Entrer un chiffre entre 1 et 100"
        document.getElementById("text").style.color = "red"
		console.log(widthHealth)
		}
			
    else if (number==userInput){
        document.getElementById("text").innerHTML = "Bonne réponse, tu as gagné!"
        document.getElementById("text").style.color = "green"
		
		numberOfTries = numberOfTries + 1
		document.getElementById("numOfTries").innerHTML = "Nombre d'essais " + numberOfTries 
    }

    else if (number<userInput){
        document.getElementById("text").innerHTML = "Entrer un chiffre plus bas" 
        document.getElementById("text").style.color = "red"
		
		numberOfTries = numberOfTries + 1
		document.getElementById("numOfTries").innerHTML = "Nombre d'essais " + numberOfTries 
		
		widthHealth -= 100;
		document.getElementById("vie").style.width = widthHealth + "px"	
		console.log(widthHealth)
		damageSound.play()		
    }

    else if (number>userInput){
        document.getElementById("text").innerHTML = "Entrer un chiffre plus haut" 
        document.getElementById("text").style.color = "red"
		
		numberOfTries = numberOfTries + 1
		document.getElementById("numOfTries").innerHTML = "Nombre d'essais " + numberOfTries 
		
		widthHealth -= 100;
		document.getElementById("vie").style.width = widthHealth + "px"	
		console.log(widthHealth)	
		damageSound.play()	
	}

	if (widthHealth <= 0){
		document.getElementById("text").innerHTML = "Défaite, le numéro était " + number
		document.getElementById("text").style.color = "red"	
	}

}

console.log(widthHealth)

function restart(){
	window.location.reload(false);	
}

