const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var box1, box2, box3, box4;
var box5, box6, box7, box8;

var boxes = [];

var ball;

function setup() {
  createCanvas(2000, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200, 700, 4000, 15);

  box1 = new Box(900, 100, 70, 70);
  box2 = new Box(900, 170, 70, 70);
  box3 = new Box(900, 240, 70, 70);
  box4 = new Box(900, 310, 70, 70);

  box5 = new Box(800, 100, 70, 70);
  box6 = new Box(800, 170, 70, 70);
  box7 = new Box(800, 240, 70, 70);
  box8 = new Box(800, 310, 70, 70);

  ball = new Ball(400, 500, 300);

  boxes.push(box1, box2, box3, box4, box5, box6, box7, box8);

  rope = new Rope(ball.body, { x: 400, y: 650 });
}

function draw() {
  background(255, 255, 255);

  Engine.update(engine);

  ground.display();

  for (var j = 0; j < boxes.length; j++) {
    boxes[j].display();
  }

  ball.display();
  //rope.display();
}