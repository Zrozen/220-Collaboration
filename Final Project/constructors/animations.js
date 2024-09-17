class animation
{
    constructor(x,y,w,h)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.currentAnimation;
        this.createAnimation();
        this.rotationSpeed;
        this.direction = "";

    }

    getX()
    {
        return this.x;
    }

    setX(x)
    {
        this.x = x;
    }

    setCurrentFrameCount(currentFrameCount)
    {
        this.currentFrameCount = currentFrameCount;
    }

    createAnimation()
    {
        this.currentAnimation = createSprite(this.x, this.y);
        
        
    }

    loadAnimation(animationType, fileNames)
    {
        this.currentAnimation.addAnimation(animationType, fileNames[0], fileNames[fileNames.length - 1]);
        this.currentAnimation.width = 300;
        this.currentAnimation.height = 150;
    }

    drawAnimation(animationType)
    {
        //this.currentAnimation.changeAnimation(animationType);
        //drawSprites();
        this.currentAnimation.frameDelay = 5;
        
        //this.currentAnimation.scale;
        this.currentAnimation.changeAnimation(animationType);
        if (animationType == 'walk' && this.direction == 'forward') 
        {
            this.currentAnimation.direction = 0;
            this.currentAnimation.mirror.x = false;
            this.currentAnimation.speed = 1;
            this.currentAnimation.rotationSpeed = 0;

        }
        else if (animationType == 'walk' && this.direction == 'reverse') 
        {

            this.currentAnimation.mirror.x = true;
            this.currentAnimation.direction = 180;
            this.currentAnimation.speed = 1;
            this.currentAnimation.rotationSpeed = 0;

        }
        else if (animationType == 'walk' && this.direction == 'up')
        {
            this.currentAnimation.y += -1;
            this.currentAnimation.speed = 1;
            this.currentAnimation.rotationSpeed = 0;
        }
        else if (animationType == 'walk' && this.direction == 'down')
        {
            this.currentAnimation.y += 1;
            this.currentAnimation.speed = 1;
            this.currentAnimation.rotationSpeed = 0;
        }
        else 
        {
            
            this.currentAnimation.velocity.x = 0;
            this.currentAnimation.rotationSpeed = 0;
        }
    }
    
    incrementIndex()
    {
        if(this.currentFrameCount % 5 == 0)
        {
            this.i++;
        }
        if(this.i >= this.fileNames.length)
        {
            this.i = 0;
        }
    }

    updatePosition(direction)
    {
        this.direction = direction;
    }

    getCurrentAnimation() 
    {
        return this.currentAnimation;
    }
}




