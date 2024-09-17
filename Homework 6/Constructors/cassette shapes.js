class cassetteShapes
{
    constructor(x,y,diameter)
    {
        this.x = x;
        this.y = y;
        this.diameter = diameter;
        this.speedX = random(-2,2);
        this.speedY = random(-2,2);

    }

    drawImage()
    {
        rect(this.x,this.y,this.diameter);
    }

    updatePositionRandomly() 
    {
        this.x += this.speedX;
        this.y += this.speedY;

       if (this.x <= 0 || this.x >= width - this.diameter) 
       {
        this.speedX *= -1;
       }

        if (this.y <= 0 || this.y >= height - this.diameter) 
        {
        this.speedY *= -1;
        }
    }

    




}
