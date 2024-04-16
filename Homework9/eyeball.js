//texture vars
var balloonTex;
var skyTex;
var blueStarTex;
var purpleCDsTex;
var veinTex;

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
    skyTex = loadImage('Assets/Textures/skyHeartsTexture.jpg');
    blueStarTex = loadImage('Assets/Textures/blueStars.jpg');
    purpleCDsTex = loadImage('Assets/Textures/purpleCDs.jpg');

    veinTex = loadImage('Assets/Textures/Veins.png');

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
//eyeball
push();
rotateX(frameCount * 0.01);
rotateY(frameCount * 0.01);
texture(veinTex);
scale(1);
model(eyeBall,100,100,50);
pop();

//other simple shapes
push();
noStroke();
for (var b = 0; b < boxes.length; b++) 
{
    if (mouseIsPressed)
    {
        boxX = 0;
        boxX = floor(random(600));

        boxY = 0;
        boxY = floor(random(600));

        box2X = 0;
        box2x = floor(random(400));

        box2Y =0;
        box2Y = floor(random(400));
    
        console.log(mouseIsPressed = print)
    
    }
    else
    {
        boxX = 200;
        boxY = 200;
        box2X = 150;
        box2X = 150;
        boxes[b].display(frameCount);

    }
   
}
pop();
//text title
push();
noStroke();
pg.background('#d1b9ff');
translate(200,200);
rotateY(frameCount * 0.01);
pg.textSize(30);
pg.fill('white');
pg.text('Eye Ball', 50, 50);
pg.text('In Candy Land', 50,100);
pg.textSize(20);
pg.text('Made by:',50,150);
pg.text('Lila Freese', 50,175);
texture(pg);
plane(200);
pop();


}
    






