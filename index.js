/*Things to do
1. make the mole appear in random place => done
2. timer 
3. when clciked audio => asked
4. exit screen 


https://knock-a-rodent.netlify.app/


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
let greatestScore = 0
let score = 0
let perGameTime = 10
let myInterval;
let temp = 2


/* Event listeners*/

startBtn.addEventListener("click", startingGame)
pauseBtn.addEventListener("click", pauseGame)
resetBtn.addEventListener("click", resetGame)
audio.addEventListener("canplaythrough", isAudioLoaded)





/*Function */

// game contoller buttons functions

function startingGame(e) {
    e.perventDefault
    console.log("started game");
    playAudio()

    startBtn.style.display = "none"
    pauseBtn.style.display = "block"
    resetBtn.style.display = "block"

    // Displaying the timer, highscore and current score

    for (let index = 0; index < stats.length; index++) {
        stats[index].style.display = "block"

    }


    for (let index = 0; index < moleClicked.length; index++) {
        moleClicked[index].addEventListener("click", moleClickedFn)

    }

    myInterval = setInterval(timerHandler, 1000)


}

function pauseGame(event) {
    let lastGameTime
    if (pauseBtn.textContent === "Pause Game") {
        event.perventDefault
        console.log("paused game");
        pauseAudio()
        clearInterval(myInterval)
        lastGameTime = perGameTime
        pauseBtn.textContent = "Resume"

    } else {
        pauseBtn.textContent = "Pause Game"
        audio.play()
        perGameTime = lastGameTime


    }

}



function resetGame(event) {
    console.log("Reseted game");
    pauseAudio()

    startBtn.style.display = "block"
    pauseBtn.style.display = "none"
    resetBtn.style.display = "none"
    stats[0].style.display = "none"
    stats[1].style.display = "none"
    stats[2].style.display = "none"
    clearInterval(myInterval)
    score = 0
    perGameTime = 10
    timeLeft.innerHTML = perGameTime



}



function gameFinished(params) {
    pauseAudio()

    moleSection.style.display = "none"
    pauseBtn.style.display = "none"
    resetBtn.style.display = "none"
    stats[2].style.display = "none"

    
}

function timerHandler() {
    let x = Math.floor(Math.random() * 7);

    if (perGameTime) {
        perGameTime -= 1
        timeLeft.innerHTML = perGameTime
        moleswap(x)

    } else {
        if (greatestScore < score) {
            greatestScore = score;
            highScore.innerHTML = greatestScore;
            score = 0;
            clearInterval(myInterval)
           
            
        } else {
            score = 0
            clearInterval(myInterval)
            gameFinished()
            setInterval(timerHandler, 1000)
        }

    }
    console.log("finished if")


}


function moleswap(x) { // if not clicked
    console.log(temp,x)
    moleClicked[temp].removeAttribute("id", "mole")
    moleClicked[x].setAttribute("id", "mole")
    temp = x
    console.log(temp,x)

    
}




function moleClickedFn(event) {  // if clicked
    event.perventDefault;

    if (event.target.id == "mole") {
        // removing the image
        event.target.removeAttribute("id", "mole")

        // updating score
        score++
        currentScore.innerHTML = `${score}`
        timerHandler()
        
    }


}










// audio functions

function playAudio(param) {
    if (playable) audio.play();
    else {
        console.log("still waiting for audio")
    }highScore

}

function pauseAudio(param) {
    audio.pause()

}

function isAudioLoaded(params) {
    playable = true

}