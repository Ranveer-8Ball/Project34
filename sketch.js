const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var ball1, ball2, ball3, ball4, ball5;
var rope1, rope2, rope3, rope4, rope5;
var gameState = "onrope";
function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(800,800,900,30);

  ball1 = new Ball(500,100,40,40);
  ball2 = new Ball(600,100,40,40);
  ball3 = new Ball(700,100,40,40);
  ball4 = new Ball(800,100,40,40);
  ball5 = new Ball(900,100,40,40);

  rope1 = new Rope(ball1.body,{x:400,y:350});
  rope2 = new Rope(ball2.body,{x:500,y:350});
  rope3 = new Rope(ball3.body,{x:600,y:350});
  rope4 = new Rope(ball4.body,{x:700,y:350});
  rope5 = new Rope(ball5.body,{x:800,y:350});
}

function draw() {
  background(180);
  Engine.update(engine);
  
  

  ground.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}
function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
      //}
}


function mouseReleased(){
  rope.fly();
  gameState = "launched";
}
