words = ['WHICH', 'OTHER', 'THREE', 'EAGLE', 'SHADY', 'ABOVE', 'ADULT', 'BONES', 'BONKS', 'CONES', 'TREES', 'MILES', 'GLOVES', 'SEIZE', 'PIZZA', 'SPACE', 'LEMON', 'APPLE', 'LUNCH', 'MAYBE', 'CLOTH', 'CLOWN', 'TOWEL', 'STONE', 'EBONY', 'EAGER', 'EXTRA', 'HOPES'];

let charsOfWord;
let charsOfChoice = [];

const gridContainer = document.querySelector('.gridContainer');
const box = document.querySelector('.box');
const letters = document.querySelectorAll(".letter");

let roundNum = 0;
let letterCounter = 0;
let boxID = '#box' + roundNum;

let gameWon = false;

function initializeGame() {
    createBoxes(5);
    pickRandomWord();
}

initializeGame()


function createBoxes(numBox) {
    for (let i = 0; i < numBox; i++) {
        const row = gridContainer.appendChild(document.createElement('div'));
        for (let j = 0; j < numBox; j++) {
            const square = document.createElement('div');
            square.className = 'box';
            square.id = 'box' + [i] + [j];
            row.appendChild(square);
        }
    }
}

function pickRandomWord() {
    let word = words[Math.floor(Math.random() * words.length)]
    charsOfWord = word.split('');
    return(charsOfWord);
}

function compareBothWords() {  
    if (charsOfChoice.toString() === charsOfWord.toString()) {
        gameWon = true;
    }

    for (i = 0; i < 5; i++) {
        let letterPosition = charsOfWord.indexOf(charsOfChoice[i]);
        if (letterPosition === -1) {
            document.querySelector(boxID + i).style.backgroundColor = 'grey';
            document.getElementById(charsOfChoice[i]).style.backgroundColor = 'grey';
        } else {
            if (charsOfChoice[i] == charsOfWord[i]) {
                console.log(`this letter is a match: ${charsOfChoice[i]}`);
                document.querySelector(boxID + i).style.backgroundColor = 'green';
            } else {
                document.querySelector(boxID + i).style.backgroundColor = 'yellow';
            }

        }

    }
    console.log(`My word is ${charsOfChoice}, the computer choice is ${charsOfWord}`);
}


function playerWordsIntoBoxes() {
    for (let i = 0; i < 5; i++) {
        document.querySelector(boxID + i).innerText = charsOfChoice[i];
    }
}

letters.forEach(letter => {
    letter.addEventListener("click", e => {
        if (charsOfChoice.length < 5) {
            charsOfChoice.push(letter.innerHTML);
            document.querySelector(boxID + letterCounter).innerText = letter.innerHTML;
            letterCounter += 1
            console.log(charsOfChoice);
        } else {
            console.log('too many characters');
        }    
    })
})

function submitClicked() {
    compareBothWords();
    playerWordsIntoBoxes();
    incrementRound();
    letterCounter = 0;
    charsOfChoice = [];
}

function incrementRound() {
    roundNum += 1;
    boxID = '#box' + roundNum
    if ((roundNum == 5) && (charsOfChoice.toString() != charsOfWord.toString())) {
        alert('you lose the word was: ' + charsOfWord.join(''));
    }

    if (gameWon == true) {
        alert('you win');
    }
}
