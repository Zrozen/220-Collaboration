class animationImages
{
    constructor(fileName,x,y)
    {
        this.fileName = fileName;
        this.x = x;
        this.y = y;
        this.speed = 5;
    }

    drawAnimation()
    {
        image(this.fileName,this.x,this.y)
    }

    //duck movement update
    updatePosition(duckyX,duckyY)
    {
        this.x = duckyX;
        this.y = duckyY;
    }

    
}