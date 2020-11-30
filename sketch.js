const Engine =Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var box1, box2, box3
var ground


function setup() {
  createCanvas(800,400);
  myEngine = Engine.create();
  myWorld = myEngine.world
  box1 = new Box(100,100,50,70);
  box2 = new Box(130,50,40,60);
  box3 = new Box (110,10,50,50)
  ground = new Ground(400,350,800,30)
  }

function draw() {
  background("black");  
  Engine.update(myEngine)
  box1.display();
  box2.display();
  box3.display();
  ground.display();
}