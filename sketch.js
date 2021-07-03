const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;
var computer, computerBase;
var arrow;
var arrows = [];
var bg, bgg;

//Declare an array for arrows playerArrows = [ ]

var arrow;

function preload(){
bgg = loadImage("./assets/background.gif");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);

  playerArcher = new PlayerArcher(
    340,
    playerBase.body.position.y - 180,
    120,
    120
  );

  computerBase = new ComputerBase(
    width - 200,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 180,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(
    width - 240,
    computerBase.body.position.y - 180,
    120,
    120
  );
  
 


}

function draw() {
  background(180);

  Engine.update(engine);

  image(bgg, 0, 0, width, height);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display();
 // Use for loop to display arrow using showArrow() function

 for(var i = 0; i < arrows.length; i++){
  showArrows(arrows[i],i);
  }

}

//Display arrow and Tranjectory
function showArrows(arrow, index) {
  arrow.display();
  if(arrow.body.position.x >= width || arrow.body.position.y >= height - 50 || arrow.body.position.x >= width - 300){
    Matter.World.remove(world,arrow.body);
    arrows.splice(index,1);
  }
}

function keyReleased(){
  if(keyCode === 32){
    arrows[arrows.length-1].shoot(playerArcher.body.angle);
  }
}

function keyPressed(){
  if(keyCode === 32){
    arrow = new PlayerArrow(340 ,playerBase.body.position.y - 180, 120, 20);
    arrow.body.angle = playerArcher.body.angle;
    arrows.push(arrow);
}
}
