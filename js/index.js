//jshint esversion:6

//player input should be case insensitive. ie, they could enter ROCK rock or rOCk and get no errors
//PLAYER CHOICE
//prompt the player to enter their choice
let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();

function computerPlay() {
	//COMPUTER RANDOM CHOICE
	//array to chooose from
	let choices = ["rock", "paper", "scissors"];
	//computer chooses from the choices array
	let computerChoice = choices[Math.floor(Math.random() * 3)];
	return computerChoice;
}

let computerSelection = computerPlay();

function playGame(playerSelection, computerSelection) {
	//this function plays a single round of the game and checks on who wins
	//return the results of this function
	if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
		return "You  Win!!";
	} else if ((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "scissors" && playerSelection === "paper")) {
		return "The Computer Wins!!";
	}
}

function game() {
	//this plays a 5 round game, keeps the scores and reports the winner or loser at the end of the round
}
