let game_choice = ["rock","paper","scissors"];
let buttons = document.querySelectorAll("button");

function getComputerChoice(){
    let cpu_choice = Math.floor(Math.random() * 3);

    console.log(game_choice[cpu_choice])
    return game_choice[cpu_choice];
}

function compareChoices(cpu,player){
    let cpu_name = "Will Smith"
    let player_name = "Dummy"

    if (cpu == "scissors" && player == "paper" || 
        cpu == "rock" && player == "scissors" ||
        cpu == "paper" && player == "rock"){
            declareWinner(cpu_name);
        }
        else if (cpu == player){
            declareTie();
        }
        else {
            declareWinner(player_name);
        }
}

function declareWinner(winner){
    console.log(`${winner} wins this one!`)
}

function declareTie(){
    console.log("IT'S A TIE!")
}


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        compareChoices(getComputerChoice(), button.getAttribute("id"))
    })
})