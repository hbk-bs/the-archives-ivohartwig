let centerX, centerY; // Mittelpunkt des Kreises
let radiustacho; // Radien der Kreise

let angle = 0;       // Aktueller Winkel für Mitte
      
let speed = 0.02;

let x = (n) => width * n;
let y = (n) => height * n;
let s = (n) => (height > width ? height * n : width * n);



function setup() {
  createCanvas(400, 400);

  // Setze Radien relativ zur Leinwandgröße
 
  radiustacho = width * 0.4;  // 30% der Breite
 

  centerX = width / 2; // Zentrum des Kreises in der Mitte der Canvas
  centerY = height / 2;
}

function draw() {
  background(0);
  
  // Mitte
  let x2 = centerX + radiustacho * cos(angle);
  let y2 = centerY + radiustacho * sin(angle);
  
  stroke("white")
  strokeWeight(2)
  line(x(0.5),y(0.5),x2,y2)
  angle += speed; // Erhöhe den Winkel für Mitte

}
