let x = 0;
let y = 0;

let x1 = 0;
let y1 = 0;

let x2 = 0;
let y2 = 0;

let x3 = 0;
let y3 = 0;

let radius;

let speed1 = 1;
let speed2 = 1;
let speed3 = 1;
let speed4 = 1;

var numbers = [];

let X = (n) => width * n;
let Y = (n) => height * n;
let S = (n) => (height > width ? height * n : width * n);



function preload() {
  img1 = loadImage("https://hbk-bs.github.io/the-archives-ivohartwig/assets/images/auto2.png");
  img2 = loadImage("https://hbk-bs.github.io/the-archives-ivohartwig/assets/images/auto.png");
}

function setup() {
  const canvas = createCanvas(400, 400);
  canvas.parent("sketch");

  x= width*0.075 
  x1 = -width +width*0.075 ; 
  y2 =  height -height*0.075 ; 
  x3 = width
  y3 = height + height*0.075
   
  radius = width/10
  
  strokeWeight(0);
}

function draw() {
  background("lightgrey");
  strokeWeight(0)
  fill("grey")
  push();
  translate(width / 2, height / 2); // Verschiebt den Ursprung in die Mitte
  rotate(PI / 4); // Dreht um 45 Grad (PI/4 Radiant)
  quad(
    -X(0.1), -Y(0.8),
    X(0.1), -Y(0.8),
    X(0.1), Y(0.8),
    -X(0.1), Y(0.8)
  );
  pop();

  // Zweiter grauer Bereich
  push();
  translate(width / 2, height / 2); // Verschiebt den Ursprung in die Mitte
  rotate(PI / 4); // Dreht um 45 Grad (PI/4 Radiant)
  quad(
    -X(0.8), -Y(0.1),
    X(0.8), -Y(0.1),
    X(0.8), Y(0.1),
    -X(0.8), Y(0.1)
  );
  pop();

  quad(X(0.5),Y(0.4),X(0.6),Y(0.5),X(0.5),Y(0.6),X(0.4),Y(0.5))

  stroke("white")
strokeWeight(2)
push()
translate(0, 0 ) // Einheitliche vertikale Verschiebung für die erste Schleife
rotate(QUARTER_PI) 
let Y1 = -height
for (let i = 0; i < 50; i++) {
  const X1 = width * 0.71
  const Y2 = Y1 + 20
  Y1 += 30
  line(X1, Y1, X1, Y2)
}
pop()

stroke("white")
strokeWeight(2)
push()
translate(0, height ) // Entsprechend konsistente vertikale Verschiebung für die zweite Schleife
rotate(-QUARTER_PI) 
let Y11 = -height
for (let i = 0; i < 50; i++) {
  const X2 = width * 0.71
  const Y22 = Y11 + 20
  Y11 += 30
  line(X2, Y11, X2, Y22)
}
pop()

fill("grey")
stroke("grey")
strokeWeight(0)
quad(X(0.5),Y(0.36),X(0.64),Y(0.5),X(0.5),Y(0.64),X(0.36),Y(0.5))

  

  

  



// Animation Auto 1
imageMode(CENTER);
image(img1, x, y, width / 10, height / 10); 
x += speed1;
y += speed1;

if (x > width + radius) {
  x = -radius + width * 0.075;
  y = -radius;
  speed1 = 1;
}

 // Animation Auto 2
 imageMode(CENTER);
 image(img2, x1, y1, width / 10, height / 10);
 x1 -= speed2;
 y1 += speed2;

 if (y1 > height + radius || x1 < -radius) {
   x1 = width + radius; 
   y1 = -radius + width * 0.075; 
   speed2 = 1;
 }

 // Abstandsmessung zwischen Auto 1 und Auto 2
 let distance = dist(x, y, x1, y1);
 if (distance < width / 10) { 
   // Animation zurücksetzen
   x = width * 0.075;
   y = 0;
   x1 = -width + width * 0.075;
   y1 = 0;
   console.log("Autos berühren sich! Animation zurückgesetzt.");
 }

imageMode(CENTER); // Setzt den Modus, sodass das Bild von der Mitte aus gezeichnet wird
//image(img2, x2, y2, width / 10, height / 10); // Zeichnet das Bild in der Mitte
speed1 = 1.5;
x2 += speed3; //nach rechts
y2 -= speed3; //nach unten
console.log(x, y);
if (x2 > width + radius) {
  x2 = -radius
  y2 =  height+radius-width*0.075;
  speed3 = 1;
}

imageMode(CENTER); // Setzt den Modus, sodass das Bild von der Mitte aus gezeichnet wird
//image(img1, x3, y3, width / 10, height / 10); // Zeichnet das Bild in der Mitte
speed2 *= 1.0;
x3 -= speed4; //nach links
y3 -= speed4; //nach unten
console.log(x1, y1);
if (x3 < -radius || y3 < -radius) {
  x3 = width + radius;
  y3 = height + radius + height * 0.075; // Rücksetzen wie die anderen Autos
  speed4= 1
}

  
}

function keyPressed() {
  if (key === 'g') {
    saveGif('loop', 5);
  }
}
