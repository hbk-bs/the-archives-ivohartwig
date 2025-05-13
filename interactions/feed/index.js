let x = (n) => width * n;
let y = (n) => height * n;
let s = (n) => (height > width ? height * n : width * n);
let circleY1 = 0.75; 
let ellimund = 0.1;
let essen = 0.08;
let fett = 0.4;

function setup() {
  createCanvas(400, 400);
}

function draw (){
  background("black")
  strokeWeight(1.5)
  
  //körper
  fill("white")
  ellipse(x(0.5),y(0.75),x(fett),y(0.6))
  
  //kopf
  fill("white")
  circle(x(0.5),y(0.4),s(0.3))
  
  //augen
  fill("black")
  circle(x(0.45),y(0.35),s(0.05))
  circle(x(0.55),y(0.35),s(0.05))
  
  //essen
  strokeWeight(0)
  fill("red")
  circle(x(0.5),y(circleY1),s(essen))
  
  //mund
  fill("black")
  ellipse(x(0.5),y(0.45),x(0.2),y(ellimund))
  
}

function mousePressed(){
  let d2 = dist(mouseX, mouseY, x(0.5), y(circleY1));
  if (d2 < s(0.08)/2) {
  circleY1 = 0.45;
  essen = 0.04
  ellimund = 0.05
  fett  += 0.01
  }
}

function mouseReleased(){
  circleY1 = 0.75
  
  ellimund = 0.1
  
  essen = 0.08 
  
  if ( fett > 0.7) {
    fett = 0.4
  }
}

//Save as gif
function keyPressed() {
  if (key === 'g') {
    saveGif('loop', 5);
  }
}