var strawberryTexture;
var fillingTexture;
var frostingTexture;
var cakeTexture;

var wallpaper;

let pg;

//var myFont;

function preload()
{
    //background
    wallpaper = loadImage('background.jpg');
    //textures
    strawberryTexture = loadImage('textures/strawberryTexture.jpg');
    fillingTexture = loadImage('textures/strawberryTexture.jpg');
    frostingTexture = loadImage('textures/frostingTexture.jpg');
    cakeTexture = loadImage('textures/cakeTexture.jpg');
  
}

function setup()
{
    createCanvas(600,600,WEBGL);
    textureMode(NORMAL);
    pg = createGraphics(256,256);
}

function draw()
{
    background(200);
    image(wallpaper,-300,-300);

    //cake layer 1
    push();
    texture(cakeTexture);
    translate(-50,50);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    cylinder(100, 25, 24, 24, false, true);
    pop();
    //fillinglayer 1
    push();
    texture(fillingTexture)
    translate(-50,25);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    cylinder(100, 25, 24, 24, false, true);
    pop();
    //cake layer 2
    push();
    texture(cakeTexture);
    translate(-50,0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    cylinder(100, 25, 24, 24, false, true);
    pop();
    //fillinglayer 2
    push();
    texture(fillingTexture);
    translate(-50,-25);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    cylinder(100, 25, 24, 24, false, true);
    pop();
    //cake layer 3 (final cake layer)
    push();
    texture(cakeTexture);
    translate(-50,-50);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    cylinder(100, 25, 24, 24, false, true);
    pop();
    //frosting layer
    push();
    texture(frostingTexture);
    translate(-50,-75);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    cylinder(100, 25, 24, 24, false, true);
    pop();
    //strawberry on top
    push();
    texture(strawberryTexture);
    noStroke()
    translate(-50,-100);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    sphere(40);
    pop();

    push();
    pg.background(255);
    pg.textSize(35);
    pg.fill('red');
    pg.text('Spinning in', 5, 50);
    pg.text('the Strawberry',5,90);
    pg.text('void',5,130);
    pg.fill('pink');
    pg.text('by: Lila Freese',5,180);
    pg.fill('green');
    pg.text('using p5js',5,230);
    
    
    //pass graphics as texture
    texture(pg);
    noStroke();
    translate(200,200);
    plane(200);
    pop ();



    
}


    
