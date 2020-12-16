var paper,d1,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper=new Ball(200,450,50)
ground = Bodies.rectangle(width/2,670,width,20,{isStatic:true})
World.add(world,ground)
leftbody= new Dustbin(1100,600,100,0); rightbody=new Dustbin(1300,600,100,0)
 ;basebody= new Dustbin(1200,650,200,90)


	Engine.run(engine);
    var render = Render.create(
		{ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } }); Render.run(render);
		

}


function draw() {
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,width,20) 
  leftbody.display()
  rightbody.display()
  basebody.display()
  background(0);
  paper.display()
  drawSprites();
 
}



