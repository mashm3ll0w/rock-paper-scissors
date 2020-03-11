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
		let playerSlogans = ["You Win!!", "Sweet! The machine is gLiTchInG!!", "You're da Man!!", "You crushed the AI!!", "Magnifico!!"];
		let playerPraise = playerSlogans[Math.floor(Math.random() * 5)];
		return playerPraise;
	} else if ((computerChoice === "rock" && playerChoice === "scissors") || (computerChoice === "paper" && playerChoice === "rock") || (computerChoice === "scissors" && playerChoice === "paper")) {
		let winSlogans = ["AI triumphs!!", "The machines are coming!!", "Bow before me, Human!!", "Tik...Tok...Haha!!", "T minus...."];
		let chant = winSlogans[Math.floor(Math.random() * 5)];
		return chant;
	} else {
		return "It's a Tie!!";
	}
}
