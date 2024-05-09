//Functions
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

function setScore(result){
    //score increment
    if(result === 1){
        computerScore++;
    }
    if(result === 2){
        playerScore++;
    }
    //changing scores
    switch(result){
        case 0:
            break;
        case 1:
            score_comp.textContent = computerScore;
            break;
        case 2:
            score_player.textContent = playerScore;
            break;
        default:
    }
    
    //resetting scores and announcing winner
    if(computerScore > 4){
        computerScore = 0;
        playerScore = 0;
        display.textContent = "COMPUTER WON THE GAME!!";
        score_player.textContent = playerScore;
        score_comp.textContent = computerScore;
    }
    if(playerScore > 4){
        computerScore = 0;
        playerScore = 0;
        display.textContent = "PLAYER WON THE GAME!!";
        score_player.textContent = playerScore;
        score_comp.textContent = computerScore;
    }
    
}

//app

const btn_rock = document.querySelector("#rock");
const btn_paper = document.querySelector("#paper");
const btn_scissors = document.querySelector("#scissor");

const display = document.querySelector("#result");
const score_comp = document.querySelector("#compScore");
const score_player = document.querySelector("#playerScore");

const TIE = 0;
const COMP_WIN = 1;
const PLAYER_WIN = 2;

let computerScore = 0;
let playerScore = 0;

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
  
    setScore(result);

});

btn_paper.addEventListener("click" , () =>{
    let result = playRound(btn_rock.id, getComputerChoice());
    switch(result){
        case 0:
            display.text = "TIE";
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
    setScore(result);

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
    setScore(result);

});

