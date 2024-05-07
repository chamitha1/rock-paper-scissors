function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);

    switch(choice){
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissor";
            break;
    }

    return choice;
}

function playRound(playerChoice, computerChoice ){
    if(playerChoice.toLowerCase() === computerChoice.toLowerCase()){
        return 0 ;
    }else if(playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock"){
        return 2;
    }else if(playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissor"){
        return 2;
    }else if(playerChoice.toLowerCase() === "scissor" && computerChoice.toLowerCase() === "paper"){
        return 2;

    }else if(computerChoice.toLowerCase() === "paper" && playerChoice.toLowerCase() === "rock"){
        return 1;
    }else if(computerChoice.toLowerCase() === "rock" && playerChoice.toLowerCase() === "scissor"){
        return 1;
    }else if(computerChoice.toLowerCase() === "scissor" && playerChoice.toLowerCase() === "paper"){
        return 1;
    
    }else{
        return -1;
    }
}

function getPlayerChoice(){
    let playerChoice = prompt("Enter your choice", "[Rock] , [Paper] , [Scissor] ");
    return playerChoice;
}

const btn_rock = document.querySelector("#rock");
const btn_paper = document.querySelector("#paper");
const btn_scissors = document.querySelector("#scissor");

const display = document.querySelector(".display");

btn_rock.addEventListener("click" , () =>{
    let result = playRound(btn_rock.id, getComputerChoice());
    switch(result){
        case 0:
            display.textContent = "TIE";
            break;
        case 1:
            display.textContent = "Computer WIN";
            break;
        case 2:
            display.textContent = "Player WIN";
            break;
        default:
            console.log("Error");
    }
});

btn_paper.addEventListener("click" , () =>{
    let result = playRound(btn_rock.id, getComputerChoice());
    switch(result){
        case 0:
            display.textContent = "TIE";
            break;
        case 1:
            display.textContent = "Computer WIN";
            break;
        case 2:
            display.textContent = "Player WIN";
            break;
        default:
            console.log("Error");
    }
});

btn_scissors.addEventListener("click" , () =>{
    let result = playRound(btn_scissors.id, getComputerChoice());
    switch(result){
        case 0:
            display.textContent = "TIE";
            break;
        case 1:
            display.textContent = "Computer WIN";
            break;
        case 2:
            display.textContent = "Player WIN";
            break;
        default:
            console.log("Error");
    }
});

const TIE = 0;
const COMP_WIN = 1;
const PLAYER_WIN = 2;
