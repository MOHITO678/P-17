
var monkey , monkey_running
var banana ,bananaImage, obstacleImage
var FoodGroup, obstacleGroup,bananaGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600, 200);
  
 monkey = createSprite(50,150,20,50);
 monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(250,190,600,20);
  ground.x = ground.width /2;
  ground.velocityX = -3
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
}


function draw() {

  background(600);
  
  if (ground.x < 100){
      ground.x = ground.width/2;
  }
  
   monkey.collide(ground)
  
  if(keyDown("space")&& monkey.y >= 140) {
        monkey.velocityY = -13;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
 spawnbanana();
 spawnobstacle(); 
  
  //if(obstacleGroup.isTouching(monkey)){
   // monkey.velocityX = 0
    //obstacleGroup.lifetime = 0
    //bananaGroup.lifetime = 0
  //}
  
  drawSprites();
  
  text(mouseX+ "," +mouseY , 400,20);
  
}

function spawnbanana() {
  //write code here to spawn the clouds
  if (frameCount % 200 === 0) {
     banana = createSprite(600,100,40,10);
    banana.y = Math.round(random(30,60));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //adding cloud to the group
   bananaGroup.add(banana);
    }
}

function spawnobstacle() {
  //write code here to spawn the clouds
  if (frameCount % 120 === 0) {
     obstacle = createSprite(600,155,40,50);
     obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -5;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
    //adjust the depth
    obstacle.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //adding cloud to the group
   obstacleGroup.add(obstacle);
    }
}

