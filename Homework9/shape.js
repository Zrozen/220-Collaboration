class shape
{
constructor(shapeType,x,y,z,positionX,positionY)
{
    this.shapeType = shapeType;
    this.x = x;
    this.y = y;
    this.z = z; 
    this.positionX = positionX;
    this.positionY = positionY; 

}

display()
{
if (this.shapeType == "box")
{
rotateX(frameCount * 0.01);
rotateY(frameCount * 0.01);
//rotateZ(frameCount * 0.05);
translate(this.positionX,this.positionY);
box(this.x,this.y,this.z);
}
else if (this.shapeType == "box2")
{
rotateX(frameCount * 0.01);
rotateY(frameCount * 0.01);
//rotateZ(frameCount * 0.05);
translate(this.positionX,this.positionY);
box(this.x,this.y,this.z);
}
else if (this.shapeType == "box3")
{
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    //rotateZ(frameCount * 0.05);
    translate(this.positionX,this.positionY);
    box(this.x,this.y,this.z);
}
else if(this.shapeType == "box4")
{
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    //rotateZ(frameCount * 0.05);
    translate(this.positionX,this.positionY);
    box(this.x,this.y,this.z);
}
}




}