const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var ground;
var pig1
var bird

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    ground = new Ground(400,390,1000,10);
    pig1 = new Pig(550, 375);
    pig2 = new Pig(600,300);
    bird = new Bird(100, 370);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground.display();
    pig1.display();
    pig2.display();
    bird.display();
}