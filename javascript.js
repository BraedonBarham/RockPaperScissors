
function computerChoice(){
    let getComputerChoice = Math.ceil(Math.random()*3);
    if (getComputerChoice == 1){
        getComputerChoice = "rock";
    }else if (getComputerChoice == 2){
        getComputerChoice = "paper";
    }
    else{
        getComputerChoice = "scissors";
    }
    return getComputerChoice;
}

console.log(computerChoice())




var buttons = document.querySelectorAll("button")
console.log(buttons)
Array.from(buttons).forEach(function(e){
e.addEventListener('click', console.log("CLICKED"))

});







function getPlayerSelection(){
    let selection = prompt().toLowerCase()
    selection = selection
    return getPlayerSelectionValid(selection);
}

function getPlayerSelectionValid(selection){
    if (selection == "rock" || selection == "paper" || selection == "scissors"){
        return selection
    }
    else{
        console.log("Input correct object!!!")
        getPlayerSelection()
    }

}

function gameLogic(playerSelection, getComputerChoice){

    if (playerSelection === getComputerChoice){
        console.log("Tie - Getting new selections!");
        return gameLogic(getPlayerSelection(), computerChoice())
    }

    else if (playerSelection == "rock" && getComputerChoice == "scissors"){
        return true;
    }
    else if (playerSelection == "paper" && getComputerChoice == "rock"){
        return true;
    }
    else if (playerSelection == "scissors" && getComputerChoice == "paper"){
        return true;
    }
    else {
        return false;
    }
}








function playRound(){
    let winner;
    let playerCount = 0;
    let computerCount = 0;
    //for (let i = 0; i < 5; i++){
   // winner = gameLogic(getPlayerSelection(), computerChoice())
    //if (winner){
    //    playerCount++;
    //}
    //else{
        computerCount++;
   // }


  //}
  console.log(`Player has ${playerCount} wins, and Computer has ${computerCount} wins!`)
}


function game(){
    playRound()



}
game()