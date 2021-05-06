var cat,catImg1,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;
var garden,gardenImg;


function preload() {
    //load the images here

catImg1 = loadImage("images/cat1.png")
catImg2 = loadImage("images/cat2.png","images/cat3.png")
catImg3 = loadImage("images/cat4.png")

mouseImg1 = loadAnimation("images/mouse1.png")
mouseImg2  = loadAnimation("images/mouse2.png","images/mouse3.png")
mouseImg3 = loadAnimation("images/mouse4.png")

gardenImg = loadImage("images/garden.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

     garden = createSprite(200,290, 990,790)
    garden.addImage  ("gardenImg", gardenImg)


    cat = createSprite(600,550,40,50)
    cat.addImage ("catSitting",catImg1)
    cat.scale = 0.1

    mouse = createSprite(200,550,200,30)
    mouse.addAnimation ("mouse",mouseImg1)
    mouse.scale = 0.1
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide





  if(cat.x-mouse.x< mouse.width/2+mouse.width/2){
    mouse.addAnimation("mouseOver",mouseImg3)
    mouse.changeAnimation("mouseOver")
    
    cat.addAnimation("catOver",catImg3)
    cat.changeAnimation("catOver")
    cat.velocityX = 0
  }
   


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode=== LEFT_ARROW){
     mouse.addAnimation("mouseTeasing",mouseImg2)
     mouse.changeAnimation("mouseTeasing")
     mouse.frameDelay = 25;

    cat.addAnimation("catRunning", catImg2)
    cat.changeAnimation("catRunning")
    cat.frameDelay = 25;
    cat.velocityX = -2
  }

}
