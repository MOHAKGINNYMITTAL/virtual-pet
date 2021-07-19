var dog,dog2;

function preload()
{
	dogimg=loadImage("Dog.png");
  dog2img=loadImage("happydog.png");
}

function setup() {
	createCanvas(800, 700);
  dog=createSprite(400,350,10,10);
  dog2=createSprite(400,350,10,10);
  dog.addImage(dogimg);
  dog2.addImage(dog2img)
  dog.scale=0.4
  dog2.scale=0.4
  
  
}


function draw() {  
 backgroundcolor="white"
 if(keyDown("space")){
  dog.visible=false
   dog2.visible=true
   
 } else{
   dog2.visible=false
 }
  drawSprites();
  
}



