function preload()
{
  snakeimg=loadImage("images/snake1.png");
  mouseimg=loadImage("images/mouse2.png");
  gardenyimg=loadImage("images/gardeny22.png");
  gardenximg=loadImage("images/gardenx2.png");
  obs1img=loadImage("images/mongoose1.png");
  obs2img=loadImage("images/mongoose2.png");
}




function setup() {
  createCanvas(1200,600);
edges=createEdgeSprites();
wall1=createSprite(90, 90, 10, 300);
wall1.addImage(gardenyimg);

wall2=createSprite(30,250,300,10);
wall2.addImage(gardenximg);


wall3=createSprite(420,450,300,10);
wall3.addImage(gardenximg);

wall4=createSprite(188,81,150,10);
wall4.addImage(gardenximg);


wall5=createSprite(59,350,10,200);
wall5.addImage(gardenyimg);

wall6=createSprite(121,597,10,200);
wall6.addImage(gardenyimg);

wall7=createSprite(260,160,10,200);
wall7.addImage(gardenyimg);

wall8=createSprite(226,580,200,10);
wall8.addImage(gardenximg);

wall9=createSprite(360,60,10,200);
wall9.addImage(gardenyimg);

wall10=createSprite(272,360,250,10);
wall10.addImage(gardenximg);

wall11=createSprite(400,351,10,200);
wall11.addImage(gardenyimg);

wall12=createSprite(567,73,300,10);
wall12.addImage(gardenximg);

wall13=createSprite(1100,106,10,250)
wall13.addImage(gardenyimg);

wall14=createSprite(993,451,200,10)
wall14.addImage(gardenximg);

wall15 =createSprite(993,551,10,200)
wall15.addImage(gardenyimg);

wall16=createSprite(545,294,10,250)
wall16.addImage(gardenyimg);

wall17=createSprite(970,135,250,10)
wall17.addImage(gardenximg);

wall18=createSprite(665,145,10,150);
wall18.addImage(gardenyimg);

wall19=createSprite(780,53,10,174);
wall19.addImage(gardenyimg);

wall20=createSprite(670,450,10,270);
wall20.addImage(gardenyimg);

wall21=createSprite(840,320,200,10);
wall21.addImage(gardenximg);

wall22=createSprite(980,270,250,10);
wall22.addImage(gardenximg);

snake=createSprite(1160,560,20,20);
snake.addImage("snake",snakeimg);
snake.scale=0.3;

mouse=createSprite(30,30,20,20);
mouse.addImage("mouse",mouseimg);
mouse.scale=0.2;


obs1=createSprite(1100,380,30,30);
obs1.addImage(obs1img);
obs1.scale=0.13;
obs1.velocityX=1;
inviobs1=createSprite(1020,380,5,5);
inviobs1.visible=false;
}

function draw() {
  background("lightgreen");  
  if(keyDown(UP_ARROW)){
    snake.y=snake.y-2;
   // snake.velocityY=-2;
  }
  if(keyIsDown(DOWN_ARROW)){
    snake.y=snake.y+2;
    //snake.velocityY=2;
  }
  if(keyIsDown(RIGHT_ARROW)){
    snake.x=snake.x+2;
    //snake.velocityX=2;
  }
  if(keyIsDown(LEFT_ARROW)){
    snake.x=snake.x-2;
    //snake.velocityX=-2;
  }
  snake.collide(edges)
  mouse.collide(edges);
  obs1.bounceOff(edges[1])
  if(snake.isTouching(wall1)||snake.isTouching(wall2)||snake.isTouching(wall3)||snake.isTouching(wall4)||snake.isTouching(wall5)||snake.isTouching(wall6)||snake.isTouching(wall7)||snake.isTouching(wall8)||snake.isTouching(wall9)||snake.isTouching(wall10)||snake.isTouching(inviobs1))
  {
    snake.x=1160;
    snake.y=560;
    snake.setVelocity(0,0);
  }

  if(snake.isTouching(wall11)||snake.isTouching(wall12)||snake.isTouching(wall13)||snake.isTouching(wall14)||snake.isTouching(wall15)||snake.isTouching(wall16)||snake.isTouching(wall17)||snake.isTouching(wall18)||snake.isTouching(wall19)||snake.isTouching(wall20)||snake.isTouching(wall21)||snake.isTouching(wall22))
  {
    snake.x=1160;
    snake.y=560;
    snake.setVelocity(0,0);
  }

  if(obs1.isTouching(inviobs1))
  {
    obs1.bounceOff(inviobs1);
  }

  drawSprites();
  text(mouseX+" "+mouseY,mouseX,mouseY)
}