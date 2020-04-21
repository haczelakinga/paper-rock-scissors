let rock = document.querySelector("img.rock");
let paper = document.querySelector("img.paper");
let scissors = document.querySelector("img.scissors");
let computerImg = document.querySelector("img.computer-img");
let playerImg = document.querySelector("img.player-img");
let result = document.querySelector("p.result");
let resultNumbers = document.querySelector("p.result-numbers");
let computerChoice = '';
let playerChoice = '';
let playerWonGames = 0;
let computerWonGames = 0;

//Player choice
rock.addEventListener("click", function() {
    playerChoice = 'rock';
    rock.style.transform = "scale(1.1)";
    paper.style.opacity = "0.3";
    paper.style.pointerEvents = "none";
    scissors.style.opacity = "0.3";
    scissors.style.pointerEvents = "none";
    playerImg.src='../images/rock.png';
    computer();
    checkResult();
});

paper.addEventListener("click", function() {
    playerChoice = 'paper';
    paper.style.transform = "scale(1.1)";
    rock.style.opacity = "0.3";
    rock.style.pointerEvents = "none";
    scissors.style.opacity = "0.3";
    scissors.style.pointerEvents = "none";
    playerImg.src='../images/paper.png';
    computer();
    checkResult();
});

scissors.addEventListener("click", function() {
    playerChoice = 'scissors';
    scissors.style.transform = "scale(1.1)";
    paper.style.opacity = "0.3";
    paper.style.pointerEvents = "none";
    rock.style.opacity = "0.3";
    rock.style.pointerEvents = "none";
    playerImg.src='../images/scissors.png';
    computer();
    checkResult();
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
        result.innerHTML = "Remis!"
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

