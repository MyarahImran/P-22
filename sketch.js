const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var object;
var ground;

function setup() {
  canvas = createCanvas(400,400);
  //createSprite(400, 200, 50, 50);

engine = Engine.create();
world = engine.world;

var ground_options = {
  isStatic : true
}

ground = Bodies.rectangle(200,390, 400,20,ground_options);
World.add(world, ground);

console.log(ground);

var object_options = { 
 // isStatic : true 
 restitution : 1.0
}

object = Bodies.circle(200,100,20, object_options);
World.add(world, object);

console.log(object.type);

}

function draw() {
  background(0);  
  Engine.update(engine);

  rect(200,200,50,50);
 // rectMode(CENTER);
 // rect(object.position.x, object.position.y, 50, 50);
  ellipseMode(RADIUS);
  ellipse(object.position.x, object.position.y, 50, 50);

  rect(ground.position.x, ground.position.y, 400,20);

  //drawSprites();
}