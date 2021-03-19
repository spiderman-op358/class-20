var movingrect;
var fixedrect;







function setup() {
  createCanvas(800,400);
 movingrect=createSprite(200,100,30,40);
 fixedrect=createSprite(400,200,50,80);
 fixedrect.shapeColor="blue"
 movingrect.shapeColor="blue"


}

function draw() {
  background("black");
  movingrect.x=mouseX
  movingrect.y=mouseY
  if (movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&&
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2&&
    movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2&&
    fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
  fixedrect.shapeColor="red"
  movingrect.shapeColor="red"
  }
  else{
  fixedrect.shapeColor="blue"
  movingrect.shapeColor="blue"
  }
  drawSprites();
}