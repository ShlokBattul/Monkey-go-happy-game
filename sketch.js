var stoneimage;
var score;

function preload(){
jungleimage=loadImage("backphoto/jungle.jpg");
stoneimage=loadImage("stone.png");
bananaimage=loadImage("banana.png");
monkey_running=
loadAnimation("monkey1/Monkey_01.png","monkey2/Monkey_02.png","monkey3/Monkey_03.png","monkey4/Monkey_04.png",
"monkey5/Monkey_05.png","monkey6/Monkey_06.png",
"monkey7/Monkey_07.png","monkey8/Monkey_08.png",
"monkey9/Monkey_09.png","monkey10/Monkey_10.png");
}

function setup() {
  canvas=createCanvas(500, 470);
  
  jungle = createSprite(200,200,400,400);
  jungle.addImage(jungleimage);
  jungle.velocityX = -4
  
  monkey = createSprite(100,320,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.2;
  
  invisibleGround = createSprite(200,400,400,10);
  invisibleGround.visible = false;
  
  score = 0;
  
  bananaGroup = new Group();
  obstaclesGroup = new Group();

} 

function draw() {
  background("green");
  
  drawSprites();
    
  if (jungle.x < 0){
    jungle.x = jungle.width/2;
  }
  spawnStones();
  creatingBanana ();
             
  if(keyDown("space")&&monkey.y>150) {
   monkey.velocityY = -15;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(invisibleGround);
  
  if (bananaGroup.isTouching(monkey)){
  score = score + 10 ;
  bananaGroup.setLifetimeEach(0);  
  }
  
  if (score === 10){
  monkey.scale = 0.5;  
  }
  
  if (score === 20){
  monkey.scale = 0.9;
  }
  
  if (score === 30){
  monkey.scale = 0.15;  
  }
  
  
  if (score === 40){
  monkey.scale = 0.20;  
  }
  
  if (score === 50){
  monkey.scale = 0.25;  
  } 
  
  if (score === 60){
  monkey.scale = 0.30;  
  } 
  
  if (score === 70){
  monkey.scale = 0.35;  
    
  }if (score === 80){
  monkey.scale = 0.40;  
  } 
  
  if (score === 90){
  monkey.scale = 0.45;  
  }
  
  if (score === 100){
  text("You Won", 200,200,50,50);
  } 
  
  if (obstaclesGroup.isTouching(monkey)){
  monkey.scale = 0.5;
  obstaclesGroup.setLifetimeEach(0);  
  }
  
  //score = score + Math.round(getFrameRate()/60)
  text("Score: "+ score, 400,50);
}
 
  function spawnStones() {
  if(frameCount % 120 === 0) {
    var obstacle = createSprite(600,350,10,40);
    obstacle.velocityX = - (6);
    obstacle.addImage(stoneimage);           
    obstacle.scale = 0.2;
    obstacle.lifetime = 120;
    
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
  }

function creatingBanana () {
  if (frameCount % 170 === 0) {
    var banana = createSprite(120,10,10,10);
    banana.addImage(bananaimage);
    banana.scale = 0.1;
    banana.velocityY = 3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    /*adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;*/
    
    //add each cloud to the group
    bananaGroup.add(banana);
  }
  
}