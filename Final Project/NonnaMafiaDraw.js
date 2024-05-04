var background;

//kitchen things
var oven;
var fridge;
var cabinets1;
var cabinets2;
var cabinets3;
var door;


var myAnimation;
var walkPaths;
var idlePaths;


function preload()
{
    background = loadImage('Assets/Background/kitchenBackground.png')
    walkPaths = loadStrings('Assets/NonnaSprites/walking.txt');
    idlePaths = loadStrings('Assets/NonnaSprites/idle.txt');
    
}

function setup()
{
    createCanvas(1000,800);
    myAnimation = new animation(600,600,125,219);
    myAnimation.loadAnimation('idle', idlePaths);
    myAnimation.loadAnimation('walk', walkPaths);
    //myAnimation.loadAnimation('attack', attackPaths);
    myAnimation.rotation = 0;

    oven = createSprite(600,200,'static');
    oven.img = "Assets/Background/oven.png";
    door = createSprite(100,100,'static');
    door.img = "Assets/Background/Metal Door.jpg";
    cabinets1 = createSprite(510,200,'static');
    cabinets1.img = "Assets/Background/cabinet.png";
    cabinets2 = createSprite(440,200,'static');
    cabinets2.img = "Assets/Background/cabinet.png";
    cabinets3 = createSprite(690,200,'static');
    cabinets3.img = "Assets/Background/cabinet.png";
    fridge = createSprite(790,175,'static');
    fridge.img = "Assets/Background/Fridge_icon_2.png";
    

}

function draw()
{
    image(background,0,0);
}

if(kb.pressing('d'))
{
    myAnimation.updatePosition('forward');
    myAnimation.drawAnimation('walk');  
}
else if(kb.pressing('a'))
{
    myAnimation.updatePosition('reverse');
    myAnimation.drawAnimation('walk');  
       
}
else if(kb.pressing('w'))
{
    myAnimation.updatePosition('up');
    myAnimation.drawAnimation('walk');
}
else if(kb.pressing('s'))
{
    myAnimation.updatePosition('down');
    myAnimation.drawAnimation('walk');
}
else
{
    myAnimation.drawAnimation('idle');
}
