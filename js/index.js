//jshint esversion:6
//player input should be case insensitive. ie, they could enter ROCK rock or rOCk and get no errors

function computerPlay() {
	//computer selects either rock paper scissors
	//this function makes the computer make its choice

	//COMPUTER RANDOM CHOICE
	//array to chooose from
	let choices = ["rock", "paper", "scissors"];
	//computer chooses from the choices array
  let computerChoice = choices[Math.floor(Math.random() * 3)];
  return computerChoice;
}

function playGame(playerSelection, computerSelection) {
	//this function plays a single round of the game and checks on who wins
	//return the results of this function
}

function game() {
	//this plays a 5 round game, keeps the scores and reports the winner or loser at the end of the round
}

//PLAYER CHOICE
//prompt the player to enter their choice
let playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
