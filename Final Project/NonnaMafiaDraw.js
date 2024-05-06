var background;

//kitchen things
var oven;
var fridge;
var sink;
var door;

var cabinets1;
var cabinets2;
var cabinets3;


var myAnimation;
var walkPaths;
var idlePaths;
var attackPaths;


function preload()
{
    background = loadImage('Assets/Background/kitchenBackground.png')
    walkPaths = loadStrings('Assets/NonnaSprites/walking.txt');
    idlePaths = loadStrings('Assets/NonnaSprites/idle.txt');
    attackPaths = loadStrings('Assets/NonnaSprites/attack.txt');

    faucet = loadImage('Assets/Background/Faucet.jpg');
    oven = loadImage('Assets/Background/oven.png');
    door = loadImage('Assets/Background/Metal Door.jpg');
    fridge = loadImage("Assets/Background/Fridge_icon_2.png");
    sink = loadImage("Assets/Background/sink.jpg");
    

    cabinets1 = loadImage("Assets/Background/cabinet.png");
    cabinets2 = loadImage("Assets/Background/cabinet.png");
    cabinets3 = loadImage("Assets/Background/cabinet.png");
    
    
}

function setup()
{
    createCanvas(1000,800);
    myAnimation = new animation(600,600,125,219);
    myAnimation.loadAnimation('idle', idlePaths);
    myAnimation.loadAnimation('walk', walkPaths);
    myAnimation.loadAnimation('attack', attackPaths);
    myAnimation.rotation = 0;

   // sink = createSprite(275,165,'static');
    //sink.img = "Assets/Background/sink.jpg";
    

}

function draw()
{
    image(background,0,0);
    fill ('#874a3d');
    rect(200,175,150,100);
    image(faucet,225,60);
    image(oven,542,138);
    image(door,25,-10);
    image(fridge,720,50);
    image(sink,200,120);
    image(cabinets1,480,138);
    image(cabinets2,415,138);
    image(cabinets3,645,138);


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
        else if (kb.pressing('x')) 
        {
        myAnimation.drawAnimation('attack');
        }
        else
        {

            myAnimation.drawAnimation('idle');
        }
        
}

