const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
//var box1, box2, box3,box4;
var hero,monster,rope,ground;
var boxes=[];

function preload() {
  bg = loadImage("background0.png");
  cloudImage = loadImage("clouds.png");
}

function setup() {
  createCanvas(1800, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  background = createSprite(900,350);
  background.addImage("background",bg);
  background.scale = 3;
  background.x = background.width /2;
  

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  for(var x=600; x <=900; x=x+100){
    for(var y = -170; y <= 600; y+=100){
      boxes.push(new Box(x,y,70,70))
    }
  }

}

function draw() {
  background.velocityX = -30
  spawnClouds();
  if (background.x < 0){
    background.x = background.width/2;
  }
  drawSprites();
  Engine.update(engine);
  ground.display();

  hero.display();
  rope.display();
  monster.display();

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].display();   
  }

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX, y:mouseY})
}

function spawnClouds() {
 
  if (frameCount % 40 === 0) {
    var cloud = createSprite(1900,120,40,10);
    cloud.y = Math.round(random(100,600));
    cloud.addImage(cloudImage);
    cloud.scale = random(0.6,0.8);
    cloud.velocityX = -30;
  
    cloud.lifetime = 63.3;

  }
  
}