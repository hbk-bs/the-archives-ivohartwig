
let radius2 = 0.1
let speed2 = 0.02
let angle2 = 0

let radius1 = 0.3
let speed1 = 0.02
let angle1 = 0

//let radius=0.01


let X = (n) => width * n;
let Y = (n) => height * n;
let S = (n) => (height > width ? height * n : width * n);

function setup(){
  const canvas = createCanvas(300,500);
  canvas.parent("sketch");
  strokeWeight(0)
}

function draw() {
  background("black")
  //let r = mouseX
  //circle (X(0.25),Y(0.5),r);
  let y = S(radius1) * sin(angle1) + height /2

  let r2 = S(radius2) * sin(angle2);
  circle (X(0.5),y,r2);
  angle2 += speed2;
  angle1 += speed1
  stroke("red")
  strokeWeight(1)
  line(X(0),Y(0.5),X(1),Y(0.5))
  strokeWeight(0)


 



}