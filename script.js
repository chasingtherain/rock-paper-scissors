// updates player on game progress/happenings
const gameAnnouncer = document.getElementById("game-announcer");

// buttons
const selectionBtns = document.getElementsByClassName("selection-button");
const scissorBtn = document.getElementById("scissors")
const paperBtn = document.getElementById("paper")
const rockBtn = document.getElementById("rock")
const retryBtn = document.getElementById("retry")

// button event listeners
scissorBtn.addEventListener("click", (event) => {playRound(computerPlay(), event.target.id)})
paperBtn.addEventListener("click", (event) => { playRound(computerPlay(), event.target.id)})
rockBtn.addEventListener("click", (event) => { playRound(computerPlay(), event.target.id)})

// player and computer health
let playerHealth = 100;
let computerHealth = 100;
let playerHealthBar = document.querySelector(".player-hp-bar");
let computerHealthBar = document.querySelector(".computer-hp-bar");

function computerPlay(){
    let option = ["rock","paper","scissors"]
    let randNum = Math.floor(Math.random() * option.length);
    return option[randNum];
}



function playRound(computerSelection, playerSelection){
    let outcomeMessage = null;
    let result;
    // let playerWin = 0;
    // let computerWin = 0;
    
    //display pic of player and computer's choice
    console.log(computerSelection)
    displayComputerChoice(computerSelection)
    displayPlayerChoice(playerSelection)

    switch (playerSelection){
        case "rock":
            if (computerSelection == "scissors"){
                outcomeMessage = "Rock Solid! Rock beats Scissors";
                result = "win";
            }
            else{
                outcomeMessage = "Oh oh! Paper beats Rock";
                result = "lose";
            }
            break;
        case "scissors":
            if (computerSelection == "paper"){
                outcomeMessage = "Hooya! Scissors beats Paper";
                result = "win";
            }
            else{
                outcomeMessage = "Ofttt! Rock beats Scissors";
                result = "lose";
            }    
            break;
        case "paper":
            if (computerSelection == "rock"){
                outcomeMessage = "Noice! Paper beats Rock";
                result = "win";
            }
            else{
                outcomeMessage = "Meh! Scissors beats Paper";
                result = "lose";
            }
            break;
        default:
            outcomeMessage = ("Invalid selection by player"); 
    }

    if (playerSelection === computerSelection) {
        outcomeMessage = "It's a tie!";
        result = "draw";
        console.log("tie!")
    }  
    gameAnnouncer.textContent = outcomeMessage;
    if (result == "win"){
        gameAnnouncer.style.color = "green"
        // playerWin++;
        computerHealth -= 20;
        computerHP.setValue(computerHealth);
        barColor(computerHealth)
    }
    else if(result== "lose") {
        gameAnnouncer.style.color = "red"
        // computerWin++;
        playerHealth -= 20;
        playerHP.setValue(playerHealth);
        barColor(playerHealth)
    }
    else {
        gameAnnouncer.style.color = "grey"
    }

    if (computerHealth <= 0){
        gameAnnouncer.textContent = "You defeated the dragon, well done Warrior!";
        retryBtn.textContent = "Play Again"
        gameOver();
    }
    if (playerHealth <= 0){
        gameAnnouncer.textContent = "The dragon was too formiddable, come back again when you're stronger!!";
        retryBtn.textContent = "Retry"
        gameOver();

    }
}

function gameOver(){
    retryBtn.style.display = "block"
    Array.from(selectionBtns).forEach(img => {
        img.style.visibility = "hidden";
    });
}

// display player and computer choice
const playerChoice = document.getElementById("player-choice")
const computerChoice = document.getElementById("computer-choice")

function displayPlayerChoice(choice){
    playerChoice.setAttribute("src", `img/${choice}.png`) 
}

function displayComputerChoice(choice){
    computerChoice.setAttribute("src", `img/${choice}.png`) 
}

function resetChoices(){
    playerChoice.setAttribute("src", "")
    computerChoice.setAttribute("src", "")
}

// hp bar JS
class ProgressBar{
    constructor(element, initialValue=100){
        this.fillElem = element.querySelector(".player-hp-bar");
        // this.fillElem = element.querySelector(".computer-hp-bar");
        this.setValue(initialValue);
    }
    setValue(newValue){
        if(newValue < 0 ) newValue = 0
        if(newValue > 100 ) newValue = 100
        this.value= newValue;
        this.update();
    }
    update(){
        const percentage = this.value + "%";
        this.fillElem.style.width = percentage;
    }
}

class computerProgressBar{
    constructor(element, initialValue=100){
        this.fillElem = element.querySelector(".computer-hp-bar");
        this.setValue(initialValue);
    }
    setValue(newValue){
        if(newValue < 0 ) newValue = 0
        if(newValue > 100 ) newValue = 100
        this.value= newValue;
        this.update();
    }
    update(){
        const percentage = this.value + "%";
        this.fillElem.style.width = percentage;
    }
}

const playerHP = new ProgressBar(document.querySelector(".player-hp"),100);
const computerHP = new computerProgressBar(document.querySelector(".computer-hp"),100);

// health bar color
function barColor(health){
    if(playerHealth <= 20){
        playerHealthBar.style.backgroundColor = "red";
    }
    else{
        playerHealthBar.style.backgroundColor = "#59ea63";
    }
    if(computerHealth <= 20){
        computerHealthBar.style.backgroundColor = "red";
    }
    else{
        computerHealthBar.style.backgroundColor = "#59ea63";
    }
}

// retry
retryBtn.addEventListener("click",playAgain)

function playAgain(){
    gameAnnouncer.textContent = "Hero, choose your weapon!";
    gameAnnouncer.style.color = ""
    playerHP.setValue(100)
    computerHP.setValue(100)
    resetChoices();
    playerHealth = 100;
    computerHealth = 100;
    computerHealthBar.style.backgroundColor = "#59ea63";
    playerHealthBar.style.backgroundColor = "#59ea63";
    retryBtn.style.display = "none"
    Array.from(selectionBtns).forEach(img => {
        img.style.visibility = "visible";
    });
}