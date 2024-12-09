let centerX, centerY; 

let radiustacho; 
let radiustacho2;
let radiustacho3;
let radiustacho4;
let radiustacho5;

let angle = 0;  
let angle2 =0;   
let angle3 =0;
let angle4 =0; 
let angle5 =0;  
      
let speed = 0.01;
let speed2 = 0.02;
let speed3 = 0.03;
let speed4 = 0.04;
let speed5 = 0.05;

let clickCount = 0;

let color1 = "white"

let x = (n) => width * n;
let y = (n) => height * n;
let s = (n) => (height > width ? height * n : width * n);



function setup() {
  createCanvas(400, 400);

  // Setze Radien relativ zur Leinwandgröße
 
  radiustacho = width * 0.08;  // 30% der Breite
  radiustacho2 = width * 0.16;
  radiustacho3 = width * 0.24;
  radiustacho4 = width * 0.32;
  radiustacho5 = width * 0.4;

 

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

  let x4 = centerX + radiustacho4 * cos(angle4);
  let y4 = centerY + radiustacho4 * sin(angle4);
  angle4 += speed4
  stroke(color1)
  line(x3,y3,x4,y4)
  
  let x5 = centerX + radiustacho5 * cos(angle5);
  let y5 = centerY + radiustacho5 * sin(angle5);
  angle5 += speed5
  stroke(color1)
  line(x4,y4,x5,y5)
  


}

function mousePressed(){
  clickCount++
  speed = clickCount % 1 === 1 ? speed : speed* -1;
  speed2 = clickCount % 1 === 1 ? speed2 : speed2* -1;
  speed3 = clickCount % 1 === 1 ? speed3 : speed3* -1;
  speed4 = clickCount % 1 === 1 ? speed4 : speed4* -1;
  speed5 = clickCount % 1 === 1 ? speed5 : speed5* -1;
}
