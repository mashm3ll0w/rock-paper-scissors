// jshint esversion:6

function computerPlay() {
	let choices = ["rock", "paper", "scissors"];
	let compSelection = choices[Math.floor(Math.random() * 3)];
	return compSelection;
}
let ComputerChoice = computerPlay();

let playerChoice = prompt("Rock Paper Scissors?").toLowerCase();

function oneGame(ComputerChoice, playerChoice) {
	if ((playerChoice === "rock" && ComputerChoice === "scissors") || (playerChoice === "paper" && ComputerChoice === "rock") || (playerChoice === "scissors" && ComputerChoice === "paper")) {
		return "You Win!!";
	} else if ((ComputerChoice === "rock" && playerChoice === "scissors") || (ComputerChoice === "paper" && playerChoice === "rock") || (ComputerChoice === "scissors" && playerChoice === "paper")) {
		return "AI Triumphs!!";
	} else {
		return "It's a Tie!!";
	}
}
