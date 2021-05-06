
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	dustbinImage=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
   
	
	var option={
		isStatic:true
		}

	
	


    ground=new Ground(400,600,800,30,option)
    
	bin1=new Bin(730,410,15,320,option)
	bin2=new Bin(620,570,250,15,option);
	bin3=new Bin(500,410,15,320,option);
    
	
	dust=new Trash(200,100,35)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(10000);
  Engine.update(engine)
  
  
  
  dustbinImage.scale=0.0001
  ground.display();
 
  dust.display();
 bin1.display();
 bin2.display();
 bin3.display();
 image(dustbinImage,480,250);
 
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(dust.body,dust.body.position,{x:115,y:-165});
	}
}

