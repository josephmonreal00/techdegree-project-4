 /* Treehouse FSJS Techdegree
  * Project 4 - OOP Game App
  * Game.js */
 class Game {

     constructor() {
         this.missed = 0;
         this.phrases = this.createPhrases();
         this.activePhrase = null;
     }

     createPhrases() {
         let thePhrases = ['Denver Broncos', 'Oakland Raiders', 'Arizona Cardinals', 'Miami Dolphins', 'Dallas Cowboys'];
         let arr = thePhrases.map((cur, ind, arr) => {
             return new Phrase(cur);
         })
         return arr;
     }

     getRandomPhrase() {
         return this.phrases[Math.floor(Math.random() * 5)];
     }

     startGame() {
         let hideEle = document.getElementById('overlay');
         hideEle.style.visibility = "hidden";

         let currentPhrase = this.getRandomPhrase();
         this.activePhrase = currentPhrase;
         currentPhrase.addPhraseToDisplay();
     }

     handleInteraction(key, keyValue) {
         let phraseToArr = this.activePhrase.phrase.split("");

         console.log("handleInteraction", phraseToArr.includes(keyValue));

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

     checkForWin() {
         let lettersOnScreen = document.getElementsByClassName('show');
         console.log(lettersOnScreen);
         if (this.activePhrase.phrase.length - 1 === document.getElementsByClassName('show').length) {
             this.gameOver();
         }
     }

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

         corazones[corazones.length - this.missed].src = `images/lostHeart.png`;

         if (this.missed == 5) {
             this.gameOver();
         }
     }

     gameOver() {
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
