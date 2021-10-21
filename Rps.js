var numRounds = parseInt(prompt("How many rounds do you want to play?"));
var wins = 0;
var losses = 0;
var ties = 0;
// Number of rounds you want to play

// Make a loop to play rounds
for(let i = 0; i < numRounds; i++) {
    const userChoice= prompt("What do you choose? R, P, or S?");
    var computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0 ) {
    computerChoice = "r";
  } else if (computerChoice === 1) {
    computerChoice = "p";
  } else  {
    computerChoice = "s";
  }

  if (userChoice === "r" && computerChoice === "s") {
    wins++
    alert("rock beats scissors, you win!")
  } else if (userChoice === "p" && computerChoice === "r") {
    wins++
    alert("paper beats rock, you win!")
  } else if (userChoice === "s" && computerChoice === "p") {
    wins++
    alert("scissors beats paper, you win!")
  } else if (userChoice === "s" && computerChoice === "r") {
    losses++
    alert("rock beats scissors, you lose!")
  } else if (userChoice === "p" && computerChoice === "s") {
    losses++
    alert("scissors beats paper, you lose!")
  } else if (userChoice === "r" && computerChoice === "p") {
   losses++
    alert("paper beats rock, you lose!")
  } else {
    ties++
    alert("It's a tie!")
  }
}
alert("Total wins " + wins + " Total losses " + losses + " total ties " + ties);
// userChoice === `r` && computerChoice === `s`
