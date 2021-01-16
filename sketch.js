var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score
var sword,swordImg
var f11,f12,f13,f14,fruitGroup,f11Img,f12Img,f13Img,f14Img
var monster,monsterGroup,monsterImg
var gameState="PLAY";
var gameState="END";

function preload(){
  swordImage=loadImage("sword.png");
  f11Image=loadImage("fruit1.png");
  f12Image=loadImage("fruit2.png");
  f13Image=loadImage("fruit3.png");
  f14Image=loadImage("fruit4.png");
  monsterImage=loadImage("alien1.png");
  
}

function setup(){
createCanvas(600,600);
  sword=createSprite(300,300,20,20);
  sword.addImage(swordImage);
  sword.scale=0.7;
  
  fruitGroup=new Group();
  
}

function draw(){
 background(180);
  text("score:0"+ score,300,20);
  console.log("this is ",gameState);
  if(gameState===PLAY){
    sword.y=World.mouseY;
    sword.x=World.mouseX;
  fruits();
  enemy();
  if(fruitGroup.isTouching("sword")){
    fruitGroup.destroyEach();
    score=score=+10;
  }
  }
  if(gameState===END){
    sword.addImage(gameOverImage);
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  sword.x=200
  sword.y=200
}
  drawSprites();
}
function fruits(){
  if(frameCount%80===0){
    var obstacle = createSprite(600,95);
    obstacle.setCollider('circle',0,0,45);
    fruit=createSprite(400,200,20,20);
    fruit.scale=0.2
    fruit.debug=true;
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: obstacle.addImage(f11);
              break;
      case 2: obstacle.addImage(f12);
              break;
      case 3: obstacle.addImage(f13);
              break;
      case 4: obstacle.addImage(f14);
              break;
              
      default: break;
      
  }
  }
fruit.y=Math.round(random(50,340));
    fruit.velocityX=-7
    fruit.setlifetime=100
    fruitGroup.add(fruit);
  
}
function enemy(){
  if(frameCount%200===0){
    monster=creatSprite(400,200,20,20);
    monster.addAnimation("moving",monsterImage);
    monster.y=Math.round(random(100,300));
    r=Math.round(random(1));
    if(r==1){
      enemy.addImage(monster);
    }
    monster.velocityX=-8;
    monster.setLifetime=50;
    ememyGroup.add(monster);
  }
}