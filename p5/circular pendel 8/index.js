let centerX, centerY; 

let radiustacho; 
let radiustacho2;
let radiustacho3;
let radiustacho4;
let radiustacho5;
let radiustacho6;
let radiustacho7;
let radiustacho8;

let angle = 0;  
let angle2 = 0;   
let angle3 = 0;
let angle4 = 0; 
let angle5 = 0;  
let angle6 = 0;
let angle7 = 0;
let angle8 = 0;
      
let speed = 0.01;
let speed2 = 0.02;
let speed3 = 0.03;
let speed4 = 0.04;
let speed5 = 0.05;
let speed6 = 0.06;
let speed7 = 0.07;
let speed8 = 0.08;

let speedMultiplier = 0.5; // Multiplikator für die Geschwindigkeit

let clickCount = 0;

let color1 = "white";

let x = (n) => width * n;
let y = (n) => height * n;
let s = (n) => (height > width ? height * n : width * n);

function setup() {
  createCanvas(400, 400);

  // Setze Radien relativ zur Leinwandgröße
  radiustacho = width * 0.05;  
  radiustacho2 = width * 0.1;
  radiustacho3 = width * 0.15;
  radiustacho4 = width * 0.2;
  radiustacho5 = width * 0.25;
  radiustacho6 = width * 0.3;
  radiustacho7 = width * 0.35;
  radiustacho8 = width * 0.4;

  centerX = width / 2; 
  centerY = height / 2;
}

function draw() {
  background(0);

  // Mitte
  let x1 = centerX + radiustacho * cos(angle);
  let y1 = centerY + radiustacho * sin(angle);
  
  stroke("white");
  strokeWeight(2);
  line(x(0.5), y(0.5), x1, y1);
  angle += speed * speedMultiplier; // Multipliziere die Geschwindigkeit

  let x2 = centerX + radiustacho2 * cos(angle2);
  let y2 = centerY + radiustacho2 * sin(angle2);
  angle2 += speed2 * speedMultiplier;
  stroke(color1);
  line(x1, y1, x2, y2);

  let x3 = centerX + radiustacho3 * cos(angle3);
  let y3 = centerY + radiustacho3 * sin(angle3);
  angle3 += speed3 * speedMultiplier;
  line(x2, y2, x3, y3);

  let x4 = centerX + radiustacho4 * cos(angle4);
  let y4 = centerY + radiustacho4 * sin(angle4);
  angle4 += speed4 * speedMultiplier;
  line(x3, y3, x4, y4);
  
  let x5 = centerX + radiustacho5 * cos(angle5);
  let y5 = centerY + radiustacho5 * sin(angle5);
  angle5 += speed5 * speedMultiplier;
  line(x4, y4, x5, y5);

  let x6 = centerX + radiustacho6 * cos(angle6);
  let y6 = centerY + radiustacho6 * sin(angle6);
  angle6 += speed6 * speedMultiplier;
  line(x5, y5, x6, y6);

  let x7 = centerX + radiustacho7 * cos(angle7);
  let y7 = centerY + radiustacho7 * sin(angle7);
  angle7 += speed7 * speedMultiplier;
  line(x6, y6, x7, y7);

  let x8 = centerX + radiustacho8 * cos(angle8);
  let y8 = centerY + radiustacho8 * sin(angle8);
  angle8 += speed8 * speedMultiplier;
  line(x7, y7, x8, y8);
}

function mousePressed(){
  clickCount++
  speed = clickCount % 1 === 1 ? speed : speed* -1;
  speed2 = clickCount % 1 === 1 ? speed2 : speed2* -1;
  speed3 = clickCount % 1 === 1 ? speed3 : speed3* -1;
  speed4 = clickCount % 1 === 1 ? speed4 : speed4* -1;
  speed5 = clickCount % 1 === 1 ? speed5 : speed5* -1;
  speed6 = clickCount % 1 === 1 ? speed6 : speed6* -1;
  speed7 = clickCount % 1 === 1 ? speed7 : speed7* -1;
  speed8 = clickCount % 1 === 1 ? speed8 : speed8* -1;
}
