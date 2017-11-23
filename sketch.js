
var Engine = Matter.Engine,   

World = Matter.World,
Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];

function setup() {
  createCanvas(1600,600);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  }
  fill(100);
  ground = Bodies.rectangle(0, height,width,50);
  var box1 = Bodies.rectangle(100,100,50,50, options);
  World.add(world, ground);

  var ground = Bodies.rectangle(800,500,1600,10, { isStatic: true });
  World.add(world, [ground]);
  
}

function mousePressed() {
  fill(150);
  boxes.push(new Box(mouseX, mouseY, random(5,75), random(5,75)));
    
}

function draw() {
  background(51);
  Engine.update(engine);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
  noStroke(255);
  fill(170);
  rectMode(CENTER);
  
}







   
