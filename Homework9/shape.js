class shape
{
constructor(shapeType,texture,x,y,z,positionX,positionY)
{
    this.shapeType = shapeType;
    this.x = x;
    this.y = y;
    this.z = z; 
    this.positionX = positionX;
    this.positionY = positionY; 
    this.texture = texture;

}

display()
{
if (this.shapeType == "box")
{
rotateX(frameCount * 0.01);
rotateY(frameCount * 0.01);
//rotateZ(frameCount * 0.05);
translate(this.positionX,this.positionY);
texture(this.texture);
box(this.x,this.y,this.z);
}
else if (this.shapeType == "box2")
{
rotateX(frameCount * 0.01);
rotateY(frameCount * 0.01);
//rotateZ(frameCount * 0.05);
translate(this.positionX,this.positionY);
texture(this.texture);
box(this.x,this.y,this.z);
}
else if (this.shapeType == "box3")
{
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    //rotateZ(frameCount * 0.05);
    translate(this.positionX,this.positionY);
    texture(this.texture);
    box(this.x,this.y,this.z);
}
else if(this.shapeType == "box4")
{
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    //rotateZ(frameCount * 0.05);
    translate(this.positionX,this.positionY);
    texture(this.texture);
    box(this.x,this.y,this.z);
}
}

}
