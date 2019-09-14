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

    startGame() {
        let hideEle = document.getElementById('overlay');
        hideEle.style.visibility = "hidden";

        let aPhrase = this.getRandomPhrase();
        this.activePhrase = aPhrase;
        console.log(aPhrase.phrase);

        let phraseObj = new Phrase(aPhrase.phrase);
        phraseObj.addPhraseToDisplay();

        let keys = document.getElementsByClassName('key');

        for (let i = 0; i < keys.length; i++) {
            keys[i].addEventListener('click', () => {
                this.handleInteraction(keys[i], keys[i].textContent, phraseObj);
            });
        }
    }

    handleInteraction(keyClicked, keyValue, phraseObj) {
        let phraseToArr = phraseObj.phrase.split("");
        console.log(`includes() letter ${keyValue} ${phraseToArr.includes(keyValue)}`)
        //console.log("includes() letter", phraseToArr.includes(keyValue));

        if (phraseToArr.includes(keyValue) == false) {
            keyClicked.className = `key wrong`;
            keyClicked.disabled = true;
            this.missed += 1;
            this.removeLife();
        } else {
            phraseObj.checkLetter(keyClicked, keyValue, phraseObj);
            this.checkForWin();
        }

        /*
        if (phraseToArr.indexOf(keyValue) >= 0) {
            phraseObj.checkLetter(keyClicked, keyValue, phraseObj);
            this.checkForWin();
        }

        if (phraseToArr.indexOf(keyValue) == -1) {
            keyClicked.className = `key wrong`;
            keyClicked.disabled = true;
            this.removeLife();
        }
        */
    }

    checkForWin() {
        let lettersOnScreen = document.getElementsByClassName('show');
        console.log(lettersOnScreen);
        if (this.activePhrase.phrase.length - 1 === document.getElementsByClassName('show').length) {
            console.log(this.missed);
            this.gameOver();
        }
    }

    removeLife() {
        if (this.missed > 4) {
            this.gameOver();
        }
        let hearts = document.getElementsByTagName('img');
        hearts[hearts.length - this.missed].src = `images/lostHeart.png`;

    }


    gameOver() {
        if (this.missed == 5) {
            document.getElementById('game-over-message').innerHTML = `You have lost the game.`;
            document.getElementById('overlay').className = "lose";
            document.getElementById('overlay').style.visibility = "";
        }

        if (this.missed < 5) {
            document.getElementById('game-over-message').innerHTML = "You have won the game.";
            document.getElementById('overlay').className = "win";
            document.getElementById('overlay').style.visibility = "";
        }

        let hearts = document.getElementsByTagName('img');

        for (let i = 0; i < hearts.length; i++) {
            hearts[i].src = `images/liveHeart.png`;
        }

        let keys = document.getElementsByClassName('key');

        for (let i = 0; i < keys.length; i++) {
            keys[i].className = `key`;
            keys[i].disabled = false;
        }

        document.getElementById('phrase').firstElementChild.remove();
        document.getElementById('phrase').appendChild(document.createElement('UL'));

    }
}
