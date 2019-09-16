 /* Treehouse FSJS Techdegree
  * Project 4 - OOP Game App
  * Game.js */

 class Game {

     /* Game Constructor
        Properties
        1. missed: used to track the number of missed gueses by the player. The inital value is 0. 
        2. phrases: an array of five Phrase objects to use with the game. A phrase should only include letters and spaces - no numbers, punctuation or other special characters.
        3. activePhrase: this is the Phrase object that's currently in play. The initial value is null.
     */
     constructor() {
         this.missed = 0;
         this.phrases = this.createPhrases();
         this.activePhrase = null;
     }

     /*
        createPhrases():
            Description: returns an array containing five phrase objects
            
            Params: None
            
            Local Variables:
            1. thePhrases: stores an array of five string in this case five NFL football teams
            2. arr: stores a brand new array return by the map function consisting of five new phrase objects.
            
            Returns: an array containing five phrase objects 
     */

     createPhrases() {
         let thePhrases = ['Denver Broncos', 'Oakland Raiders', 'Arizona Cardinals', 'Miami Dolphins', 'Dallas Cowboys'];
         let arr = thePhrases.map((cur, ind, arr) => {
             return new Phrase(cur);
         })
         return arr;
     }

     /*
        getRandomPhrase():
            Description: returns a random phrase when called
            
            Params: None
            
            Local Variables: None
            
            Returns: return one randomly selected array from the array of phrase objects
     */

     getRandomPhrase() {
         return this.phrases[Math.floor(Math.random() * 5)];
     }

     /*
        startGame(): 
            Description: hides the element with an id of #overlay and then retrieves a random phrase by using the getRandomPhrase() method. Then it stores the active phrase into the property activePhrase and then calls the Phrase class method addPhraseToDisplay().
            
            Params: None
            
            Local Variables:
            1. hideEle: stores the HTML element with an id of #overlay
            2. currentPhrase: stores a random phrase of the five living in this.phrases
            3. this.activePhrase: property is set to the current phrase the game is using
            
            Returns: return one randomly selected array from the array of phrase objects
     */

     startGame() {
         let hideEle = document.getElementById('overlay');
         hideEle.style.visibility = "hidden";

         let currentPhrase = this.getRandomPhrase();
         this.activePhrase = currentPhrase;
         currentPhrase.addPhraseToDisplay();
     }

     /*
        handleInteraction(key, keyValue): 
            Description: has two parameters that retrieve the actual key element that was selected which is represented by key and also receives the textContent inside the key and is represented by keyValue. Method then contains two different if statements checking whether the selected keyValue is exists within the newly created array `phraseToArr`. If it exists within phraseToArr the key and keyValue are passed onto the Phrase class method checkLetter. After that statement is executed the current game object represented with the this keyword calls the method checkForWin. If the key value doesn't exist with the phraseToArr array then the second if statement executes and sets the class name of the key to `key wrong` and sets the key to disabled. After those two statement the current game object represented by this called the game class removeLife method.
            
            Params: key, keyValue
            1. key: represents the key that is selected from the keyboard that is passed in from the app.js class.
            2. keyValue: stores that textContent that is inside the key
            
            Local Variables:
            1. phraseToArr: uses the content in the this.activePhrase property and creates an array of characters 
            
            Returns: Nothing
     */

     handleInteraction(key, keyValue) {
         let phraseToArr = this.activePhrase.phrase.split("");

         if (phraseToArr.includes(keyValue) == true) {
             this.activePhrase.checkLetter(key, keyValue);
             this.checkForWin();
         }

         if (phraseToArr.includes(keyValue) == false) {
             key.className = `key wrong`;
             key.disabled = true;
             this.removeLife();
         }
     }

     /*
        checkForWin(): 
            Description: checks for win by checking the lenght of the array against the length of the current phrase subtracted by 1 that is stored inside the this.activePhrase property.
            
            Params: None
            
            Local Variables:
            1. lettersOnScreen: stores all of the elements with the `show` class and is stored as a nodeList or array
            
            Returns: Nothing
     */

     checkForWin() {
         let lettersOnScreen = document.getElementsByClassName('show');
         if (this.activePhrase.phrase.length - 1 === document.getElementsByClassName('show').length) {
             this.gameOver();
         }
     }

     /*
        removeLife(): 
            Description: stores all of the img elements and then stores all five into the variable called array. Variable corazones then stores a brand new array that is created using the filter method and checks if each tagName equals IMG. After is changes the value of the .src attribute on the image element. At last there is an if statement checking if the this.missed property equals five if so the game class gameOver method is called.
            
            Params: None
            
            Local Variables:
            1. hearts: stores the image elements 
            2. array: stores the image element as an array
            3. corazones: double checks each image element for tagName to equal IMG
            
            Returns: Nothing
     */

     removeLife() {
         this.missed += 1;

         let hearts = document.getElementsByTagName('img');
         let array = [hearts[0], hearts[1], hearts[2], hearts[3], hearts[4]];

         let corazones = array.filter((element) => {
             if (element.tagName == 'IMG') {
                 //console.log(element);
                 return element;
             }
         });

         corazones[corazones.length - this.missed].src = `images/x.png`;

         if (this.missed == 5) {
             this.gameOver();
         }
     }

     /*
        gameOver(): 
            Description: methods resets all the keys that have been clicked on and sets the className for each key back to original state. Method also sets all of the image elements back to the original images after been changed when user clicked on the incorrect keys. Sets the this.activePhrase back to null. Also has to iff statements determining the presentation to be shown to the user depending on the this.missed property. 
            
            Params: None
            
            Local Variables:
            1. hearts: stores the image elements 
            2. keys: stores all the keys on the keyboard
            
            Returns: Nothing
     */

     gameOver() {
         let hearts = document.getElementsByTagName('img');

         for (let i = 0; i < hearts.length; i++) {
             hearts[i].src = `images/skull.png`;
         }

         let keys = document.getElementsByClassName('key');

         for (let i = 0; i < keys.length; i++) {
             keys[i].className = `key`;
             keys[i].disabled = false;
         }

         document.getElementById('phrase').firstElementChild.remove();
         document.getElementById('phrase').appendChild(document.createElement('UL'));

         this.activePhrase = null;

         if (this.missed == 5) {
             document.getElementById('game-over-message').innerHTML = `You have lost the game.`;
             document.getElementById('overlay').className = "lose";
             document.getElementById('overlay').style.visibility = "";
         } else {
             document.getElementById('game-over-message').innerHTML = "You have won the game.";
             document.getElementById('overlay').className = "win";
             document.getElementById('overlay').style.visibility = "";
         }
     }
 }
