let game_choice = ["rock","paper","scissors"];
let buttons = document.querySelectorAll("button");
let player_score = document.querySelector("#player-score");
let cpu_score = document.querySelector("#cpu-score");
let game_container_target = document.querySelector(".game-container");

function getComputerChoice(){
    let cpu_choice = Math.floor(Math.random() * 3);

    console.log(game_choice[cpu_choice])
    return game_choice[cpu_choice];
}

function checkIfWinner (cpu_score,player_score){
    return cpu_score <= 5 || player_score <= 5;
}

function compareChoices(cpu,player){
    let cpu_name = "Will Smith"
    let player_name = "Dummy"

    if (checkIfWinner(Number(cpu_score.innerText),Number(player_score.innerText)) == true){
        if (cpu == "scissors" && player == "paper" || 
            cpu == "rock" && player == "scissors" ||
            cpu == "paper" && player == "rock"){
                trackOfScore(cpu_score,cpu_name)
            }
            else if (cpu == player){
                declareTie();
            }
            else {
                trackOfScore(player_score,player_name);
            }
    }

}


function declareWinner(winner){
    console.log(`${winner} wins this one!`)
}

function declareTie(){
    console.log("IT'S A TIE!")
}

function trackOfScore(winner,name) {
    winner.innerText = Number(winner.innerText) + 1;
    
    if(Number(winner.innerText) >= 5){
        let winnerName = document.createElement("div");
        winnerName.setAttribute("class","winner");
        winnerName.innerText = `${name} is the winner!`;
        game_container_target.appendChild(winnerName)

        buttons.forEach((button) => {
            button.removeEventListener("click",handleEventClick);
        });

    }
}

function handleEventClick (event) {
    compareChoices(getComputerChoice(), event.target.getAttribute("id"))
}


buttons.forEach((button) => {
    button.addEventListener("click",handleEventClick)
})