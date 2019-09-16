// phrase.js
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {

    /* Phrase Constructor
        Arguments: 
        1. phrase: receives an argument each an everytime a new Phrase object is created. 
        
        Property: 
        1. phrase: stores the phrase passed in when a phrase object is created as a lower case version

     */

    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /*
        addPhraseToDisplay():
            Description: methods adds all of the letters of the phrase onto the screen
            
            Params: None
            
            Local Variables:
            1. phraseLength: stores an array of five string in this case five NFL football teams
            2. elesForDiv: really not used for anything just stored the elements
            
            Returns: Nothing
     */
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

    /*
        checkLetter(key, keyValue):
            Description: checks if the keyValue equals a letter within the current phrase if so then the phrase showMatchedLetter method is called.
            
            Params: None
            
            Local Variables: None
            
            Returns: Nothing
     */
    checkLetter(key, keyValue) {
        for (let i = 0; i < this.phrase.length; i++) {
            if (this.phrase[i] == keyValue) {
                this.showMatchedLetter(key, keyValue);
            }
        }
    }

    /*
        showMatchedLetter(key, keyValue):
            Description: checks all of the elements with the `hide letter` class and if the letter that the user has selected equals a letter that exists inside the current phrase the game is using then the key the user selected will have the class name change to `chosen` and the disabled property will be set to true. Most importantly the letter will be displayed to the user by changing the class name from `hide letter` to `show letter`
            
            Params: key, keyValue
            1. key: represents the key that the user selected
            2. keyValue: represents the value stored inside the key 
            
            Local Variables: 
            1.phraseEle: stores a nodeList of all the HTML element with the class name of `hide letter`
            
            Returns: Nothing
     */
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
