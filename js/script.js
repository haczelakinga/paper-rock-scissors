let rock = document.querySelector("img.rock");
let paper = document.querySelector("img.paper");
let scissors = document.querySelector("img.scissors");
let computerImg = document.querySelector("img.computer-img");
let playerImg = document.querySelector("img.player-img");
let result = document.querySelector("p.result");
let resultNumbers = document.querySelector("p.result-numbers");
let clearBtn = document.querySelector("button.clear-btn");
let computerChoice = '';
let playerChoice = '';
let playerWonGames = 0;
let computerWonGames = 0;

//Player choice
rock.addEventListener("click", function() {
    playerChoice = 'rock';
    playerImg.src='../images/rock.png';
    computer();
    checkResult();
    clearBtn.style.display= "block";  
});

paper.addEventListener("click", function() {
    playerChoice = 'paper';
    playerImg.src='../images/paper.png';
    clearBtn.style.display = "block";
    computer();
    checkResult();
    clearBtn.style.display= "block";  
});

scissors.addEventListener("click", function() {
    playerChoice = 'scissors';
    playerImg.src='../images/scissors.png';
    clearBtn.style.display = "block";
    computer();
    checkResult();
    clearBtn.style.display= "block";  
});


//Computer choice
function computer() {
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

