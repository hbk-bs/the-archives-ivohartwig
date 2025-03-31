let x=0;
let y=0;
let radius=50
let xspeed = 1
let yspeed = 1

function setup(){
  const canvas = createCanvas(500,500);
  canvas.parent("sketch");
  x=width/2
  y=height/2;
  xspeed = random(-5,5);
  yspeed = random(-5,5);
  
  
}

function draw() {
  background(0);
  circle(x,y,radius);
  
  x += xspeed;
  y += yspeed;

  
  circle(x,y,radius)
  if (x > width-radius/2 || x<radius/2){
    xspeed*= -1
  }
  if (y > height-radius/2 || y<radius/2){
    yspeed*= -1
  }


  
}
