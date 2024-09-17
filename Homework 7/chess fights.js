var chessBackground;

//idle
var idlePaths =[];
var walkPaths =[];
var attackPaths =[];
var i = 0;
var j = 0;

var myAnimation = [];
var animations = [];

var ninjaX = 400;
var ninjaY = 400;


function preload()
{
    

    chessBackground = loadImage("Assets/chessBackground.jpg"); 
    idlePaths = loadStrings("Assets/Sprites/idle String.txt");
    walkPaths = loadStrings("Assets/Sprites/run string.txt");
    attackPaths = loadStrings("Assets/Sprites/Attack String.txt");

}

function setup()
{
    createCanvas(800,800);
    
    for(var i = 0; i < idlePaths.length; i++)
    {   
    var myAnimation = new animationImages(idlePaths[i],ninjaX,ninjaY);
    animations.push(myAnimation);
    }

   

    
}

function draw()
{
    chessBackground.resize(800,600);
    image(chessBackground,0,0);

    for (var i = 0; i < animations.length; i++)
    {
    animations[i].drawAnimation();
    animations[i].updatePosition(ninjaX, ninjaY);
    
    }


}

function incrementIdleIndex()
{
    i++;
    if (i >= animations.length)
    {
        i = 0;
    }
}

function keyPressed()
{
    if(keyCode === UP_ARROW)
    {
        ninjaY -= 10;
    }
    else if(keyCode === DOWN_ARROW)
    {
        ninjaY +=  10;
    }
    if(keyCode === LEFT_ARROW)
    {
        ninjaX -= 10;
    }
    else if(keyCode === RIGHT_ARROW)
    {
        ninjaX += 10;
    }

    for(var j = 0; j < animations.length; j++)
    {
        animations[j].updatePosition(ninjaX, ninjaY);
    }
}



