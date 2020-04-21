let rock = document.querySelector("img.rock");
let paper = document.querySelector("img.paper");
let scissors = document.querySelector("img.scissors");
let computerImg = document.querySelector("img.computer-img");
let playerImg = document.querySelector("img.player-img");
let computer = '';
let player= '';

//Player choice
rock.addEventListener("click", function() {
    rock.style.transform = "scale(1.1)";
    paper.style.opacity = "0.5";
    paper.style.pointerEvents = "none";
    scissors.style.opacity = "0.5";
    scissors.style.pointerEvents = "none";
    playerImg.src='../images/rock.png';
    computerChoice();
});

paper.addEventListener("click", function() {
    paper.style.transform = "scale(1.1)";
    rock.style.opacity = "0.5";
    rock.style.pointerEvents = "none";
    scissors.style.opacity = "0.5";
    scissors.style.pointerEvents = "none";
    playerImg.src='../images/paper.png';
    computerChoice();
});

scissors.addEventListener("click", function() {
    scissors.style.transform = "scale(1.1)";
    paper.style.opacity = "0.5";
    paper.style.pointerEvents = "none";
    rock.style.opacity = "0.5";
    rock.style.pointerEvents = "none";
    playerImg.src='../images/scissors.png';
    computerChoice();
});


//Computer choice
function computerChoice() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
 if (randomNumber == 1) {
     computerImg.src='../images/paper.png';
 } else if (randomNumber == 2) {
    computerImg.src='../images/rock.png';
 } else {
    computerImg.src='../images/scissors.png';
 }
}
