const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var thunder, thunder1, thunder2, thunder3, thunder4;
var man, manImage;
var maxDrops = 100
var drops = []
function preload(){
   thunder1 = loadImage("images/thunderbolt/1.png");
   thunder2 = loadImage("images/thunderbolt/2.png");
   thunder3 = loadImage("images/thunderbolt/3.png");
   thunder4 = loadImage("images/thunderbolt/4.png");

   manImage = loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png"
   ,"images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png", "images/Walking Frame/walking_5.png",
   "images/Walking Frame/walking_7.png", "images/Walking Frame/walking_8.png" )

}

function setup(){
    var canvas = createCanvas(1300,800);
    engine = Engine.create();
    world = engine.world;
    man = createSprite(650, 600)
    man.addAnimation("walkingMan",manImage);
    
    if(frameCount%100===0){
        for(var i = 0; i<maxDrops;i++){
        drops.push(new Drop(random(0,1300), random(0,800)))
        }
    }
}

function draw(){
    background("black");
    Engine.update(engine); 
    if(frameCount %50 === 0){
    thunder = createSprite(random(10,1280), random(10,30))
    thunder.scale = 0.7;
    var r = Math.round(1,4);
    switch(r){
        case 1: thunder.addImage(thunder1)
        break;
        case 2: thunder.addImage(thunder2)
        break;
        case 3: thunder.addImage(thunder3)
        break;
        case 4: thunder.addImage(thunder4)
        break;
        default: break;

    }
    thunder.lifetime = 10;


} 
for(var i = 0; i<maxDrops;i++){
   drops[i].display()
   drops[i].update()
    }
drawSprites();
  }


