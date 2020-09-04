var fixedRect, movingRect,Object3,Object4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  Object3 = createSprite(200,350,50,50);
  Object3.shapeColor="pink";
  Object3.velocityY=5;
  Object4 = createSprite(200,800,50,50);
  Object4.shapeColor="purple";
  Object4.velocityY=-5;


  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  BounceOff(movingRect,fixedRect);
  BounceOff(Object3,Object4);
  drawSprites();
}
  