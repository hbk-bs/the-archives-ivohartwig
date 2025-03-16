let amplitude = 70;
let radiuscircle = 0.03
let speed1 = 1;


let x1 = 0;
let angle1 = 0;
let centerY1;

let color1 = "black"
let strokeW = 0

let X = (n) => width * n;
let Y = (n) => height * n;
let S = (n) => (height > width ? height * n : width * n);



function setup() {
  const canvas = createCanvas(500, 500);
  canvas.parent("sketch");

  centerY1 = height / 2; // Erster Kreis in der Mitte
  
  strokeWeight(0);
}

function draw() {
  background(0,20);
  

  if(x1>width/7){
    color1 = "white"
    strokeW = 1
  }

  
  stroke(color1)
  strokeWeight(strokeW)
  line(X(0.085),Y(0),X(0.085),Y(1))

  strokeWeight(1)
  stroke("white")
  line(X(0.915),Y(0),X(0.915),Y(1))


  


  strokeWeight(0)

  // Erster Kreis (Sinus)
  fill("white");
  let y1 = centerY1 + amplitude * sin(angle1); // Sinusbewegung
  circle(x1, y1, S(radiuscircle));
  speed1 *= 1.0;
  x1 += speed1;
  angle1 += 0.07;
  if (x1 > width - width/10) {
    let y1 = centerY1 + amplitude * -sin(angle1);
    speed1 *= -1 
    
  }
  if (x1 < width -width*0.9) {
    let y1 = centerY1 + amplitude * sin(angle1);
    speed1 = 1
  }

  
}

function keyPressed() {
  if (key === 'g') {
    saveGif('loop', 5);
  }
}
