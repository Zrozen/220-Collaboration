var ghost1X = 100;
var ghost2Y = 300;
var ghost3X = 400;
//var ghost1;
var speed = 1;
var speedG3 =1;

//cassette vars
var myCassettes = [];
let collisionCount = 0;

//gravestones
var graveImage;
var graveImage2;
var graveImage3;

//animations
var myAnimation;
var myWalkAnimation;
var walkPaths = []
var idlePaths = []
var attackPaths = []

//particles
const particles = [];
var p;
var m;




function preload()
{
    background= loadImage('Assets/backgrounds/GraveyardBackground.jpg');

    //animation strings
    walkPaths = loadStrings("Assets/Walking Animation/walkLeft.txt");
    idlePaths = loadStrings("Assets/Walking Animation/idle.txt");
    attackPaths = loadStrings("Assets/AttackAnimation/Attack.txt");

    //cassettes
    greenCass= loadImage('Assets/Boom Box/greenTape.png');
    blueCass= loadImage('Assets/Boom Box/blueTape.png');
    redCass= loadImage('Assets/Boom Box/redTape.png');

    //ghosts
    ghost1= loadImage('Assets/Ghosts/Ghost Small 2.png');
    ghost2= loadImage('Assets/Ghosts/Ghost Tall.png');
    ghost3= loadImage('Assets/Ghosts/Ghost Small.png');

    //graves
    


}

//console.log("Walk paths:", walkPaths);
//console.log("Idle paths:", idlePaths);

function setup()
{
    createCanvas(800,800);

    //console.log(idlePaths.length)
    myAnimation = new animationImage(600,600,125,219);
    myAnimation.loadAnimation('idle', idlePaths);
    myAnimation.loadAnimation('walk', walkPaths);
    myAnimation.loadAnimation('attack', attackPaths);
    myAnimation.rotation = 0;

    //graves
    graveImage = createSprite(725,530,'static');
    graveImage.img = "Assets/Headstones/classic headstone.png";
    
    graveImage2 = createSprite(300,300,'static');
    graveImage2.img = "Assets/Headstones/Crypt.png";

    graveImage3 = createSprite(200,600,'static');
    graveImage3.img = "Assets/Headstones/cross headstone.png";

    //myCassettes[c]= new cassetteShapes(redCass, 100, 400, 40);
    //myCassettes.push(new cassetteShapes(redCass, 50, 50, 40));
    
    for(var c = 0; c < 5; c++)
    {
        myCassettes[c]= new cassetteShapes(random(width), random(height), 40,10);
        
    }

    
}

function draw()
{
    //background
    image(background,0,0);

    //cassettes
    //myCassettes[c].drawImage();

    
    //ghosts
    image(ghost1,ghost1X,500);

    //lil guy by boombox movement
    ghost1X +=speed;

    if(ghost1X >= 250)
    {
        speed *= -1;
    }
    else if(ghost1X <= 10)
    {
        speed *=-1;
    }
    
    //tall dude by tree
    image(ghost2,550,ghost2Y);

    ghost2Y += speed;

    if(ghost2Y >= 800)
    {
        speed *= -1;
    }
    else if(ghost2Y <= 10)
    {
        speed *= -1;
    }
    
    //chill lil guy on tomb
    image(ghost3,ghost3X,380);
    
    ghost3X += speedG3;

    if(ghost3X >= 450)
    {
        speedG3 *= -1;
    }
    else if(ghost3X <= 300)
    {
        speedG3 *= -1;
    }

    //particles
    for (let m = 0; m < 5; m++) 
    {
        let p = new particle();
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


    //cassettes
    //myCassettes[c].drawImage();
    for(var c = 0; c < myCassettes.length; c++)
    {
        myCassettes[c].updatePositionRandomly();
        myCassettes[c].drawImage();
    }

    
    for (var s = 0; s < myCassettes.length; s++) 
    {
        var cassette = myCassettes[s];

        if(myAnimation.x < cassette.x + myAnimation.w &&
            myAnimation.x + 96 > cassette.x &&
            myAnimation.y < cassette.y + cassette.w &&
            myAnimation.y + 96 > cassette.y)
            {
                
                collisionCount--;
                myCassettes.splice(s,1);
               
                
            }
            
    }
            
    //movement
    if(kb.pressing('d'))
    {
        myAnimation.updatePosition('forward');
        myAnimation.drawAnimation('walk');  
        
        
        if(myAnimation.isColliding(graveImage,graveImage2,graveImage3))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');
        }   
       
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
        if (graveImage != null)
        {
        if (dist(myAnimation.getCurrentAnimation().position.x, myAnimation.getCurrentAnimation().position.y, graveImage.position.x, graveImage.position.y) < 200) 
        {
            console.log("destroy");
            graveImage.remove();
            graveImage = null;
        }
        }
    }
   else
    {
        myAnimation.drawAnimation('idle');
    }

    graveImage3.debug = mouseIsPressed;


}




