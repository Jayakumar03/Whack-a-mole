/*Variables   */
const startBtn = document.getElementById("start-btn")
const pauseBtn = document.getElementById("pause-btn")
const resetBtn = document.getElementById("reset-btn")
const stats = document.getElementsByTagName("p")


const audio = new Audio("./audio/Brass Dragons - Good Authority.mp3")
let playable = false


/* Event listeners*/

startBtn.addEventListener("click", startingGame)
pauseBtn.addEventListener("click",pauseGame )
resetBtn.addEventListener("click",resetGame )

audio.addEventListener("canplaythrough", isAudioLoaded)



/*Function */

// game contoller buttons functions

function startingGame(e) {
    e.perventDefault 
    console.log("started game");
    playAudio()

    startBtn.style.display="none"
    pauseBtn.style.display = "block"
    resetBtn.style.display = "block"
    document.p.style.display = "block"
   
    
}

function pauseGame(event) {
    event.perventDefault 
    console.log("paused game");
    pauseAudio()
    
}

function resetGame(event) {
    console.log("Reseted game");
    pauseAudio()
    
}

// audio functions

function playAudio(param) {
    if(playable) audio.play();
    else{
        console.log("still waiting for audio")
    }
    
}

function pauseAudio(param) {
    audio.pause()
    
}

function isAudioLoaded(params) {
    playable = true
    
}

