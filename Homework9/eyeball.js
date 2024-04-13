//texture vars
var balloonTex;
var heartTex;
var skyTex;
var fabricTex;
var veinTex;
var irisTex;
//3D model
var eyeBall;

let pg;

//simple shape vars
//var boxShape;
var boxes = [];
var b;

function preload()
{
    balloonTex = loadImage('Assets/Textures/balloonTexture.jpg');
    heartTex = loadImage('Assets/Textures/heartStonesTexture.jpg');
    skyTex = loadImage('Assets/Textures/skyHeartsTexture.jpg');
    fabricTex = loadImage('Assets/Textures/fabricTexture.jpg');

    veinTex = loadImage('Assets/Textures/Veins.png');
    irisTex = loadImage('Assets/Textures/Iris.png');

    eyeBall = loadModel('Assets/eyeBall.stl', true);
}

function setup()
{

createCanvas(600,600,WEBGL)
textureMode(NORMAL);
pg = createGraphics(256,256);

boxes.push(new shape("box",50,50,50,200,200));
boxes.push(new shape("box2",75,75,75,150,150));
boxes.push(new shape("box3",60,60,60,100,100));
boxes.push(new shape("box4",80,80,80,150,150));


}

function draw()
{
push()
image(skyTex,-300,-300);
pop()
//eyeball
push();
rotateX(frameCount * 0.01);
rotateY(frameCount * 0.01);
texture(veinTex);
scale(0.8);
model(eyeBall,100,100,100);
pop();

//other simple shapes
push();
texture(balloonTex);
noStroke();
//boxShape.display();
//pop();

for (var b = 0; b < boxes.length; b++) 
{
    boxes[b].display(frameCount);
}
pop();
}