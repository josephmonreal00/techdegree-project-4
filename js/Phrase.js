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

    /*
        This method adds letter placeholders to the display when the game starts. Each letter is presented by an empty box, one list item for each letter. See the example_phrase_html.txt file for an example of what the render HTML for a phrase should look like when the game starts, including any `id` of `class` attributes needed. When the players correctly guesses a letter, the empty box is replaced with the matched letter -- see the `showMatchedLetter` method below.
        
        Make sure the phrase displated on the screen uses the `letter CSS class for letter and `space` CSS class for space.
    */
    addPhraseToDisplay() {
        /*
        let thePhraseDiv = document.createElement('div');
        thePhraseDiv.className = "section";
        thePhraseDiv.id = "phrase";
        */

        let phraseLength = this.phrase.length;
        let spaceCount = 0;
        let elesForDiv = [];
        //let spaceIndexes = [];
        //let upTo = [];
        //let startFrom = [];
        for (let i = 0; i < this.phrase.length; i++) {
            if (this.phrase[i] != " ") {
                // create a list element 
                let ele = document.createElement('li');
                ele.textContent = `${this.phrase[i]}`;
                elesForDiv.push(ele);

            }

            if (this.phrase[i] == " ") {
                // create a list element 
                //spaceCount += 1;
                //spaceIndexes.push(i);
                //upTo.push(i - 1);
                //startFrom.push(i + 1);
                let ele = document.createElement('li');
                ele.textContent = `${this.phrase[i]}`;
                elesForDiv.push(ele);
            }
        }
        console.log(elesForDiv);
        elesForDiv.forEach(function (ele) {
            console.log(ele);
        })
        /*
        console.log(letters);
        console.log(this.phrase.length)
        console.log(upTo);
        console.log(startFrom);
        console.log(spaceIndexes);
        console.log(spaceCount);
        console.log(phraseLength);
        */
    }

    // methods
    /*
    
    checkLetter() {
    
    }
    showMatchedLetter() {
    
    }
    */
}

/*
<div id="phrase" class="section">
    <ul>
        <li class="hide letter h">h</li>
        <li class="hide letter o">o</li>
        <li class="hide letter w">w</li>
        <li class="space"> </li>
        <li class="hide letter a">a</li>
        <li class="hide letter r">r</li>
        <li class="hide letter e">e</li>
        <li class="space"> </li>
        <li class="hide letter y">y</li>
        <li class="hide letter o">o</li>
        <li class="hide letter u">u</li>
    </ul>
</div>
*/
