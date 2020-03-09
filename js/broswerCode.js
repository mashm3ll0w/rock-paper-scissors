// jshint esversion:6

function computerPlay(){
  let choices = ["rock", "paper", "scissors"];
  let compSelection = choices[Math.floor(Math.random() * 3)];
  return compSelection;
}
let ComputerChoice = computerPlay();
