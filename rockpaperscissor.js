/* getting computer choice */ 
function getComputerChoice() {
    let computerChoice = Math.random()*100
    if (computerChoice<33.34) return "rock";
    else if (computerChoice>=33.34 & computerChoice <66.67) return "paper";
    else return "scissor";
}

/* Getting human Choide*/
function getHumanChoice() {
    return prompt("Enter you choice:")
}



// Function to decide who wins & return the count for the same 
function playRound(humanChoice, computerChoice, humanWinCount) {
    if (humanChoice.toLowerCase() === "rock"){
        if (computerChoice === "rock") console.log("tie!");
        else if (computerChoice === "paper") {
            console.log("Computer wins! Computer chose Paper");
            humanWinCount--;
        }
        else {
            console.log("You Win! Computer chose Scissor");
            humanWinCount++;
        }
    }
    else if(humanChoice.toLowerCase() === "paper"){
        if (computerChoice === "paper") console.log("tie!");
        else if (computerChoice === "scissor") {
            console.log("Computer wins!Computer chose Scissor");
            humanWinCount--;
        }
        else {
            console.log("You Win!Computer chose Rock");
            humanWinCount++;
        }
    }

    else {
        if (computerChoice === "scissor") console.log("tie!");
        else if (computerChoice === "rock") {
            console.log("Computer wins!Computer chose Rock");
            humanWinCount--;
        }
        else {
            console.log("You Win! Computer chose Paper");
            humanWinCount++;
        }
    }
return humanWinCount;
}

//Function to play the game five times, 
//trying to avoid global variable against was mentioned in teh Odin Project

function playGame(){
let humanWinCount = 0;
for (i=0; i<=4; i++) {
let humanChoice = getHumanChoice();
console.log(humanChoice.toLowerCase());
if (humanChoice.toLowerCase() != "rock" && humanChoice.toLowerCase() != "paper" && humanChoice.toLowerCase() != "scissor" ) 
    {console.log ("Wrong input! Refresh page to play again!")
        return;
    }
let computerChoice = getComputerChoice();
humanWinCount = playRound(humanChoice, computerChoice, humanWinCount);

}
if(humanWinCount >=1) console.log("You win the Game!")
    else if(humanWinCount == 0) console.log("It's a tie!")
    else console.log("Computer wins the game");
}


playGame();

// function resetGame() {
//     humanWinCount =0;
//     computerWinCount = 0;
// }