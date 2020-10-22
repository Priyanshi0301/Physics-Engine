const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, obj;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    console.log(ground);

    var obj_options ={
        restitution: 1
    }

    obj = Bodies.circle(200,200,20,obj_options);
    World.add(world,obj);
}
    

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill("green");
    rect(ground.position.x,ground.position.y,400,20);
    circle(obj.position.x,obj.position.y,30);
}