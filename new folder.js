var play =1;
var End =0;
var jack;
var path;
function preload(){
  //pre-load images
jack_running = addImage("Runner-1.png,Runner-2.png")
path =addImage("path.png")
}
function setup(){
  createCanvas(400,400);

  //create sprites here
  jack =createSprite(350,150)
  path =createSprite()
 
  
}

function draw() {
  background(0);
  path.height =path.height/2
  path.velocityy =3;
  jack.velocityy =2;
  if(path.y<400){
    path.height =path.height/2;
    drawsprites;
  }

}
