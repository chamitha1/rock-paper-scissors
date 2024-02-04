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

function playGame(){
    let count = 1;
    let playerScore = 0;
    let compScore = 0;

    while(count <= 5){
        let playerChoice = getPlayerChoice();
        let compChoice = getComputerChoice();

        let roundWin = playRound(playerChoice, compChoice);

        switch(roundWin){
            case 0:
                console.log("It's a Tie!");
                break;
            case 1:
                console.log("You Lose! " + compChoice + " beats " + playerChoice + "!");
                compScore++;
                break;
            case 2:
                console.log("You Win! " + playerChoice + " beats " + compChoice + "!")
                playerScore++;
                break;
            default:
                console.log("Invalid choice");
                continue;
        }

        count++;
    }

    if(playerScore === compScore){
        console.log("");
        console.log("You scored " +playerScore +". Computer scored "+compScore+". \nGame's a tie!");
    }else if(playerScore > compScore){
        console.log("");
        console.log("You scored " +playerScore +". Computer scored "+compScore+". \nYou won the game!");
    }else{
        console.log("");
        console.log("You scored " +playerScore +". Computer scored "+compScore+". \nYou lost the game...");
    }
}

const TIE = 0;
const COMP_WIN = 1;
const PLAYER_WIN = 2;
