let userClickedPattern = [];



let buttonColors = ["red","blue","green","yellow"];

let gamePattern = [];

 function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 4 );
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);   

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    let audio = new Audio('sounds/' + randomChosenColor + '.mps');
    audio.play();

} 

$("input").click(function(e){
    let userChosenColor = e.target.id;
    console.log(userChosenColor);

    userClickedPattern.push(userChosenColor);
})

