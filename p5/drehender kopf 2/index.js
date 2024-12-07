let centerX, centerY; // Mittelpunkt des Kreises
let radius, radius2, radius3; // Radien der Kreise

let angle1 = 0;       // Aktueller Winkel für Innen
let angle2 = 0;       // Aktueller Winkel für Mitte
let angle3 = 0;       // Aktueller Winkel für Außen

let speed1 = 0.01;
let speed2 = 0.02;
let speed3 = 0.03;

let rotation = 0

let img; // Variable für das Bild

function preload() {
  // Lade dein Bild hier. Ersetze 'deinBild.png' durch den Pfad zu deinem Bild.
  img = loadImage("https://hbk-bs.github.io/the-archives-ivohartwig/assets/images/3B8B0451-FC46-4D64-A7A2-7B395852DCAE_1_201_a.png");
}

function setup() {
  createCanvas(400, 400);

  // Setze Radien relativ zur Leinwandgröße
  radius = width * 0.15;   // 40% der Breite
  radius2 = width * 0.3;  // 30% der Breite
  radius3 = width * 0.45;  // 20% der Breite

  centerX = width / 2; // Zentrum des Kreises in der Mitte der Canvas
  centerY = height / 2;
}

function draw() {
  background(0);
  imageMode(CENTER);

  push()
  translate(width/2, height/2)
  rotate(rotation)
  image(img, 0, 0, width / 16, height / 12);
  pop()
  rotation+=0.01
  // Innen
  
  let x1 = centerX + radius * cos(angle1);
  let y1 = centerY + radius * sin(angle1);
  image(img, x1, y1, width / 16, height / 12);
  angle1 += speed1; // Erhöhe den Winkel für Innen
  
  

  // Mitte
  let x2 = centerX + radius2 * cos(angle2);
  let y2 = centerY + radius2 * sin(angle2);
  image(img, x2, y2, width / 16, height / 12);
  angle2 += speed2; // Erhöhe den Winkel für Mitte

  // Außen 
  let x3 = centerX + radius3 * cos(angle3);
  let y3 = centerY + radius3 * sin(angle3);
  image(img, x3, y3, width / 16, height / 12);
  angle3 += speed3; // Erhöhe den Winkel für Außen
}
