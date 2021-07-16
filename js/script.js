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
const placeholder = function (word) {
    const placeholderLetters = [];
        for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");   
        }
    wordInProgress.innerText = placeholderLetters.join("");
}

placeholder(word);