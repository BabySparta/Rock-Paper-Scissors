let rock = document.querySelector('.choiceRock')
let paper = document.querySelector('.choicePaper')
let scissors = document.querySelector('.choiceScissors')

//makes rock paper and scissor buttons work
rock.addEventListener('click', work = () => {
    playRound('Rock', computerPlay());
}); // plays with player selection as rock when rock button is pressed
paper.addEventListener('click', work1 = () => {
    playRound('Paper', computerPlay());
})
scissors.addEventListener('click', work2 = () => {
    playRound('Scissors', computerPlay());
});

let computerChoice = ["Rock","Paper","Scissors"]

// determines computers play
let computerPlay = () => computerChoice[Math.floor(Math.random() * computerChoice.length)]

//plays a round of Rock Papaer Scissors and adds to scoreboard
let playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        gameText.textContent = `It's A draw! You both chose ${playerSelection}.`   
    } else if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            computerScore.textContent = parseInt(computerScore.textContent)+1;
            gameText.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`   
            winningScore();
        } else {
            playerScore.textContent = parseInt(playerScore.textContent)+1;
            gameText.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`   
            winningScore();  
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            playerScore.textContent = parseInt(playerScore.textContent)+1; 
            gameText.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`   
            winningScore();               
        } else {
            computerScore.textContent = parseInt(computerScore.textContent)+1;
            gameText.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`   
            winningScore();
        }
    } else {
        if (computerSelection === "Rock") {
            computerScore.textContent = parseInt(computerScore.textContent)+1;
            gameText.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`   
            winningScore();
        } else {
            playerScore.textContent = parseInt(playerScore.textContent)+1;
            gameText.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`   
            winningScore();            
        }
    }
}
        

// Determines if someone has reached the winning score. Disables Rock, Paper, and Scissors buttons.
const winningScore = () => {
    if (parseInt(playerScore.textContent) === 5) {
        gameText.textContent = 'You Win! You conquered the computer!' 
        btnDisable();       
    } 
    if (parseInt(computerScore.textContent) === 5) {
        gameText.textContent = 'You Lose! The computer conquered you!'
        btnDisable();
    }
}
// Adds new game button that resets scores and reenables Rock, Paper, and Scissors buttons
const newGame = () => {
    const reset = document.createElement('button');
    reset.className = 'reset'
    reset.textContent = 'New Game'
    resetGame.appendChild(reset);
    reset.addEventListener('click', newG = () => {
        computerScore.textContent = 0;
        playerScore.textContent = 0;
        gameText.textContent = "";
        btnEnable();
    });    
}

// Disables and reenables Rock Paper and Scissor buttons
const btnDisable = () => {
    document.querySelector('.choiceRock').disabled = true;
    document.querySelector('.choicePaper').disabled = true;
    document.querySelector('.choiceScissors').disabled = true;
    
}
const btnEnable = () => {
    document.querySelector('.choiceRock').disabled = false;
    document.querySelector('.choicePaper').disabled = false;
    document.querySelector('.choiceScissors').disabled = false;
}
let resetGame = document.querySelector('.resetGame')
let gameText = document.querySelector('.gameText');
let playerScore = document.getElementById('playerScore');
let computerScore = document.getElementById('computerScore')
newGame();