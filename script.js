let game_choice = ["rock","paper","scissors"];

function getComputerChoice(){
    let cpu_choice = Math.floor(Math.random() * 3);

    console.log(game_choice[cpu_choice])
    return game_choice[cpu_choice];
}

function getPlayerChoice(){
    let player_choice = prompt("What weapon do you choose?");

    while(!game_choice.includes(player_choice)){
        player_choice = prompt("Choose a real weapon")
    }

    compareChoices(player_choice,getComputerChoice())
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

function gameLogic(){
    getPlayerChoice();
}

// gameLogic();