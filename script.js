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

let playerScore = 0;
let computerScore = 0;
let pcWins = false;
let playerWins = false;
rockBtn.addEventListener("click",()=>{
    let randomNumber = Math.floor(Math.random() * 3);
    computer.innerHTML = firstElement(hands[0],"starting_animation_pc");
    player.innerHTML = firstElement(hands[0],"starting_animation");
    

    
    if(computerScore == 3){
        pcWins = true;
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        computer.innerHTML = getRandomHand(hands[0],pcHands[0]);
        player.innerHTML = getRandomHand(hands[0],playerHands[0]);

        return
    }
    else if(playerScore == 3){
        playerWins = true;
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        computer.innerHTML = getRandomHand(hands[0],pcHands[0]);
        player.innerHTML = getRandomHand(hands[0],playerHands[0]);


        return
    }
    setTimeout(() => {
        
        computer.innerHTML = getRandomHand(hands[randomNumber],pcHands[randomNumber]);
        player.innerHTML = getRandomHand(hands[0],playerHands[0]);
        
        
        // console.log(randomNumber);
        // console.log(hands[randomNumber]);

        // check winner 
        if(randomNumber == 1){
            computerScore++;      
            
        }
        else if(randomNumber == 2){
            playerScore++;
         
        }
        computerScoreElement.innerHTML = computerScore;
        playerScoreElement.innerHTML = playerScore;


        console.log(`Computer: ${computerScore} Player: ${playerScore}`);

        
    },3000);
    

});

paperBtn.addEventListener("click",()=>{
    let randomNumber = Math.floor(Math.random() * 3);
    computer.innerHTML = firstElement(hands[0],"starting_animation_pc");
    player.innerHTML = firstElement(hands[0],"starting_animation");

 
   
    if(computerScore == 3){
        pcWins = true;
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        computer.innerHTML = getRandomHand(hands[0],pcHands[0]);
        player.innerHTML = getRandomHand(hands[0],playerHands[0]);

        return
    }
    else if(playerScore == 3){
        playerWins = true;
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        computer.innerHTML = getRandomHand(hands[0],pcHands[0]);
        player.innerHTML = getRandomHand(hands[0],playerHands[0]);
        return
    }
    setTimeout(() => {

        player.innerHTML = getRandomHand(hands[1],playerHands[1]);
        computer.innerHTML = getRandomHand(hands[randomNumber],pcHands[randomNumber]);


        // console.log(randomNumber);
        // console.log(hands[randomNumber]);

        if(randomNumber == 2){
            computerScore++;            
        }
        else if(randomNumber == 0){
            playerScore++;
        }

        computerScoreElement.innerHTML = computerScore;
        playerScoreElement.innerHTML = playerScore;

        console.log(`Computer: ${computerScore} Player: ${playerScore}`);

    },3000);

});
scissorsBtn.addEventListener("click",()=>{
    let randomNumber = Math.floor(Math.random() * 3);

    computer.innerHTML = firstElement(hands[0],"starting_animation_pc");
    player.innerHTML = firstElement(hands[0],"starting_animation");

 
    
            if(computerScore == 3){
                pcWins = true;
                rockBtn.disabled = true;
                paperBtn.disabled = true;
                scissorsBtn.disabled = true;
                computer.innerHTML = getRandomHand(hands[0],pcHands[0]);
                player.innerHTML = getRandomHand(hands[0],playerHands[0]);
            }
            else if(playerScore == 3){
                playerWins = true;
                rockBtn.disabled = true;
                paperBtn.disabled = true;
                scissorsBtn.disabled = true;
                computer.innerHTML = getRandomHand(hands[0],pcHands[0]);
                player.innerHTML = getRandomHand(hands[0],playerHands[0]);
            }
   
    setTimeout(() => {

        player.innerHTML = getRandomHand(hands[2],playerHands[2]);
        computer.innerHTML = getRandomHand(hands[randomNumber],pcHands[randomNumber]);


        // console.log(randomNumber);
        // console.log(hands[randomNumber]);

        
        if(randomNumber == 0){
            computerScore++;            
        }
        else if(randomNumber == 1){
            playerScore++;
        }
        computerScoreElement.innerHTML = computerScore;
        playerScoreElement.innerHTML = playerScore;

        console.log(`Computer: ${computerScore} Player: ${playerScore}`);

        
    },3000);

});


resetBtn.addEventListener("click",() =>{

    computer.innerHTML = getRandomHand(hands[0],pcHands[0]);
    player.innerHTML = getRandomHand(hands[0],playerHands[0]);

    playerScore = 0;
    computerScore = 0;
    computerScoreElement.innerHTML = "Computer";
    playerScoreElement.innerHTML = "Player";
})