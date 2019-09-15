/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startButton = document.getElementById('btn__reset');
const qwerty = document.getElementById('qwerty');

startButton.addEventListener('click', (e) => {
    game = new Game();
    game.startGame();
})

qwerty.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target, e.target.textContent);
    }
})

let keys = document.getElementsByClassName('key');

window.addEventListener('keydown', e => {
    let theKey;
    for (let i = 0; i < keys.length; i++) {
        if (keys[i].textContent == e.key) {
            theKey = keys[i];
            game.handleInteraction(theKey, e.key);
        }
    }
})
