/*Variables   */
const startBtn = document.getElementById("start-btn")


const audio = new Audio("./audio/Brass Dragons - Good Authority.mp3")
let playable = false


/* Event listeners*/

startBtn.addEventListener("click", startingGame)
audio.addEventListener("canplaythrough", isAudioLoaded)



/*Function */


function startingGame(e) {
    e.perventDefault 
    console.log("started game");
    playAudio()
   
    
}


function playAudio() {
    if(playable) audio.play();
    else{
        console.log("still waiting for audio")
    }
    
    
}

function isAudioLoaded(params) {
    playable = true
    
}





