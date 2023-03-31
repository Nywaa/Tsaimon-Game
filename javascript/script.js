//--Variable
var choseableColour = [
    ".greenButton",
    ".redButton",
    ".yellowButton",
    ".blueButton"
];

var gamePattern = [];
var userPattern = [];
var randomColour;

//--Logic
$(document).on("keydown", function start(){
    //Initate level 1
    $("h1").text("Level " + (gamePattern.length + 1));
    randomColour = choseableColour[generateRandom()];
    gamePattern.push(randomColour);

    //Animate the randomly chosen colour
    flashAnimation(randomColour);

    //Giving buttons to have a eventlistener when clicked
    for(let i = 0; i <= choseableColour.length; i++)
    {
        //Pushing clicked colour into userPattern array
        $(choseableColour[i]).on("click", function(){
            var clickedColor = $(this).attr("class")
            userPattern.push("."+clickedColor);
            console.log("User pattern: "+ userPattern);

            //Play audio
            playAudio("."+clickedColor);
            flashAnimation("."+clickedColor);
        });
    }

    // ** Code to check if clicked button same as gamepattern
    

    //Disable keyboard listener when game already started
    $(document).off("keydown");
});

//--Function
function generateRandom()
{
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
};

function nextPattern()
{
    var nextColour = choseableColour[generateRandom()];
    gamePattern.push(nextColour);
}

function flashAnimation(className)
{
    $(className).animate({opacity: 0.5}, "fast")
    .animate({opacity: 1}, "fast")
    .animate({opacity: 0.5}, "fast")
    .animate({opacity: 1}, "fast");
}

function playAudio(className)
{
    switch(className)
    {
        case ".greenButton":
            var green = new Audio("sounds/green.mp3");
            green.play();
            break;
        case ".redButton":
            var red = new Audio("sounds/red.mp3");
            red.play();
            break;
        case ".yellowButton":
            var yellow = new Audio("sounds/yellow.mp3");
            yellow.play();
            break;
        case ".blueButton":
            var blue = new Audio("sounds/blue.mp3");
            blue.play();
            break;
    }
}