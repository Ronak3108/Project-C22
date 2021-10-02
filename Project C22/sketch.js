
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground,leftSide,rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	engine = Engine.create();
	world = engine.world;

	ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	//Create the Bodies Here.
	ball = Bodies.circle(width-800,height-400,20,ball_options);
	World.add(world,ball);

	ground = new Ground(width/2,height-15,width,30);
	leftSide = new Ground(width/2+100,height-80,20,100);
	rightSide = new Ground(width/2+270,height-80,20,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20);
  ground.display();
  leftSide.display();
  rightSide.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyIsDown(UP_ARROW)){
		Matter.Body.applyForce(ball,{x: ball.position.x, y: ball.position.y},{x: 45, y: -85})
	}
}



