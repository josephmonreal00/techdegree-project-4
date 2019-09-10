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
        let spaceCount = 0;
        let elesForDiv = [];
        //let spaceIndexes = [];
        //let upTo = [];
        //let startFrom = [];
        for (let i = 0; i < this.phrase.length; i++) {
            if (this.phrase[i] != " ") {
                // create a list element
                let ele = document.createElement('li');
                ele.className = `hide letter ${this.phrase[i]}`;
                ele.textContent = `${this.phrase[i]}`;
                document.getElementById('phrase').appendChild(ele);
                elesForDiv.push(ele);

            }

            if (this.phrase[i] == " ") {
                // create a list element
                //spaceCount += 1;
                //spaceIndexes.push(i);
                //upTo.push(i - 1);
                //startFrom.push(i + 1);
                let ele = document.createElement('li');
                ele.className = 'hide space';
                ele.textContent = `${this.phrase[i]}`;
                document.getElementById('phrase').appendChild(ele);
                elesForDiv.push(ele);
            }
        }
        //console.log(elesForDiv);
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

// methods
/*

     checkLetter() {

     }
     showMatchedLetter() {

     }
    */
