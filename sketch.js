const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

function preload(){
	
  }

function setup() {
	createCanvas(400, 400);
	engine = Engine.create();
	world = engine.world;

    ground=new Ground(180,300,100,25);
    box1=new Box(200,275,20,20)
    box2=new Box(180,275,20,20)
    box3=new Box(160,275,20,20)
    box4=new Box(170,260,20,20)
    box5=new Box(190,260,20,20)
    box6=new Box(180,240,20,20)
    polygan=new Polygan(300,180,25)
    slingshot=new Slingshot(polygan.body,{x:300,y:200})

	Engine.run(engine);

}

function draw() {
    background("grey");
    
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    polygan.display();
    slingshot.display();

    stroke("white")
    text("Drag the Polygon and release to launch towards the blocks ",50,100)
    drawSprites();
}
    function mouseDragged(){
    Matter.Body.setPosition(polygan.body,{x:mouseX,y:mouseY})
    
   }
    function mouseReleased(){
   slingshot.fly()
 }
 function keyPressed(){
  if(keyCode===32){
      slingshot.attach(polygan.body)
      Matter.Body.setPosition(polygan.body,{x:300,y:200})
  } 
}
