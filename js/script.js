const rock = document.querySelector("img.rock");
const paper = document.querySelector("img.paper");
const scissors = document.querySelector("img.scissors");
let computerImg = document.querySelector("img.computer-img");
let playerImg = document.querySelector("img.player-img");
const result = document.querySelector("p.result");
const resultNumbers = document.querySelector("p.result-numbers");
const clearBtn = document.querySelector("button.clear-btn");
let computerChoice = '';
let playerChoice = '';
let playerWonGames = 0;
let computerWonGames = 0;

//Player choice
rock.addEventListener("click", function() {
    buttonClicked("rock")
});

paper.addEventListener("click", function() {
    buttonClicked("paper")
});

scissors.addEventListener("click", function() {
    buttonClicked("scissors")
});

//Clear game
clearBtn.addEventListener("click", function() {
    playerWonGames = 0;
    computerWonGames = 0;
    resultNumbers.innerHTML = `${playerWonGames} : ${computerWonGames}`;
    result.innerHTML = "Let's start the game!<br>Choose your move!";
    playerImg.src = '../images/question-mark.png';
    computerImg.src = '../images/question-mark.png';
    clearBtn.style.display = "none";
});

function buttonClicked(btnName) {
    console.log('clicked');
    playerChoice = btnName;
    playerImg.src = `../images/${btnName}.png`;
    clearBtn.style.display= "block";  
    computerMove();
    checkResult();
}

//Computer choice
function computerMove() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    if (randomNumber == 1) {
        computerImg.src='../images/paper.png';
        computerChoice = 'paper';
    } else if (randomNumber == 2) {
        computerImg.src='../images/rock.png';
        computerChoice = 'rock'
    } else {
        computerImg.src='../images/scissors.png';
        computerChoice = 'scissors';
    }
}

//Result check
function checkResult() {
    if(playerChoice == computerChoice) {
        result.innerHTML = "Draw!"
    } else if(playerChoice == 'rock' && computerChoice == 'scissors') {
        result.innerHTML = "You won!"
        playerWonGames += 1;
        resultNumbers.innerHTML = `${playerWonGames} : ${computerWonGames}`;
    } else if (playerChoice == 'scissors' && computerChoice == 'paper'){
        result.innerHTML = "You won!"
        playerWonGames += 1;
        resultNumbers.innerHTML = `${playerWonGames} : ${computerWonGames}`;
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        result.innerHTML = "You won!"
        playerWonGames += 1;
        resultNumbers.innerHTML = `${playerWonGames} : ${computerWonGames}`;
    } else {
        result.innerHTML = "You lost!"
        computerWonGames += 1;
        resultNumbers.innerHTML = `${playerWonGames} : ${computerWonGames}`;
    }
}

