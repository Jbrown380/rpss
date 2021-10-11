var numRounds = parseInt(prompt("How many rounds do you want to play?"));
var wins = 0;
var loses = 0;
var ties = 0;
// Number of rounds you want to play

// Make a loop to play rounds

var computerChoice = Math.floor(Math.random() * 3);
if (computerChoice === 0 ); {
  computerChoice = "r";
} else if (computerChoice === 1); {
  computerChoice = "p";
} else (computerChoice === 2); {
  computerChoice = "s";
}

if (userChoice === "r" && computerChoice === "s") {
alert("rock beats scissors, you win!")
} else if (userChoice === "p" && computerChoice === "r") {
  alert("paper beats rock, you win!")
} else if (userChoice === "s" && computerChoice === "p") {
  alert("scissors beats paper, you win!")
} else if (userChoice === "s" && computerChoice === "r") {
  alert("rock beats scissors, you lose!")
} else if (userChoice === "p" && computerChoice === "s") {
  alert("scissors beats paper, you lose!")
} else if (userChoice === "r" && computerChoice === "p") {
  alert("paper beats rock, you lose!")
} else (userChoice === computerChoice); {
  alert("It's a tie!")
}

// userChoice === `r` && computerChoice === `s`
