let rock = document.querySelector("img.rock");
let paper = document.querySelector("img.paper");
let scissors = document.querySelector("img.scissors");
let computerImg = document.querySelector("img.computer-img");
let playerImg = document.querySelector("img.player-img");
let computerChoice = '';
let playerChoice= '';

//Player choice
rock.addEventListener("click", function() {
    playerChoice = 'rock';
    rock.style.transform = "scale(1.1)";
    paper.style.opacity = "0.5";
    paper.style.pointerEvents = "none";
    scissors.style.opacity = "0.5";
    scissors.style.pointerEvents = "none";
    playerImg.src='../images/rock.png';
    computer();
    checkResult();
});

paper.addEventListener("click", function() {
    playerChoice = 'paper';
    paper.style.transform = "scale(1.1)";
    rock.style.opacity = "0.5";
    rock.style.pointerEvents = "none";
    scissors.style.opacity = "0.5";
    scissors.style.pointerEvents = "none";
    playerImg.src='../images/paper.png';
    computer();
    checkResult();
});

scissors.addEventListener("click", function() {
    playerChoice = 'scissors';
    scissors.style.transform = "scale(1.1)";
    paper.style.opacity = "0.5";
    paper.style.pointerEvents = "none";
    rock.style.opacity = "0.5";
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
        console.log('REmis');
    } else if(playerChoice == 'rock' && computerChoice == 'scissors') {
        console.log('You Won');
    } else if (playerChoice == 'scissors' && computerChoice == 'paper'){
        console.log('You Won');
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        console.log('You won')
    } else {
        console.log('Yuo lost')
    }
}

