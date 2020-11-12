//name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var spiceBisciutEngine, spiceBiscuitsWorld;
var box1, box2, box3, box4, box5;
var ground;
var pig1, pig2;
var redBird;
var log1, log2, log3, log4;

function setup() {
  createCanvas(1200,400);
 // createSprite(400, 200, 50, 50);

  spiceBisciutEngine = Engine.create();
  spiceBiscuitsWorld =  spiceBisciutEngine.world;
 
  ground = new Ground(600, 390, 1200, 20);
  
  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  box5 = new Box(810, 160, 70, 70);

  pig1 = new Pig(810, 350);
  pig2 = new Pig(810, 220);

  redBird = new Bird(100, 100);

  log1 = new Log(810, 260, 300, PI/2);
  log2 = new Log(810, 180, 300, PI/2);
  log3 = new Log(760, 120, 150, PI/7);
  log4 = new Log(870, 120, 150, -PI/7);
}

function draw() {
  background(200,255,255);  
  Engine.update(spiceBisciutEngine);
  rectMode(CENTER);
  

  //rect(200,200,50,50);
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ground.display();
  pig1.display();
  pig2.display();
  redBird.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();


  //drawSprites();
}