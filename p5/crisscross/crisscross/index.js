let x = 0;
let y = 0;
let x1 = 0;
let y1 = 0;
let radius;
let speed1 = 1;
let speed2 = 1;
let color1 = "white"; 
let color2 = "white"; 

function setup() {
  const canvas = createCanvas(300, 300);
  canvas.parent("sketch");
  y = 0;
  x1 = width; 
  y1 = 0; 
  radius = width/10
  strokeWeight(0);
}

function draw() {
  background("black");

  // Erster Kreis: horizontal und vertikal
  fill(color1);
  circle(x, y, radius);
  speed1 *= 1.0;
  x += speed1; //nach rechts
  y += speed1; //nach unten
  console.log(x, y);
  if (x > width + radius) {
    x = -radius;
    y = -radius;
    speed1 = 1;
  }
  if (x > width / 2) {
    color1 = "red";
    speed1 *= 1.3;
  }
  if (x < width / 2) {
    color1 = "white";
  }

  // Zweiter Kreis: diagonal von rechts oben nach links unten
  fill(color2);
  circle(x1, y1, radius);
  speed2 *= 1.0;
  x1 -= speed2; //nach links
  y1 += speed2; //nach unten
  console.log(x1, y1);
  if (y1 > height + radius || x1 < -radius) {
    x1 = width+radius; 
    y1 = -radius; 
    speed2 = 1;
  }
  if (y1 > height / 2) {
    color2 = "blue";
    speed2 *= 1.3;
  }
  if (x1 > width / 2) {
    color2 = "white";
  }
}
