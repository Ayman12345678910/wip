var tom, tomImage;
var jerry, jerryImage;
function preload() {
    //load the images here
tomImage= loadAnimation("tomOne.png");
jerryImage=loadAnimation("jerryOne.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(600,600, 20, 20);
    tom.addAnimation("tomSit", tomImage);
    jerry= createSprite(300,300,50,50);
    jerry.addAnimation("jerryEatCheese", jerryImage);
}

function draw() {

    background(255,255,255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
