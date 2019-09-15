// phrase.js
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {

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

    checkLetter(key, keyValue) {
        for (let i = 0; i < this.phrase.length; i++) {
            if (this.phrase[i] == keyValue) {
                this.showMatchedLetter(key, keyValue);
            }
        }
    }

    showMatchedLetter(key, keyValue) {
        let phraseEle = document.getElementsByClassName("hide letter");
        for (let i = 0; i < phraseEle.length; i++) {
            if (phraseEle[i].textContent == keyValue) {
                phraseEle[i].className = `show letter ${phraseEle[i].textContent}`;
                key.className = `key chosen`;
                key.disabled = true;
            }
        }
    }
}
