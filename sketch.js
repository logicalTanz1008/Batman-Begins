const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;

function preload(){
    
}

function setup(){
   createCanvas(300,500);

   engine = Engine.create();
   world = engine.world;

   umbrella1 = new Umbrella(200,200);
}

function draw(){
    background("black");
}   

