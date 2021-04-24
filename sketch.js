var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box;
var makeBox;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(1200,700);
	rectMode(CENTER);
	
	//make box setup
	makeBox = true;

	box = createSprite(800,700,100,100);
	box.visible = false;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2


	helicopterSprite=createSprite(width/5, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
 //box behavior	
 if(makeBox == true){
box.x = random(100,1100);
box.y = 610;
box.visible = true
makeBox = false;
}
 //package behavior
  packageBody.position.y = packageSprite.y;
  packageBody.x = packageSprite.x;
  packageSprite.x = helicopterSprite.x;
  packageSprite.y = helicopterSprite.y + 40;
  packageBody.visible;
  
  if(keyPressed(32)){
	  console.log("working")
	 var fall = true;
  }
  if(fall == true){
	  packageBody.isStatic = false;
  }

//helicopter behavior
	helicopterSprite.velocityX = random(3,7);

if(helicopterSprite.x > 1200){
	helicopterSprite.x = 100;
	makeBox = true;
}
//deploy

  drawSprites();
 
}

function keyPressed() {
if(keycode = 32){
	console.log("working")
	box.isStatic = false;
}
}


