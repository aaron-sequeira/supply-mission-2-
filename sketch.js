var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,piller1,piller2,piller3;
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
	createCanvas(800, 700);
	rectMode(CENTER);
	
  
	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	piller1 = createSprite(width/2,650,200,20,{isStatic:true});
	piller1.shapeColor =("brown");
	
	piller2 = createSprite(300,610,20,100,{isStatic:true});
	piller2.shapeColor = ("brown");

    piller3 = createSprite(500,610,20,100,{isStatic:true});
    piller3.shapeColor = ("brown");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3,density:1.0 ,isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
    Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  packageSprite.x = packageBody.position.x
  packageSprite.y = packageBody.position.y
  rectMode(CENTER);
   drawSprites();

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
 Matter.Body.setStatic(packageBody,false);

}
}



