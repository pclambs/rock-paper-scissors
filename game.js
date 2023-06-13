var wins = 0
var losses = 0
var ties = 0

var choices = ["R", "P", "S"]

// human choice
var humanChoice = prompt("Choose R, P, or S")
console.log(humanChoice)

//computer randomly chooses
var randomNum = Math.floor(Math.random() * 3)
var computerChoice = choices[randomNum]

console.log("Human: " + humanChoice)
console.log("Computer: " + computerChoice)

// compare choices
if (
    humanChoice === "S" && computerChoice === "P" || 
    humanChoice === "R" && computerChoice === "R" ||
    humanChoice === "P" && computerChoice === "R"
) {
    alert("You won!")
    wins++
        // incrase wins
} else if (humanChoice === computerChoice) {
    alert("You tied!")
    ties++
        // increase ties
} else {
    alert("You lost!")
    losses++
        // incrase losses    
}

// show score
alert("Wins: " + wins + "\nTies: " + ties + "\nLosses: " + losses)


    // if humanChoice is S and computerChoice is P OR
    // if humanChoice is R and computerChoice is S OR
    // if humanChoice is P and computerChoice is R
        // alert we win
        // incrase wins
    //if humanChoice === computerChoice
        // alert we tied
        // increase ties
    //else
        // alert we lost
        // incrase losses

// ask user "Do you want to play again?"
    // if yes
        // restart
    // if no
        //exit game
