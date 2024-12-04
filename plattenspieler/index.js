let img; // Variable für das PNG-Bild
let angle = 0; // Anfangswinkel für die Rotation
let speed = 0.0; // Verlangsamt die Drehgeschwindigkeit
let x = (n) => width * n;
let y = (n) => height * n;
let s = (n) => (height > width ? height * n : width * n);
let grad = 0;

let music; // Musik-Variable

function preload() {
  img = loadImage("https://hbk-bs.github.io/the-archives-ivohartwig/assets/images/Platte.png");
  music = loadSound("https://raw.githubusercontent.com/hbk-bs/the-archives-ivohartwig/main/01%20-%20ten.mp3"
); // Lade deine Musikdatei
}

function setup() {
  createCanvas(500, 400);
  background("black"); 
}

function draw() {
  background("black");
  strokeWeight(0);

  // Plattenspieler
  fill("grey");
  quad(x(0.1), y(0.1), x(0.9), y(0.1), x(0.9), y(0.9), x(0.1), y(0.9));

  // Plattenspieler links quad
  fill("yellow");
  quad(x(0.15), y(0.6), x(0.35), y(0.6), x(0.35), y(0.8), x(0.15), y(0.8));
  fill("blue");
  circle(x(0.26), y(0.7), s(0.05));

  // Plattenspieler rechts quad
  fill("yellow");
  quad(x(0.6), y(0.75), x(0.85), y(0.75), x(0.85), y(0.8), x(0.6), y(0.8));

  // Untergrund Platte
  fill("black");
  circle(x(0.5), y(0.5), s(0.49));

  // Platte
  push()
  translate(width / 2, height / 2); 
  rotate(angle); 
  imageMode(CENTER); 
  let scaleFactor = width * 0.48; 
  image(img, 0, 0, scaleFactor, scaleFactor); 
  angle += speed;
  pop();

  // Arm
  push();
  translate(x(0.8), y(0.3)); 
  rotate(grad); 

  // Oberer grüner Arm
  fill("green");
  quad(-s(0.05), -s(0.1), s(0.05), -s(0.1), s(0.05), s(0.05), -s(0.05), s(0.05));
  
  // Mittlerer grüner Arm
  fill("lightgreen");
  quad(-s(0.01), s(0.05), s(0.01), s(0.05), s(0.01), s(0.4), -s(0.01), s(0.4));
  
  // Unteres grünes Rechteck
  push(); 
  translate(0, s(0.4)); 
  rotate(radians(40)); 
  fill("green");
  quad(-s(0.03), -s(0.05), s(0.03), -s(0.05), s(0.03), s(0.05), -s(0.03), s(0.05));
  pop(); 

  pop(); 
}

function mousePressed() {
  grad += radians(35);
  speed += 0.02;

  // Starte Musik, wenn die Maus gedrückt wird
  if (!music.isPlaying()) {
    console.log("Music starts playing...");
    music.loop(); // Startet die Musik im Loop
  }
}

function mouseReleased() {
  grad = 0;
  speed = 0;

  // Stoppe Musik, wenn die Maus losgelassen wird
  if (music.isPlaying()) {
    console.log("Music stops...");
    music.stop(); // Stoppt die Musik
  }
}
