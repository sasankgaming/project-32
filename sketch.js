
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stand1;	


function preload()
{
    polygon_img=loadImage();
    getBackgroundimage();

	
}

function setup() {
	createCanvas(1600, 900);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(800,880,1600,20);

	stand1 = new Ground(700,650,300,15);
	stand2 = new Ground(1250,470,300,15);

	block1=new Box(650,635,30,40);
	block2=new Box(680,635,30,40);
	block3=new Box(710,635,30,40);
	block4=new Box(665,605,30,40);
	block5=new Box(690,605,30,40);
	block6=new Box(675,575,30,40);
	block7=new Box(1200,455,30,40);
	block8=new Box(1230,455,30,40);
	block9=new Box(1260,455,30,40);
	block10=new Box(1215,415,30,40);
	block11=new Box(1245,415,30,40);
	block12=new Box(1230,375,30,40);
	polygon=Bodies.circle(50,200,20);
	World.add(world,polygon);
	slingShot=new SlingShot(this.polygon,{x:100,y:200});
	imageMode(CENTER);
	image(polygon_img,polygon.x,polygon	.y,40,40);

	Engine.run(engine);
  
}


function draw() {

    text("Score  " + score, width-300, 50)


  rectMode(CENTER);
  background(0);
  ground.display();
  stand1.display();
  stand2.display();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  
  block3.display();
  block2.display();
  block4.display();
  block5.display();
  block6.display();
  block1.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  polygon.display();
  slingShot.display();
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(polygon.body);

    }

}

async function getBackgroundimage (){

    var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    console.log(response);

    var json = await response.json();
    console.log(json); 

    var datetime = json.datetime;
    console.log(datetime);

    var hour = datetime.slice(11,13);
    console.log(hour);

    if(hour >= 06 && hour<=19 ){

        bg="morningbg.jpg";


    }
else{

    bg="nightBg.jpg";

}

backgroundImg = loadImage(bg);




}



