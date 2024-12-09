let radius = 50;
let speed1 = 1;
let speed2 = 1;

let x1 = 0;
let angle1 = 0;
let centerY1;

let x2 = 0;
let angle2 = 0;
let centerY2;

function setup() {
  const canvas = createCanvas(500, 500);
  canvas.parent("sketch");

  centerY1 = height / 2; // Erster Kreis in der Mitte
  centerY2 = height / 2; // Zweiter Kreis leicht versetzt
  strokeWeight(0);
}

function draw() {
  background("black");

  // Erster Kreis (Sinus)
  fill("white");
  let y1 = centerY1 + radius * sin(angle1); // Sinusbewegung
  circle(x1, y1, radius);
  speed1 *= 1.01;
  x1 += speed1;
  angle1 += 0.07;
  if (x1 > width + radius) {
    x1 = -radius;
  }

  // Zweiter Kreis (Cosinus)
  fill("red");
  let y2 = centerY2 + radius * -sin(angle2); // Cosinusbewegung
  circle(x2, y2, radius);
  speed2 *= 1.01;
  x2 += speed2;
  angle2 += 0.07;
  if (x2 > width + radius) {
    x2 = -radius;
  }

  if(speed1 && speed2 > 550){
    speed1 = 1
    speed2 = 1
  }
}
