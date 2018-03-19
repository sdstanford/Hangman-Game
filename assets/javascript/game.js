//Set initial variables and array of word choices
var words = [ "airplane", "luggage", "hotel", "train", "airport", "automobile", "passport", "ferry", "ship", "ticket"];
var showArray = [];
var guessesRemaining = 10;
var guessArray = [];


//Choose a random word for the user to guess
var pick = words[Math.floor(Math.random(words.length))];

//Split the chosen word into an array containing each of its individual letters
var pickArray = pick.split("");

//Log the chosen word to the console
console.log(pick);

//Create a for loop replacing each of the letters with an underscore, push the new array to showArray
for (var i=0; i<pickArray.length; i++) {
    showArray.push(" _ ");
}

//Create an array that is a string to store showArray
var dashString = " ";

//populate the new string variable with the appropriate underscores
for (var i=0; i<pickArray.length; i++) {
    dashString=dashString + showArray[i]
}

//Create the initial game function displaying the start up information
window.onload = function startGame() {
    $("#game").text(showArray);
    $("#guessesleft").text("Guesses Remaining: ");
}

//Create keyup function to capture the user's guess
document.onkeyup = function(event){
    var capture = event.key
    var isMatch = false;

    //Create a conditional that decies whether the user's guess is in the array
    for (var i=0; i<pickArray.length; i++) {
        if(pickArray[i]==capture){
        
        //Add the captured guess to the guessArray
        guessArray.push(capture);
        
        //Replace the captured guess in the correct place in the array
        showArray[i]=capture;

        //Change isMatch status to true
        isMatch=true;

        //Update display to show chosen letter in array
        $("#game").text(showArray);
        }

    }
    //Create conditional if letter does not match
    if(!isMatch){
        //Add wrong guess to "Incorrect Guess"
        $("#wrong").append(capture);
        //Remove one guess from guesses remaining
        guessesRemaining--;
        }
    //Display guesses remaining
    $("#guessesleft").text("Guesses Remaining: " + guessesRemaining);

    //If no more guesses, alert that the game is over
    if(guessesRemaining == 0){
        alert("You lose!")
    }

    //If each letter has been filled, alert that the game has been won
    if(pickArray.length==guessArray.length){
        alert("You win!")
    }

    //Reset the game
}
