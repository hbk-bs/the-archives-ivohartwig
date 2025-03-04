let x1 = 0; // X-Position des ersten Kreises
let y1 = 0; // Y-Position des ersten Kreises
let x2 = 0; // X-Position des zweiten Kreises
let y2 = 0; // Y-Position des zweiten Kreises
let radius = 40;

let speed1 = 1; // Geschwindigkeit des ersten Kreises
let speed2 = 1; // Geschwindigkeit des zweiten Kreises
const growthRate = 0.01; // Steuerung der exponentiellen Bewegung
let color1 = "white"; // Farbe des ersten Kreises
let color2 = "white"; // Farbe des zweiten Kreises
let X = (n) => width * n;
let Y = (n) => height * n;
let S = (n) => (height > width ? height * n : width * n);

function setup() {
  const canvas = createCanvas(300, 400);
  canvas.parent("sketch");
  y1 = height / 2; // Anfangsposition des ersten Kreises
  y2 = height / 2; // Anfangsposition des zweiten Kreises
  strokeWeight(0);
}

function draw() {
  background(0,70);

  //Koordinatensystem
  strokeWeight(1)
  stroke("white")
  line(X(0.1),Y(0),X(0.1),Y(1))
  line(X(0),Y(0.5),X(1),Y(0.5))

  line(X(0.925),Y(0.525),X(0.975),Y(0.575))
  line(X(0.975),Y(0.525),X(0.925),Y(0.575))

  line(X(0.025),Y(0.025),X(0.05),Y(0.05))
  line(X(0.075),Y(0.025),X(0.025),Y(0.075))


  strokeWeight(0)
  // Erster Kreis (Bewegt sich nach oben)
  fill(color1);
  circle(x1, y1, S(0.03));
  speed1 *= 1.00;
  x1 += speed1;
  if (x1 > width / 2) {
    color1 = "White"; // Farbe auf Rot ändern
    y1 = height - height/2 * Math.exp(growthRate * (x1 - width / 2));
    speed1 *= 1.01;
    x1 += speed1;
  } else {
    y1 = height / 2;
  }

  

  // Zweiter Kreis (Bewegt sich nach unten)
  fill(color2);
  circle(x2, y2, S(0.03));
  speed2 *= 1.00;
  x2 += speed2;
  if (x2 > width / 2) {
    color2 = "white"; // Farbe auf Blau ändern
    y2 = height/2 * Math.exp(growthRate * (x2 - width / 2));
    speed2 *= 1.01;
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

function keyPressed() {
  if (key === 'g') {
    saveGif('loop', 5);
  }
}



