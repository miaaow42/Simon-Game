
let buttonColors = ["red","blue","green","yellow"];

let gamePattern = [];

 function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 4 );
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    
    
    
} 
$("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100) = randomChosenColor;
let audio = new Audio('sounds/green.mp3');
audio.play();

