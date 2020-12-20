var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var SurvivalTime = 0;

//var PLAY = 1;
//var END = 0;
//var GameState = PLAY;
 
function preload(){
  
 monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}
function setup() {
  createCanvas(500,400);
  
  monkey = createSprite(80,315,20,20);  
  monkey.addAnimation("moving",monkey_running); 
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  reset();

  
  SurvivalTime = 0;
  
  
}


function draw() {
background(500);

      
  if(keyDown("space") && monkey.y >= 230){
  monkey.velocityY = -10;
  
     }
  monkey.velocityY = monkey.velocityY + 0.7;
  monkey.collide(ground);
  
  stroke("black");
  textSize(20);
  fill("black");
  SurvivalTime = Math.ceil(frameCount/frameRate());
  text("SurvivalTime : " + SurvivalTime,200,50); 
  
 reset();
 fruit();
 spawnStones();
 
 drawSprites(); 
 
}

function reset(){
  ground.x = 400;
     
}

function fruit(){
  if(World.frameCount % 80 === 0){
     banana = createSprite(400,250,10,10);
     banana.addImage(bananaImage);
     banana.scale = 0.09;
     banana.velocityX = -6;
         }
}
 

function spawnStones(){
  if(World.frameCount % 80 === 0){
  obstacle = createSprite(450,326,10,10);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1;
  obstacle.x = obstacle.width/2;
  obstacle.velocityX = -5;  
  }
}

