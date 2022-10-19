var marImagem, marSprite;
function preload(){
  marImagem = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  marSprite = createSprite(200,200,400,400);
  marSprite.addImage(marImagem);
  marSprite.scale=0.25;

}

function draw() {
  background("blue");
    drawSprites();

 
}
