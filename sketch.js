var box
function setup() {
  createCanvas(400,400);

   box =createSprite(200,200)
   box.shapeColor="white"
}

function draw() 
{
  background(30);
  if (keyDown("right"))
  {
   box.x=box.x+5
   background("red")
  }
  if(keyDown("left"))
  {
    box.x=box.x-5
    background("yellow")
  }
  if(keyDown("down"))
  {
  box.y=box.y+5
  background("green")
  }
  if(keyDown("up"))
  {
  box.y=box.y-5
  background("purple")
  }



drawSprites()
}




