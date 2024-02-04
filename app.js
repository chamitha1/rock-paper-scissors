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
        return "It's a tie ! " ;
    }else if(playerChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock"){
        return "You Win! Paper beats Rock!";
    }else if(playerChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissor"){
        return "You Win! Rock beats Scissor!";
    }else if(playerChoice.toLowerCase() === "scissor" && computerChoice.toLowerCase() === "paper"){
        return "You Win! Scissor beats Paper!";

    }else if(computerChoice.toLowerCase() === "paper" && playerChoice.toLowerCase() === "rock"){
        return "You Lose! Paper beats Rock!";
    }else if(computerChoice.toLowerCase() === "rock" && playerChoice.toLowerCase() === "scissor"){
        return "You Lose! Rock beats Scissor!";
    }else if(computerChoice.toLowerCase() === "scissor" && playerChoice.toLowerCase() === "paper"){
        return "You Lose! Scissor beats Paper !";
    
    }else{
        return "Wrong choice";
    }
}

function getPlayerChoice(){
    let playerChoice = prompt("Enter your choice", "[Rock] [Paper] [Scissor] ");
    return playerChoice;
}

function playGame(){
    let count = 1;

    while(count <= 5){
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
        count++;
    }
}

playGame();