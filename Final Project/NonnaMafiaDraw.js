var background;

//kitchen things
var oven;
var fridge;
var sink;
var door;

var cabinets1;
var cabinets2;
var cabinets3;

//sign
var tile;

//NonnaAnimations
var myAnimation;
var walkPaths;
var idlePaths;
var attackPaths;

//CorpseCrusher
var corpse1;
var corpse2;
var corpse3;
//particles
const particles = [];
var p;
var m;
var health = 100;



function preload()
{
    background = loadImage('Assets/Background/kitchenBackground.png')
    walkPaths = loadStrings('Assets/NonnaSprites/idle.txt')
    idlePaths = loadStrings('Assets/NonnaSprites/idle.txt');
    attackPaths = loadStrings('Assets/NonnaSprites/attack.txt');

    faucet = loadImage('Assets/Background/Faucet.jpg');
    oven = loadImage('Assets/Background/oven.png');
    door = loadImage('Assets/Background/Metal Door.jpg');
    fridge = loadImage("Assets/Background/Fridge_icon_2.png");
    sink = loadImage("Assets/Background/sink.jpg");
    tile = loadImage("Assets/Background/redTile.jpg")
    

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

    //corpses
    corpse1 = createSprite(200,600,'static');
    corpse1.img = "Assets/Body.png";
    corpse2 = createSprite(300,300,'static');
    corpse2.img = "Assets/Body.png";
    corpse3 = createSprite(800,300,'static');
    corpse3.img = "Assets/Body.png";
    

}

function draw()
{
    //kitchen decor
    image(background,0,0);
    fill ('#874a3d');
    rect(200,175,150,100);
    image(tile,415,10);
    image(faucet,225,60);
    image(oven,542,138);
    image(door,25,-10);
    image(fridge,720,50);
    image(sink,200,120);
    image(cabinets1,480,138);
    image(cabinets2,415,138);
    image(cabinets3,645,138);

    //text
    textSize(50);
    textFont('blackletter');
    fill('black');
    text('Mafia Nona',450,50);
    textSize(24);
    text('Help Nona Clean the Kitchen!',420,85);
    textSize(20);
    text('WASD to move, X to attack!',450,115);

    //particles
    function createParticles(x,y)
    {
    for (let m = 0; m < 5; m++) 
    {
        let p = new particle(x,y);
        particles.push(p);
    }
    for (let m = particles.length - 1; m >= 0; m--) 
    {
        particles[m].update();
        particles[m].show();

        if (particles[m].finished())
        {
          // remove this particle
          particles.splice(m, 1);
        }
    }
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
        else if (kb.pressing('x')) 
        {
        myAnimation.drawAnimation('attack');
        if (corpse1 != null)
            {
                if (dist(myAnimation.getCurrentAnimation().position.x, myAnimation.getCurrentAnimation().position.y, corpse1.position.x, corpse1.position.y) < 200) 
                {
                createParticles(corpse1.position.x, corpse1.position.y);
                //console.log("destroy");
                health -= 1;
                    
                    if(health <= 0)
                    {
                    corpse1.remove();
                    corpse1 = null;
                    }
                }
            }
        if (corpse2 != null)
            {
                if (dist(myAnimation.getCurrentAnimation().position.x, myAnimation.getCurrentAnimation().position.y, corpse2.position.x, corpse2.position.y) < 200) 
                 {
                    createParticles(corpse2.position.x, corpse2.position.y);
                    //console.log("destroy");
                    health -= 1;
                        
                    if(health <= 0)
                    {
                    corpse2.remove();
                    corpse2 = null;
                    }
                }
             }
             if (corpse3 != null)
                {
                    if (dist(myAnimation.getCurrentAnimation().position.x, myAnimation.getCurrentAnimation().position.y, corpse3.position.x, corpse3.position.y) < 200) 
                     {
                        createParticles(corpse3.position.x, corpse3.position.y);
                        //console.log("destroy");
                        health -= 1;
                            
                        if(health <= 0)
                        {
                        corpse3.remove();
                        corpse3 = null;
                        }
                    }
                 }
    
        }
        else
        {

            myAnimation.drawAnimation('idle');
        }
        
}

