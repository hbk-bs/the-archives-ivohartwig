let centerX, centerY; // Mittelpunkt des Kreises
let radiustacho; // Radien der Kreise
let radiustacho2;
let radiustacho3;
let angle = 0;  
let angle2 =0;   
let angle3 =0;  // Aktueller Winkel für Mitte
      
let speed = 0.01;
let speed2 = 0.02;
let speed3 = 0.03;

let clickCount = 0;

let color1 = "white"

let x = (n) => width * n;
let y = (n) => height * n;
let s = (n) => (height > width ? height * n : width * n);



function setup() {
  createCanvas(400, 400);

  // Setze Radien relativ zur Leinwandgröße
 
  radiustacho = width * 0.15;  // 30% der Breite
  radiustacho2 = width * 0.3;
  radiustacho3 = width * 0.45

 

  centerX = width / 2; // Zentrum des Kreises in der Mitte der Canvas
  centerY = height / 2;
}

function draw() {
  background(0);
  
  // Mitte
  let x1 = centerX + radiustacho * cos(angle);
  let y1 = centerY + radiustacho * sin(angle);
  
  stroke("white")
  strokeWeight(2)
  line(x(0.5),y(0.5),x1,y1)
  angle += speed; // Erhöhe den Winkel für Mitte

  let x2 = centerX + radiustacho2 * cos(angle2);
  let y2 = centerY + radiustacho2 * sin(angle2);
  angle2 += speed2
  stroke(color1)
  line(x1,y1,x2,y2)

  let x3 = centerX + radiustacho3 * cos(angle3);
  let y3 = centerY + radiustacho3 * sin(angle3);
  angle3 += speed3
  stroke(color1)
  line(x2,y2,x3,y3)
  


}

function mousePressed(){
  clickCount++
  speed = clickCount % 1 === 1 ? speed : speed* -1;
  speed2 = clickCount % 1 === 1 ? speed2 : speed2* -1;
  speed3 = clickCount % 1 === 1 ? speed3 : speed3* -1;
}
