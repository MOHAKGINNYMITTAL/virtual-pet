var dog;

function preload()
{
	dogimg=loadImage("Dog.png");
  dog2img=loadImage("happydog.png");
}

function setup() {
	createCanvas(800, 700);
  dog=createSprite(400,350,10,10);
  
}


function draw() {  

  drawSprites();
  
}



