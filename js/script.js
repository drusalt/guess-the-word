// ul guessed-letters
const guessedLettersElement = document.querySelector(".guessed-letters");
// "Guess" button
const guessLetterButton = document.querySelector(".guess");
// text input to guess a letter
const letterInput = document.querySelector(".letter");
// word in progress appears
const wordInProgress = document.querySelector(".word-in-progress");
// remaining guesses left paragraph
const remainingGuessesElement = document.querySelector(".remaining");
// span in paragraph where remianing guesses appear
const remainingGuessesSpan = document.querySelector(".remaining span");
// where messages appear when player guesses a letter
const message = document.querySelector(".message");
// play again prompt 
const playAgainButton = document.querySelector(".play-again hide");
const word = "magnolia";


// Display our symbols as placeholders for the chosen word's letters
// Create & name function to update paragraphs innerText. 
const placeholder = function (word) {
    const placeholderLetters = [];     // Use an array 
        for (const letter of word) {   // loop through array
        console.log(letter);
        placeholderLetters.push("●");  // add ● to end of array 
        }
    // then join the array back to the string
    wordInProgress.innerText = placeholderLetters.join("");
}

placeholder(word);   // call function and add word as the argument

guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();  // prevent browser from reloading
    const buttonClick = letterInput.value;  // create var to capture value of input then log it out
    console.log(buttonClick);
    buttonClick.value = "";   // empty the value of the input
});