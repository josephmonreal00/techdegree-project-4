/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    /*
    The game class contructor method doesn't receive any parameters. The Game class
    has the following properties.
    missed: Used to track the number of missed guesses by the players. The initial value is `0`, since no guesses have been made at the start of the game.
    phrases: An array of Phrase objects to use with the game. For now, initialize the property to an empty array. 
    activePhrase: This is the phrase object that's currently in play. The initial
    value is set to `null`
    */
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    createPhrases() {
        const thePhrases = ['Denver Broncos', 'Oakland Raiders', 'Arizona Cardinals', 'Miami Dolphins', 'Dallas Cowboys'];
        const arr = thePhrases.map((cur, ind, arr) => {
            return new Phrase(cur);
        });
        return arr;
    }
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * 5)];
    }


    // methods
    /*
    startGame(){
    
    }
    handleInteraction() {
    
    }
    
    removeLife() {
    
    }
    
    checkForWin() {
    
    }
    
    gameOver() {
    
    }
    */
}
