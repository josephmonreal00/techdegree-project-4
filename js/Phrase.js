// phrase.js
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    /*
    The phrase class contructor recieves one param
    phrase: This is the actual phrase the Phrase object is representing. This property
    should be set to the `phrase` parameter, but converted to all lower case.
    */
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        let phraseLength = this.phrase.length;
        let elesForDiv = [];
        let ul_ = document.getElementById('phrase').firstElementChild;
        for (let i = 0; i < this.phrase.length; i++) {
            if (this.phrase[i] != " ") {
                let ele = document.createElement('li');
                ele.className = `hide letter ${this.phrase[i]}`;
                ele.textContent = `${this.phrase[i]}`;
                ul_.appendChild(ele);
                elesForDiv.push(ele);

            }

            if (this.phrase[i] == " ") {
                let ele = document.createElement('li');
                ele.className = 'hide space';
                ele.textContent = `${this.phrase[i]}`;
                ul_.appendChild(ele);
                elesForDiv.push(ele);
            }
        }
    }

    // checks to see if the letter selected matches a letter in the phrase.
    checkLetter(key, letter, pObj) {
        for (let i = 0; i < this.phrase.length; i++) {
            if (this.phrase[i] == letter) {
                this.showMatchedLetter(key, letter);
            }
            // else it should call the removeLife() method in the game class (MAYBE)?
        }
    }

    // reveals the letter(s) on the board that matches the player's selection. To reveal
    // the matching letter(s), select all of the letter DOM elements that have a CSS class name
    // that matches the selected letter and replace each selected element's `hide` CSS class
    // with the `show` CSS class.
    showMatchedLetter(key, letter_) {
        const phraseEle = document.getElementsByClassName("hide letter");
        //console.log(letter);
        for (let i = 0; i < phraseEle.length; i++) {
            if (phraseEle[i].textContent == letter_) {
                phraseEle[i].className = `show letter ${phraseEle[i].textContent}`;
                //key.style.backgroundColor = 'yellow';
                key.className = `key chosen`;
                key.disabled = true;
            }
        }
    }
}
