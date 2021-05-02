
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render=Matter.Render;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bob1=new Bob(300,200)
  bob2=new Bob(350,200)
  bob3=new Bob(400,200)
  bob4=new Bob(450,200)
  bob5=new Bob(500,200)

  ceiling=new Ceiling(400,30)

  chain1=new Rope(bob1.body,ceiling.body,-100,0);
  chain2=new Rope(bob2.body,ceiling.body,-50,0);
  chain3=new Rope(bob3.body,ceiling.body,0,0);
  chain4=new Rope(bob4.body,ceiling.body,50,0);
  chain5=new Rope(bob5.body,ceiling.body,100,0);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("skyBlue");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  ceiling.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  keyPressed();

  drawSprites(); 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
   Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-35,y:0});
  }
}
