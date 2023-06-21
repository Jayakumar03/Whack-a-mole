
/*Things to do
1. make the mole appear in random place 
2. timer
3. when clciked audio 
4. exit screen





*/




/*Variables   */
const startBtn = document.getElementById("start-btn")
const pauseBtn = document.getElementById("pause-btn")
const resetBtn = document.getElementById("reset-btn")
const stats = document.getElementsByTagName("p")
const moleSection = document.getElementById("mole-section")
const moleClicked = moleSection.getElementsByTagName("div")
const currentScore = document.getElementById("current-score")
const highScore = document.getElementById("high-score")
const timeLeft = document.getElementById("time-left")




const audio = new Audio("./audio/Brass Dragons - Good Authority.mp3")
let playable = false

// score section
let greatestScore = 0, score = 0, timer = 0;









/* Event listeners*/

startBtn.addEventListener("click", startingGame)
pauseBtn.addEventListener("click", pauseGame)
resetBtn.addEventListener("click", resetGame)
audio.addEventListener("canplaythrough", isAudioLoaded)

for (let index = 0; index < moleClicked.length; index++) {
   moleClicked[index].addEventListener("click", moleClickedFn )
    
}



/*Function */

// game contoller buttons functions

function startingGame(e) {
    e.perventDefault
    console.log("started game");
    playAudio()

    startBtn.style.display = "none"
    pauseBtn.style.display = "block"
    resetBtn.style.display = "block"
   for (let index = 0; index < stats.length; index++) {
     stats[index].style.display = "block"
    
   }


}

function pauseGame(event) {
    if(pauseBtn.textContent === "Pause Game"){
    event.perventDefault
    console.log("paused game");
    pauseAudio()
    pauseBtn.textContent = "Resume"
    }
    else{
        pauseBtn.textContent = "Pause Game"
        audio.play()

    }

}

function resetGame(event) {
    console.log("Reseted game");
    pauseAudio()

}

// audio functions

function playAudio(param) {
    if (playable) audio.play();
    else {
        console.log("still waiting for audio")
    }

}

function pauseAudio(param) {
    audio.pause()

}

function isAudioLoaded(params) {
    playable = true

}


function moleClickedFn(event) {
    let x = Math.floor(Math.random() * 7);
    event.perventDefault;

    // removing the image
    event.target.removeAttribute("id","mole")

    // changing the mole image

    moleClicked[x].setAttribute("id","mole")


// updating score
    score++
    currentScore.innerHTML = `${score}`
    
}