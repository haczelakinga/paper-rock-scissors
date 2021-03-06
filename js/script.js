"use strict";

const rock = document.querySelector("img.rock");
const paper = document.querySelector("img.paper");
const scissors = document.querySelector("img.scissors");
const computerImg = document.querySelector("img.computer-img");
const playerImg = document.querySelector("img.player-img");
const result = document.querySelector("p.result");
const resultNumbers = document.querySelector("p.result-numbers");
const clearBtn = document.querySelector("button.clear-btn");
let computerChoice = '';
let playerChoice = '';
let playerWonGames = 0;
let computerWonGames = 0;

//Player choice
rock.addEventListener("click", function () {
    buttonClicked("rock")
});

paper.addEventListener("click", function () {
    buttonClicked("paper")
});

scissors.addEventListener("click", function () {
    buttonClicked("scissors")
});

//Clear game
clearBtn.addEventListener("click", function () {
    playerWonGames = 0;
    computerWonGames = 0;
    resultNumbers.innerHTML = `${playerWonGames} : ${computerWonGames}`;
    result.innerHTML = "Let's start the game!<br>Choose your move!";
    playerImg.src = 'images/question-mark.png';
    computerImg.src = 'images/question-mark.png';
    clearBtn.style.display = "none";
});

function buttonClicked(btnName) {
    playerChoice = btnName;
    playerImg.src = `images/${btnName}.png`;
    clearBtn.style.display = "block";
    computerMove();
    checkResult();
}

//Computer choice
function computerMove() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    if (randomNumber == 1) {
        computerChoice = 'paper';
    } else if (randomNumber == 2) {
        computerChoice = 'rock'
    } else {
        computerChoice = 'scissors';
    }
    computerImg.src = `images/${computerChoice}.png`;
}

//Result check
function checkResult() {
    const positiveText = [`You're great!`, `Amazing!`, `Wonderful!`, `Keep going!`, `You got it!`, `You won!`];

    const negativeText = [`Lost!`, `Oopss!`, `Try again!`, `Not this time!`];

    function getPositiveText() {
        const text = positiveText[Math.floor(Math.random() * positiveText.length)];
        return text;
    }

    function getNegativeText() {
        const text = negativeText[Math.floor(Math.random() * negativeText.length)];
        return text;
    }

    if (playerChoice === computerChoice) {
        result.innerHTML = "Draw!"
    } else if (playerChoice === 'rock' && computerChoice === 'scissors' || playerChoice === 'scissors' && computerChoice === 'paper' || playerChoice === 'paper' && computerChoice === 'rock') {
        result.innerHTML = getPositiveText();
        playerWonGames += 1;
        resultNumbers.innerHTML = `${playerWonGames} : ${computerWonGames}`;
    } else {
        result.innerHTML = getNegativeText();
        computerWonGames += 1;
        resultNumbers.innerHTML = `${playerWonGames} : ${computerWonGames}`;
    }
}