
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var Stone1;
var Boy;
var Chain1; 
var Tree;
var mango1, mango2, mango3, mango4, mango5;


function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);
	Boy = new boy(130, 450);
	Stone1 = new Stone(100, 450, 20, 20);
	//Chain1 = new Chain(Stone1, {x : 125, y : 445});
	Tree = new tree(650, 450, 250, 350);
	mango1 = new Mango(640, 440, 15);
	mango2 = new Mango(640, 440, 15);
	mango3 = new Mango(640, 440, 15);
	mango4 = new Mango(640, 440, 15);
	mango5 = new Mango(640, 440, 15);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	ground.display();
	Stone1.display();
	Boy.display();
	//Chain1.display();
	Tree.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();

	detectollision(stone1, mango1);
	detectollision(stone1, mango2);
	detectollision(stone1, mango3);
	detectollision(stone1, mango4);
	detectollision(stone1, mango5);

  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(Stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   Chain1.fly();
}
function keyPressed() {
if(keyCode === 32) {
	Matter.Body.setPosition(stone1.body, {x : 100, y : 450});
    Chain1.attach(Stone1.body)

 }
}
function detectollision(stone, mango){
	mango.Body.Position =1mango.body.position;
	stone.Body.Position =1mango.body.position;

	var distance = dist(stone.body.position.x, stone.body.position.y, mango.body.position.x, mango.body.position.y);
	if(distance<=1mango.r + 1stone.r){
		Matter.Body.setStatic(1mango.body, false);
	}
}
