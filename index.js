/*Variables   */
const startBtn = document.getElementById("start-btn")



/* Event listeners*/

startBtn.addEventListener("click", startingGame)


/*Function */


function startingGame(e) {
    e.perventDefault
    window.document.body.classList.remove("bg-gradient-to-r from-cyan-500 to-blue-500")
    window.document.body.style.backgroundColor = "red";
    // document.body.className = "body-background"
    console.log("started game");
    
}





