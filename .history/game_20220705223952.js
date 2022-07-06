let gamePatten = [];

let buttonColors = ["red","blue","green","yellow"];
let randomChosenColor = buttonColors[nextSequence - 1];

function nextSequence(randomNumber){
    randomNumber = Math.floor(Math.random() * 3 ) + 1;
}

console.log(randomChosenColor);