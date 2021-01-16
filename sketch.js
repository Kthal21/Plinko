const Engine =  Matter.Engine;
const World=  Matter.World
const Bodies = Matter.Bodies
//const Constraint = Matter.Constraint

var engine, world;

var particles= [];
var plinkos= [];
var divisions=[];

var divisionheight= 300 ;
function setup() {
  createCanvas(480,800);

  engine = Engine.create();
    world = engine.world;
    ground1= new Ground (240,600,480,10);
d1= new Division (60,475,10,250);
d2= new Division (120,475,10,250);
d3= new Division (180,475,10,250);
d4= new Division (240,475,10,250);
d5= new Division (300,475,10,250);
d6= new Division (360,475,10,250);
d7= new Division (420,475,10,250);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);

  ground1.display();
  d1.display();
  d2.display();
 d3.display();
d4.display();
  d5.display();
  d6.display();
  d7.display();


 


  for (var j = 40 ; j<=width; j=j+50  )
  
  {

plinkos.push(new Plinko(j,75)); 



  }
}
  drawSprites();


  //for (var k= 60; k<=width ; k=k+80) {

    //divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));


 // }

  