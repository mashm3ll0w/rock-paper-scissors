// jshint esversion:6

function computerPlay() {
	let choices = ["rock", "paper", "scissors"];
	let compSelection = choices[Math.floor(Math.random() * 3)];
	return compSelection;
}
let computerChoice = computerPlay();

let playerChoice = prompt("Rock Paper Scissors?").toLowerCase();

function oneGame(computerChoice, playerChoice) {
	if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
		return "You Win!!";
	} else if ((computerChoice === "rock" && playerChoice === "scissors") || (computerChoice === "paper" && playerChoice === "rock") || (computerChoice === "scissors" && playerChoice === "paper")) {
		return "AI Triumphs!!";
	} else {
		return "It's a Tie!!";
	}
}
