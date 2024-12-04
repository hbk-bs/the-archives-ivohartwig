let x=0;
let y=0;
let radius=50
let speed = 1

function setup(){
  const canvas = createCanvas(500,500);
  canvas.parent("sketch");
  y=height/2;
  strokeWeight(0)
  
}

function draw() {
  background("black")
  circle (x,y,radius);
  speed *=1.04;
  x+=speed;
  console.log(x)
  if (x>width + radius){
    x=-radius
    speed = 1
  }
  if (x>width/2){
    fill("red")
  }
  if (x<width/2){
    fill("white")
  }
}
