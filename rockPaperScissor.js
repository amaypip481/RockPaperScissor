const TIMEOUT_TIMER = 2000;
let CREATEBUTTONSONCE = false;
let userWinCount = 0;
let computerWinCount = 0;

// animating the mouse click on elements & calling the playRound function
function addClass(e){
    let getConsumerImage = document.querySelectorAll(".headerSubDiv");
    getConsumerImage.forEach(removeEventFunction);
    e.target.classList.add("zoomIn");
    let userClick = e.target.classList[0];
    let computerImg = document.querySelector("#computerImg");
    computerImg.src = "./Images/Gif_fast.gif"; // computer animation depicting computer is trying to choose
    setTimeout(() => {playRound(userClick, getComputerChoice())}, TIMEOUT_TIMER);//timeout to show animation and calling the playRound fucntion
}

function removeClass(e){
    console.log(e);
    e.firstElementChild.classList.remove("zoomIn");
}

function addEventFunction(e){
e.firstElementChild.addEventListener("click", addClass);
}
function removeEventFunction(e){
    e.firstElementChild.removeEventListener("click", addClass);
}


let getConsumerImage = document.querySelectorAll(".headerSubDiv");
getConsumerImage.forEach(addEventFunction);

//Add Play again & Submit final result button
function addPlayAgainButton(){
    let computerSectionDiv = document.querySelector(".computerSection");
    let createDivForButtons = document.createElement("div");
    createDivForButtons.className = "divForButtons";
    computerSectionDiv.appendChild(createDivForButtons);
    let playAgainButton = document.createElement("button");
    playAgainButton.textContent = "Play Again";
    playAgainButton.addEventListener("click",resetRound);
    createDivForButtons.appendChild(playAgainButton);
    let submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.addEventListener("click", userSubmitted);
    createDivForButtons.appendChild(submitButton);
    CREATEBUTTONSONCE = true;
}

//add event listeners on buttons
function resetRound(){
    let headerElement = document.querySelector("#roundWinner");
    headerElement.innerText = "";
    let computerSectionDiv = document.querySelector(".computerSection");
    let createDivForButtons = document.querySelector(".divForButtons");
    computerSectionDiv.removeChild(createDivForButtons);
    let getConsumerImage = document.querySelectorAll(".headerSubDiv");
    getConsumerImage.forEach(addEventFunction);
    getConsumerImage.forEach(removeClass);
    let computerImg = document.querySelector("#computerImg");
    computerImg.src = "./Images/gifmaker_me.gif";
}

function userSubmitted(){
    let bodyDiv = document.querySelector("#bodyDiv");
    let alternateDiv = document.querySelector("#alternativeBodyDiv");
    alternateDiv.style.display = "flex";
    let computerScore = document.querySelector("#computerScore")
    computerScore.innerText += " " + computerWinCount;
    let userScore = document.querySelector("#userScore")
    userScore.innerText += " " + userWinCount;
    if(userWinCount>computerWinCount){
        let finalSubmission = document.querySelector("#finalSubmission");
        finalSubmission.firstElementChild.innerText = "YOU WIN!!";
    }
    else if(userWinCount<computerWinCount){
        let finalSubmission = document.querySelector("#finalSubmission");
        finalSubmission.firstElementChild.innerText = "COMPUTER WINS!!";
    }
    else {
        let finalSubmission = document.querySelector("#finalSubmission");
        finalSubmission.firstElementChild.innerText = "It's a Tie!!";
    }
    let resetGameButton = document.querySelector("#playAgain");
    resetGameButton.addEventListener("click",resetGame);
}



/* getting computer choice */ 
function getComputerChoice() {
    let computerChoice = Math.random()*100
    if (computerChoice<33.34) return "rock";
    else if (computerChoice>=33.34 & computerChoice <66.67) return "paper";
    else return "scissor";
}


// Function to decide who wins & return the count for the same 
function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === "rock"){
        if (computerChoice === "rock") 
            {
                let headerElement = document.querySelector("#roundWinner");
                headerElement.innerText = "Tie! Play Again";
                document.querySelector("#computerImg").src = "./Images/Rock.png";
            }
        else if (computerChoice === "paper") {
            document.querySelector("#computerImg").src = "./Images/Paper.png";
            let headerElement = document.querySelector("#roundWinner");
            headerElement.innerText = "Computer wins! Computer chose Paper";
            computerWinCount++;
        }
        else {
            document.querySelector("#computerImg").src = "./Images/Scissor.png";
            let headerElement = document.querySelector("#roundWinner");
            headerElement.innerText = "You Win! Computer chose Scissor";
            userWinCount++;
        }
    }
    else if(humanChoice.toLowerCase() === "paper"){
        if (computerChoice === "paper") {
            document.querySelector("#computerImg").src = "./Images/Paper.png";
            let headerElement = document.querySelector("#roundWinner");
            headerElement.innerText = "Tie! Play Again";
        }
        else if (computerChoice === "scissor") {
            document.querySelector("#computerImg").src = "./Images/Scissor.png";
            let headerElement = document.querySelector("#roundWinner");
            headerElement.innerText = "Computer wins!Computer chose Scissor";
            computerWinCount++;
        }
        else {
            document.querySelector("#computerImg").src = "./Images/Rock.png";
            let headerElement = document.querySelector("#roundWinner");
            headerElement.innerText = "You Win!Computer chose Rock";
            userWinCount++;
        }
    }

    else {
        if (computerChoice === "scissor")  {
            document.querySelector("#computerImg").src = "./Images/Scissor.png";
            let headerElement = document.querySelector("#roundWinner");
            headerElement.innerText = "Tie! Play Again";
        }
        else if (computerChoice === "rock") {
            document.querySelector("#computerImg").src = "./Images/Rock.png";
            let headerElement = document.querySelector("#roundWinner");
            headerElement.innerText = "Computer wins!Computer chose Rock";
            computerWinCount++;
        }
        else {
            document.querySelector("#computerImg").src = "./Images/Paper.png";
            let headerElement = document.querySelector("#roundWinner");
            headerElement.innerText = "You Win! Computer chose Paper";
            userWinCount++;
        }
    }
addPlayAgainButton();
}

// Reset Game
function resetGame() {
    computerWinCount = 0;
    userWinCount = 0;
    resetRound();
    let alternateDiv = document.querySelector("#alternativeBodyDiv");
    alternateDiv.style.display = "none";
    let computerScore = document.querySelector("#computerScore")
    computerScore.innerText = "Computer:";
    let userScore = document.querySelector("#userScore")
    userScore.innerText = "Player:";
}