/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
/* Testing code
const phrase = new Phrase('Life is like a box of chocolates');
const game = new Game();
console.log(`${game.activePhrase} - ${game.missed} - ${game.phrases.length}`);
console.log(`Phrase - phrase: ${phrase.phrase}`);
*/

/*
const game = new Game();
game.phrases.forEach(function (element, index) {
    console.log(`Phrase ${index} - phrase: ${element.phrase}`);
});
console.log(game);
console.log(game.getRandomPhrase());
*/

/*
const logPhrase = (phrase) => {
    console.log(`Phrase - phrase: `, phrase.phrase);
};
const game = new Game();
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
*/

/* Works
const game = new Game();
const randomPhrase = game.getRandomPhrase();
const phrase = new Phrase(randomPhrase.phrase);
phrase.addPhraseToDisplay();
*/

/* This Works
const game = new Game();
game.startGame();
console.log(`Active phrase - phrase: ${game.activePhrase.phrase}`);
*/

const game = document.getElementById('btn__reset');
game.addEventListener('click', () => {
    const game_ = new Game();
    game_.startGame();
    const keys = document.getElementsByClassName('key');
    console.log(keys);
    keys.forEach((ele) => {
        ele.addEventListener('click', () => {
            console.log("clicked");
        })
    })
})

// add an event listener for clicking events when user is clicking on the buttons
// on the screen
/*
const keys = document.getElementsByClassName('key');
keys.forEach((ele) => {
ele.addEventListener('click', () => {
 console.log("clicked");
})
});
*/


// add an event listener to listen to keyboard button events
