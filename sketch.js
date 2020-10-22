
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var survivaltime = 0
var invisibleGround

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600, 600);
obstaclesGroup = new Group(); 
  bananaGroup = new Group();
  monkey = createSprite (80, 315, 20, 20)
  monkey.addAnimation("running", monkey_running)
  monkey.scale = 0.1

  
   floor = createSprite(400, 350, 900, 10)
  floor.velocityX = -5 
 floor.x = floor.width/2 
  
   invisibleGround = createSprite(400,360,900,10);
  invisibleGround.visible = false;
   
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);

}


function draw() {
  background ("white")
  
  if (floor.x < 0){
    floor.x = floor.width/2
  }
 
  survivaltime = Math.ceil(frameCount/frameRate())
  text("Survival Time" + survivaltime, 100, 50)
  
  if(keyDown("space")&& monkey.y >= 320) {
        monkey.velocityY = -12;
       
    }
    
    monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(invisibleGround); 
  
  
  spawnbanana();
spawnObstacles();
drawSprites();  
}

function spawnObstacles(){
 if (frameCount % 200 === 0){
    var obstacle = createSprite(800,320,8,40);
   obstacle.velocityX = -5 
   obstacle.addImage (obstacleImage)  
   obstacle.scale = 0.15;
    obstacle.lifetime = 300;
    obstaclesGroup.add(obstacle);
    }
}

function spawnbanana() {
  //write code here to spawn the clouds
 if (frameCount % 60 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(250,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    
    //add each cloud to the group
    bananaGroup.add(banana);
  }
}


   