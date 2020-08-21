const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, sling, poly;
var backgroundImg;

function preload(){
  getBackgroundImg();
}
function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  poly = new Polygon();
  sling = new Slingshot(poly.body, {x: 40, y: 40})

  ground = new Ground(width/2, height-25, width, 20);
  platform = new Ground(width/2-15, height/2, 200, 20);
  

  box1 = new Box(330, 190, "pink");
  box2 = new Box(355, 190, "pink");
  box3 = new Box(385, 190, "pink");
  box4 = new Box(415, 190, "pink");
  box5 = new Box(445, 190, "pink");

  boxa = new Box(345, 170, "Blue");
  boxb = new Box(385, 170, "Blue");
  boxc = new Box(415, 170, "Blue");

  box0 = new Box(385, 150, "Green")

}

function draw() {  
  if(backgroundImg)
        background(backgroundImg);  
  ground.display();
  platform.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  boxa.display();
  boxb.display();
  boxc.display();

  box0.display();

  poly.display();
  sling.display();
}
function mouseDragged()
{
    Matter.Body.setPosition(poly.body, {x: mouseX, y: mouseY})
}
function mouseReleased()
{
    sling.fly();
}
function keyPressed(){
  if(keyCode === 32){
     sling.attach(poly.body);
     poly.trajectory = []
     Matter.Body.setPosition(poly.body, {x: 200,y: 50})
  }
}
async function getBackgroundImg(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=18){
      bg = "day.PNG";
  }
  else{
      bg = "night.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}
