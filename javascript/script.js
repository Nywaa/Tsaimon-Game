//--Variable
var choseableColour = [
    ".greenButton",
    ".redButton",
    ".yellowButton",
    ".blueButton"
];

var gamePattern = [];

//--Logic
var chosenColour = choseableColour[generateRandom()];
gamePattern.push(chosenColour);

$(chosenColour).animate({opacity: 0.5}, "fast")
.animate({opacity: 1}, "fast")
.animate({opacity: 0.5}, "fast")
.animate({opacity: 1}, "fast");

$(chosenColour).ready(function(){
    switch (chosenColour) 
    {
        case choseableColour[0]:
            var soundGreen = new Audio("sounds/green.mp3");
            soundGreen.play();
            console.log("green");
            break;
    
        case choseableColour[1]:
            var soundRed = new Audio("sounds/red.mp3");
            soundRed.play();
            console.log("red");
            break;
        
        case choseableColour[2]:
            var soundYellow = new Audio("sounds/yellow.mp3");
            soundYellow.play();
            console.log("yellow");
            break;
        
        case choseableColour[3]:
            var soundBlue = new Audio("sounds/blue.mp3");
            soundBlue.play();
            console.log("blue");
            break;
        default:
            break;
    }
});

//--Function
function generateRandom()
{
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
};