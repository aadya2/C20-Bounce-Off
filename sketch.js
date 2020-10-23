var fRect, mRect;
var o1, o2, o3, o4;

function setup() {
  createCanvas(800,400);
  fRect = createSprite(200, 200, 50, 80);
  fRect.velocityX = 5;
  
  mRect = createSprite(400, 200, 80, 30);
  mRect.velocityX = -5;

  fRect.shapeColor = "green";
  mRect.shapeColor = "green";

  fRect.debug = true;
  mRect.debug = true;

  o1 = createSprite(100, 100, 50, 50);
  o2 = createSprite(200, 100, 50, 50);
  o3 = createSprite(300, 100, 50, 50);
  o4 = createSprite(400, 100, 50, 50);

  o1.shapeColor = "green";
  o2.shapeColor = "green";
  o3.shapeColor = "green";
  o4.shapeColor = "green";
}

function draw() {
  background(0);  
  
 // mRect.x = World.mouseX;
  //mRect.y = World.mouseY;

 if(isTouching(mRect, fRect)){
  mRect.shapeColor = "red";
  fRect.shapeColor = "red";
 }
 else{
  fRect.shapeColor = "green";
  mRect.shapeColor = "green";
 }
 
 bounceOff(mRect, fRect);
 
 
 
  drawSprites();
}

function isTouching(object1, object2){
  
  if(object2.x - object1.x < object2.width/2 + object1.width/2 
    && object1.x - object2.x < object2.width/2 + object1.width/2 
    && object2.y - object1.y < object2.height/2 + object1.height/2 
    && object1.y - object2.y < object2.height/2 + object1.height/2 ){
   return true;  
  }
else {
  return false;
}

}

function bounceOff(object1, object2){
 if(object2.x - object1.x < object2.width/2 + object1.width/2 
  && object1.x - object2.x < object2.width/2 + object1.width/2 ){
  object1.velocityX = object1.velocityX * (-1);
  object2.velocityX = object2.velocityX * (-1);
}
 if( object2.y - object1.y < object2.height/2 + object1.height/2 
  && object1.y - object2.y < object2.height/2 + object1.height/2 ){
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
  }
}

