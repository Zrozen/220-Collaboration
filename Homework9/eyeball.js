//texture vars
var balloonTex;
var skyTex;
var blueStarTex;
var purpleCDsTex;
var veinTex;
var irisTex;

//3D model
var eyeBall;

let pg;

//simple shape vars
//var boxShape;
var boxes = [];
var b;
var boxX = 200;
var boxY = 200;

var box2x = 150;
var box2y = 150;


function preload()
{
    balloonTex = loadImage('Assets/Textures/balloonTexture.jpg');
    heartTex = loadImage('Assets/Textures/heartStonesTexture.jpg');
    skyTex = loadImage('Assets/Textures/skyHeartsTexture.jpg');
    fabricTex = loadImage('Assets/Textures/fabricTexture.jpg');
    blueStarTex = loadImage('Assets/Textures/blueStars.jpg');
    purpleCDsTex = loadImage('Assets/Textures/purpleCDs.jpg');

    veinTex = loadImage('Assets/Textures/Veins.png');
    irisTex = loadImage('Assets/Textures/Iris.png');

    eyeBall = loadModel('Assets/eyeBall.stl', true);
}

function setup()
{

createCanvas(600,600,WEBGL)
textureMode(NORMAL);
pg = createGraphics(256,256);

boxes.push(new shape("box",balloonTex,50,50,50,boxX,boxY));
boxes.push(new shape("box2",skyTex,75,75,75,box2x,box2y));
boxes.push(new shape("box3",purpleCDsTex,60,60,60,100,100));
boxes.push(new shape("box4",blueStarTex,80,80,80,150,150));


}

function draw()
{
//push()
////image(skyTex,-300,-300);
//pop()
//eyeball
push();
rotateX(frameCount * 0.01);
rotateY(frameCount * 0.01);
texture(veinTex);
scale(1);
model(eyeBall,100,100,100);
pop();

//other simple shapes
push();
noStroke();
for (var b = 0; b < boxes.length; b++) 
{
    if (mouseIsPressed)
    {
        boxX = 10;
        boxY = 10;
        box2x = 100;
        box2Y = 100;
    
        console.log(mouseIsPressed = print)
    
    }
    else
    {
        boxes[b].display(frameCount);
    }
    
    
    
}
pop();

if (mouseIsPressed)
{
    boxX = 10;
    boxY = 10;

    console.log(mouseIsPressed = print)

}



}
    






