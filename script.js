let pcHands = ["computer_rock","computer_paper","computer_scissors"];
let playerHands = ["player_rock","player_paper","player_scissors"];
let player = document.querySelector(".player");
let hands = ["images/rock.png","images/paper.png","images/scissors.png"];
let pcRock = document.querySelector(".computer_rock");
let playerRock = document.querySelector(".player_rock"); 
let computer = document.querySelector(".computer");
let handImageComputer = document.querySelector(".computer_player");
let computerScoreElement = document.querySelector(".result_text_computer");
let playerScoreElement = document.querySelector(".result_text_player");

// buttons
let rockBtn = document.querySelector(".rock_btn");
let paperBtn = document.querySelector(".paper_btn");
let scissorsBtn = document.querySelector(".scissors_btn");
let resetBtn = document.querySelector(".reset_btn");

let getRandomHand = (src,className) => {
    return `
        <img src = "${src}" class="${className} computer_player" >
    `
}

let firstElement = (src,className) =>{
    return `
        <img src = "${src}" class="computer_rock computer_player ${className}" >
    `
}

let preventClick = () =>{
    console.log("preventClick Function Called");
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    computer.innerHTML = getRandomHand(hands[0],pcHands[0]);
    player.innerHTML = getRandomHand(hands[0],playerHands[0]);
}

let Winner = () =>{
    console.log("Winner Function Called");
    if(computerScore > 2){
        pcWins = true;

        preventClick();

    }
    else if(playerScore > 2 ){
        playerWins = true;

        preventClick();

    }
}

let playerScore = 0;
let computerScore = 0;
let pcWins = false;
let playerWins = false;


let gameLogic = (playerChoise) =>{
    let randomNumber = Math.floor(Math.random() * 3);

    computer.innerHTML = firstElement(hands[0],"starting_animation_pc");
    player.innerHTML = firstElement(hands[0],"starting_animation");

    
    setTimeout(() => {
        computer.innerHTML = getRandomHand(hands[randomNumber],pcHands[randomNumber]);
        player.innerHTML = getRandomHand(hands[playerChoise],playerHands[playerChoise]);
        
        if(playerChoise === randomNumber){
            console.log("tie")
        }
        else if(playerChoise === 0 && randomNumber === 2 || playerChoise ===    1 && randomNumber === 0 || playerChoise === 2 && randomNumber === 1){
            playerScore++;
            console.log(pcHands[randomNumber]);
            console.log(playerHands[playerChoise]);
        }
        else{
            console.log(pcHands[randomNumber]);
            console.log(playerHands[playerChoise]);
            computerScore++;
        }
        
        computerScoreElement.innerHTML = computerScore;
        playerScoreElement.innerHTML = playerScore;
        
        Winner();
    },3000);
 
}


rockBtn.addEventListener("click",()=>{
gameLogic(0)

});

paperBtn.addEventListener("click",()=>{

    gameLogic(1)
});
scissorsBtn.addEventListener("click",()=>{

    gameLogic(2)

});


resetBtn.addEventListener("click",() =>{

    computer.innerHTML = getRandomHand(hands[0],pcHands[0]);
    player.innerHTML = getRandomHand(hands[0],playerHands[0]);
    playerScore = 0;
    computerScore = 0;
    computerScoreElement.innerHTML = "Computer";
    playerScoreElement.innerHTML = "Player";
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
})

