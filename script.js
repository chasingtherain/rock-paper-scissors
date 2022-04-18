function computerPlay(){
    let option = ["rock","paper","scissors"]
    let randNum = Math.floor(Math.random() * option.length);
    return option[randNum];
}

function playRound(computerSelection){
    // let playerSelection = prompt("Rock, Paper or Scissors?");
    let playerSelection = "rock";
    let sanitisedSelection = playerSelection.toLowerCase();
    let outcomeMessage = null;
    let result;

    if (sanitisedSelection === computerSelection) {
        outcomeMessage = "It's a tie!";
        result = "draw";
    }  

    switch (sanitisedSelection){
        case "rock":
            if (computerSelection == "scissors"){
                outcomeMessage = "You Win! Rock beats Scissors";
                result = "win";
            }
            else{
                outcomeMessage = "You Lose! Paper beats Rock";
                result = "lose";
            }
            break;
        case "scissors":
            if (computerSelection == "paper"){
                outcomeMessage = "You Win! Scissors beats Paper";
                result = "win";
            }
            else{
                outcomeMessage = "You Lose! Rock beats Scissors";
                result = "lose";
            }    
            break;
        case "paper":
            if (computerSelection == "rock"){
                outcomeMessage = "You Win! Paper beats Rock";
                result = "win";
            }
            else{
                outcomeMessage = "You Lose! Scissors beats Paper";
                result = "lose";
            }
            break;
        default:
            outcomeMessage = ("Invalid selection by player"); 
    }
    console.log(outcomeMessage);
    return result;
}

function game(){
    let userWin = 0;
    let computerWin = 0;
    let numOfRounds = 5;
    let i = 1;

    while((userWin+computerWin) < 5){
        let computerSelection = computerPlay();
        let outcome = playRound(computerSelection);

        console.log("Round: " + i);
        switch (outcome){
            case "win":
                ++userWin;
                ++i;
                console.log(`Current Score - User:${userWin} Computer:${computerWin}`);
                break;
            case "lose":
                ++computerWin;
                ++i;
                console.log(`Current Score - User:${userWin} Computer:${computerWin}`);
                break;
            default:
                console.log(`Current Score - User:${userWin} Computer:${computerWin}`);
                break;
        }
    }

    if (userWin > computerWin){
        console.log("You won the game!")
    }
    else if (userWin < computerWin){
        console.log("Better luck next time!")
    }
    else{
        console.log("It's a draw! What a close match!")
    }
}
