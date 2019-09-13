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
        console.log(aPhrase);
        this.activePhrase = aPhrase;

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
        const phraseToArr = phraseObj.phrase.split("");
        console.log(phraseToArr.indexOf(keyValue));
        if (phraseToArr.indexOf(keyValue) >= 0) {
            phraseObj.checkLetter(keyClicked, keyValue, phraseObj);
            this.checkForWin();
        }

        if (phraseToArr.indexOf(keyValue) == -1) {
            keyClicked.className = `key wrong`;
            keyClicked.disabled = true;
            this.removeLife();
        }
    }

    // this method checks to see if the player has revealed all of the letter
    // in the active phrase.
    // this.activephrase
    checkForWin() {
        let lettersOnScreen = document.getElementsByClassName('show');
        console.log('----', this.activePhrase.phrase.length - 1);
        console.log('------', document.getElementsByClassName('show').length);
        if (this.activePhrase.phrase.length - 1 === document.getElementsByClassName('show').length) {
            this.gameOver();
        }
        //console.log(this.activePhrase.phrase.length - 1);
        //console.log(document.getElementsByClassName('show').length);
    }


    // this method removes a life form the scoreboard, by replacing one of the `liveHeart.png` images with a `lostHeart.png`
    // image (found in the `images` folder) and increments the `missed property. If the player has five misssed guesses (i.e they're out of lives)
    // end the game by calling gameOver() method
    removeLife() {
        console.log(`missed`, this.missed);


        let hearts = document.getElementsByClassName('tries');
        //console.log(`hearts length`, hearts.length);
        //console.log(`inside removelife`, hearts[hearts.length - this.missed].firstChild);
        //hearts[hearts.length - this.missed].firstChild.src = `images/lostHeart.png`;

        if (this.missed == 5) {
            this.gameOver();
        }
    }


    gameOver() {
        console.log(document.getElementById('phrase').firstElementChild); //.childNodes[0]);
        console.log(document.getElementById('phrase').firstElementChild.childNodes.length);


        if (this.missed == 5) {
            document.getElementById('game-over-message').innerHTML = `You have lost the game.`;
            document.getElementById('overlay').className = "lose";
            document.getElementById('overlay').style.visibility = "";


            let hearts = document.getElementsByClassName('tries');
            console.log('inside gameover loss', hearts);

            for (let i = 0; i < hearts.length; i++) {
                hearts[i].firstChild.src = `images/liveHeart.png`;
            }

            let keys = document.getElementsByClassName('key');
            for (let i = 0; i < keys.length; i++) {
                keys[i].className = `key`;
                keys[i].disabled = false;
            }

            document.getElementById('phrase').firstElementChild.remove();
            document.getElementById('phrase').appendChild(document.createElement('UL'));

        } else {
            document.getElementById('game-over-message').innerHTML = "You have won the game.";
            document.getElementById('overlay').className = "win";
            document.getElementById('overlay').style.visibility = "";

            let hearts = document.getElementsByClassName('tries');
            console.log('inside gameover win', hearts);

            for (let i = 0; i < hearts.length; i++) {
                hearts[i].firstChild.src = `images/liveHeart.png`;
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
}
