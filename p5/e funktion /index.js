let x1 = 0; // X-Position des ersten Kreises
let y1 = 0; // Y-Position des ersten Kreises
let x2 = 0; // X-Position des zweiten Kreises
let y2 = 0; // Y-Position des zweiten Kreises
let radius = 50;
let s = (n) => (height > width ? height * n : width * n);
let speed1 = 1; // Geschwindigkeit des ersten Kreises
let speed2 = 1; // Geschwindigkeit des zweiten Kreises
const growthRate = 0.01; // Steuerung der exponentiellen Bewegung
let color1 = "white"; // Farbe des ersten Kreises
let color2 = "white"; // Farbe des zweiten Kreises

function setup() {
  const canvas = createCanvas(300, 200);
  canvas.parent("sketch");
  y1 = height / 2; // Anfangsposition des ersten Kreises
  y2 = height / 2; // Anfangsposition des zweiten Kreises
  strokeWeight(0);
}

function draw() {
  background("black");

  // Erster Kreis (Bewegt sich nach oben)
  fill(color1);
  circle(x1, y1, s(0.15));
  speed1 *= 1.00;
  x1 += speed1;
  if (x1 > width / 2) {
    color1 = "red"; // Farbe auf Rot ändern
    y1 = height - height/2 * Math.exp(growthRate * (x1 - width / 2));
    speed1 *= 1.07;
    x1 += speed1;
  } else {
    y1 = height / 2;
  }

  

  // Zweiter Kreis (Bewegt sich nach unten)
  fill(color2);
  circle(x2, y2, s(0.15));
  speed2 *= 1.00;
  x2 += speed2;
  if (x2 > width / 2) {
    color2 = "blue"; // Farbe auf Blau ändern
    y2 = height/2 * Math.exp(growthRate * (x2 - width / 2));
    speed2 *= 1.07;
    x2 += speed2;
  } else {
    y2 = height / 2;
  }

  // Zurücksetzen der Kreise
  if (y1 < -radius) {
    x1 = -radius;
    speed1 = 1;
    color1 = "white"; // Farbe zurücksetzen
  }
  if (y2 > height + radius) {
    x2 = -radius;
    speed2 = 1;
    color2 = "white"; // Farbe zurücksetzen
  }
}



