let radius=0.01
let speed = 1

let X = (n) => width * n;
let Y = (n) => height * n;
let S = (n) => (height > width ? height * n : width * n);

function setup(){
  const canvas = createCanvas(500,500);
  canvas.parent("sketch");
  strokeWeight(0)
  let x = width /2
  let y = height /2

  
}

function draw() {
  background("black")
  let x = mouseX
  let y = mouseY
  circle (x,y,S(radius));
  stroke("white")
  strokeWeight(1)
  line(X(0.1),Y(0.1),x,y)
  line(X(0.9),Y(0.1),x,y)
  line(X(0.9),Y(0.9),x,y)
  line(X(0.1),Y(0.9),x,y)

  circle(X(0.1),Y(0.1),S(radius))
  circle(X(0.9),Y(0.1),S(radius))
  circle(X(0.9),Y(0.9),S(radius))
  circle(X(0.1),Y(0.9),S(radius))

  //line(X(0.5),Y(0.1),x,y)
  //line(X(0.9),Y(0.5),x,y)
  //line(X(0.5),Y(0.9),x,y)
  //line(X(0.1),Y(0.5),x,y)



}