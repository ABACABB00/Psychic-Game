// dom

var guessNumText = document.getElementById("guessleft");
var lossText = document.getElementById("lost");
var winText = document.getElementById("won");
var guessText = document.getElementById("guesses");

var input;
var userGuess;
var userLoss = 0;
var userWin = 0;
var guesses = [];
var guessesLim = 9;


// generate random numbers

var characters = 'abcdefghijklmnopqrstuvwxyz';
var generator = characters.charAt(Math.floor(Math.random() * characters.length));
 
 console.log(generator);

// keyboard pressed

document.onkeyup = function (event) {
    input = event.key;
    userGuess = input.toLowerCase(); 

    // input 
    if (characters.includes(input)) {
        // duplication & tracking
        if (! guesses.includes(input)) {
        guesses.push(userGuess); 
        guessText.innerHTML = guesses;
        // all guess doesn't match
        if (guessesLim === 1 && userGuess !== characters) {
            alert("'" + guesses + "' are all wrong. Please Try Again.")
            userLoss++;
            lossText.innerHTML = userLoss;

            reset();
        } else if (userGuess === generator) {  // matches
            alert("'" + userGuess + "' Was The Letter. YOU WON!!");
            userWin++;
            winText.innerHTML = userWin;

            reset();
        } else {
                guessesLim--;
                guessNumText.innerHTML = guessesLim;
            }
        } else {
            alert("You've Already Used '" + userGuess + "'. Try Again Please."); // duplicated
        }
    } else {
        alert("Enter A Letter Please."); // not a letter 
    }
}

// resets game
var reset = function() {
    guessesLim = 9;
    guesses = [];
    guessNumText.innerHTML = guessesLim;
    guessText.innerHTML = guesses;
    generator = characters[Math.floor(Math.random() * characters.length)];
}