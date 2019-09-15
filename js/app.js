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
