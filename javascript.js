
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





// function createButtons(){

//     var buttons = document.querySelectorAll("button")
//     const butts = [];
//     for (i = 0; i < buttons.length; i++){
//         butts.push(buttons[i])
//         console.log(buttons[i].id)
//         buttons[i].addEventListener('click', function(){
//             console.log(butts[2])
//             clickHandler(butts[i])
//             })
//     }
// }


// function choiceHandler(){
//     if (btn[0].id == "rock"){
//         console.log("rock")
//         return "rock" 
//     }
//     if (buttons.id == "paper"){
//         return "paper" 
//     }
//     if (buttons.id == "scissors"){
//         return "scissors" 
//     }

// }

function changeWinner(btn){
    let score = document.getElementById("score")
    let winner = document.getElementById("winner")
    if (gameLogic(btn.id, computerChoice())){
        winner.textContent = "You!"
        console.log(score.textContent)
        score.textContent = (parseInt(score.textContent) + 1)
    }
    else{
        winner.textContent = "Computer!"
    }
    

}

function createButtons(){

var btn1 = document.querySelector("#rock")
btn1.addEventListener('click', function(){
    clickHandler(btn1)
      })

var btn2 = document.querySelector("#paper")
btn2.addEventListener('click', function(){
    clickHandler(btn2)
    
    })
var btn3 = document.querySelector("#scissors")
btn3.addEventListener('click', function(){
clickHandler(btn3)

})
}


function clickHandler(btn){
    let playerCount = 0;
    let computerCount = 0;
    console.log(btn.id)
    changeWinner(btn)
    
    console.log(`Player has ${playerCount} wins, and Computer has ${computerCount} wins!`)

}




function gameLogic(playerSelection, getComputerChoice){

    if (playerSelection === getComputerChoice){
        console.log(playerSelection, getComputerChoice)
        console.log("Tie - Pick again!");
        
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




function game(){

    createButtons()





}
game()