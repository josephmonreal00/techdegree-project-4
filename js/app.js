/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// game is declared outside for it to be global
let game;
const startButton = document.getElementById('btn__reset');
const qwerty = document.getElementById('qwerty');

/*
Adds an event listener to the HTML element with the id of #btn__reset. Inside the event listener a new game instance is created and the startGame method living inside the game class is called.
*/
startButton.addEventListener('click', (e) => {
    game = new Game();
    game.startGame();
})

/*
Event listener is added to the keys only if the condition is met. If the condition is met the key and key value are passed into the games handleInteraction method.
*/
qwerty.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target, e.target.textContent);
    }
})

let keys = document.getElementsByClassName('key');

/*
Event listener that listens for key board events. Inside the for loop it checks to see if the keyboard the user pushed equals one of the keys stored in the keys statement above. If so then the handleInteraction() method living inside the game class is called.
*/
window.addEventListener('keydown', e => {
    let theKey;
    for (let i = 0; i < keys.length; i++) {
        if (keys[i].textContent == e.key && keys[i].disabled != true) {
            theKey = keys[i];
            game.handleInteraction(theKey, e.key);
        }
    }
})
