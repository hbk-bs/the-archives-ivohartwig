let centerX, centerY; // Mittelpunkt des Kreises
let radiustacho; // Radien der Kreise

let angle = 1.9; // Aktueller Winkel für Mitte
let speed = 0.05;
let isMousePressed = false; // Variable für den Mausstatus
let tachrunter = false

let x = (n) => width * n;
let y = (n) => height * n;
let s = (n) => (height > width ? height * n : width * n);
let circleX = 0.8
let circleY = 0.8
let radiuspedal = 0.1

function setup() {
  createCanvas(400, 400);

  // Setze Radien relativ zur Leinwandgröße
  radiustacho = width * 0.4; // 40% der Breite

  centerX = width / 2; // Zentrum des Kreises in der Mitte der Canvas
  centerY = height / 2;
}

function draw() {
  background(0);

  // Berechnung der Linie
  let x2 = centerX + radiustacho * cos(angle);
  let y2 = centerY + radiustacho * sin(angle);

  // Zeichne die Linie
  stroke("white");
  strokeWeight(2);
  line(centerX, centerY, x2, y2);

  // Wenn Maus gedrückt, erhöhe den Winkel
  if (isMousePressed && angle < PI * 1.9) {
    angle += speed;
    tachrunter = false; // Während Maus gedrückt, kein Absenken
  }

  // Wenn tachrunter aktiv, verringere den Winkel
  if (tachrunter && angle > 1.9) {
    angle -= speed * 0.2;
  }

  // Begrenze den Winkelbereich
  if (angle > PI * 1.9) {
    angle = PI * 1.9; // Oberes Limit
    tachrunter = true; // Absenken aktivieren
  }
  if (angle < 1.9) {
    angle = 1.9; // Unteres Limit
    tachrunter = false; // Absenken deaktivieren
  }
  

  // Zeichne den Kreis
  strokeWeight(0);
  circle(x(circleX), y(circleY), s(radiuspedal));
}


function mousePressed() {
  let d1 = dist(mouseX, mouseY, x(circleX), y(circleY)); // Zweiter Kreis (Stop)
  if (d1 < s(radiuspedal)){
  isMousePressed = true; // Setze Status auf "gedrückt"
  tachrunter = false 
  }
}

function mouseReleased() {
  isMousePressed = false; // Setze Status auf "losgelassen"
  tachrunter = true
}

//Save as gif
function keyPressed() {
  if (key === 'g') {
    saveGif('loop', 5);
  }
}
