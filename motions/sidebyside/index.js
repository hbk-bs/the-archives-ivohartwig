

let amplitude = 0.15;
let radius =0.005;
let speed1 = 1;
let speed2 = 1;
let getbag = 12;

let x1 = 0;
let angle1 = 0;
let centerY1;

let x2 = 0;
let angle2 = 0;
let centerY2;

let X = (n) => width * n;
let Y = (n) => height * n;
let S = (n) => (height > width ? height * n : width * n);

let hue = 200
let hue2 = 200

function setup() {
  const canvas = createCanvas(350, 500);
  canvas.parent("sketch");

  centerY1 = height / 2; // Erster Kreis in der Mitte
  centerY2 = height / 2; // Zweiter Kreis leicht versetzt
  x1 = width*0.05

  colorMode(HSL, 360, 100, 100, 100);
  strokeWeight(0);
}

function draw() {

  
  background(0,10);
  

  let y1 = centerY1 + S(amplitude) * sin(angle1); // Sinusbewegung
  let y2 = centerY2 + S(amplitude) * -sin(angle2); // Cosinusbewegung
  strokeWeight(1)
  stroke("white")
  line(x1,y1,x2,y2)
  strokeWeight(0)

  // Erster Kreis (Sinus)
  stroke(hue2,100,50);
  strokeWeight(2)
  point(x1, y1,);
  speed1 *= 1.;
  x1 += speed1;
  angle1 += 0.07;
  if (x1 > width + width/getbag + width*0.05) {
    x1 = width -width - width/getbag
    speed1 = 1
    hue = random (200,260)
  }

  // Zweiter Kreis (Cosinus)
  
  stroke(hue,100,50);
  strokeWeight(2)
  point(x2, y2,);
  speed2 *= 1.0;
  x2 += speed2;
  angle2 += 0.02;
  if (x2 > width + width/getbag ) {
    x2 = width - width - width/getbag - width*0.05
    speed2 = 1
    hue = random (200,260)
  }

  //hue = (hue + 1) % 360;
  

  
}

function keyPressed() {
  if (key === 'g') {
    saveGif('loop', 5);
  }
}
