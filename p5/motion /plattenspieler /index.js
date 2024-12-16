let img; // Variable für das PNG-Bild
let angle = 0; // Anfangswinkel für die Rotation
let speed = 0.0; // Verlangsamt die Drehgeschwindigkeit
let x = (n) => width * n;
let y = (n) => height * n;
let s = (n) => (height > width ? height * n : width * n);
let grad = 0;
let circleX = 0.2
let circleY = 0.2
let radius1 = 0.08
let circleX1 = 0.2
let circleY1 = 0.35
let radius2 = 0.08
let circleX2 = 0.22
let circleY2 = 0.7
let radius3 = 0.08

let color1 = "black"
let color2 = "black"
let color3 = "black"

let music; // Musik-Variable

let pa = 600
let clickCount = 0; // Klickzähler für den unteren Kreis

function preload() {
  img = loadImage("https://hbk-bs.github.io/the-archives-ivohartwig/assets/images/Platte.png");
  music = loadSound("https://hbk-bs.github.io/the-archives-ivohartwig/assets/images/L&W - MAKKO.mp3"
); // Lade deine Musikdatei
}

function setup() {
  const canvas = createCanvas(500,400);
  canvas.parent("sketch");
  background("white"); 
}

function draw() {
  background("white");
  strokeWeight(0);

  // Plattenspieler
  fill("#2b231f");
  quad(x(0.1), y(0.1), x(0.9), y(0.1), x(0.9), y(0.9), x(0.1), y(0.9));

  // Plattenspieler links quad
  fill("#4a3c35");
  quad(x(0.15), y(0.6), x(0.35), y(0.6), x(0.35), y(0.8), x(0.15), y(0.8));

  //Platte aussuchen 
  fill("#9e9e9e")
  circle(x(circleX2), y(circleY2), s(radius3));
  let d3 = dist(mouseX, mouseY, x(circleX2), y(circleY2)); // Zweiter Kreis (Stop)
  if (d3 < s(radius3) / 2 ){
    color3="white"
  }else{
    color3="black"
  }
  fill(color3)
  circle(x(0.22), y(0.7), s(0.05));
  fill("#9e9e9e")
  circle(x(0.22), y(0.7), s(0.025));

  //play and stop
  fill("#9e9e9e");
  circle(x(circleX), y(circleY), s(radius1));
  fill("#9e9e9e");
  circle(x(circleX1), y(circleY1), s(radius2));

  let d1 = dist(mouseX, mouseY, x(circleX), y(circleY)); // Zweiter Kreis (Stop)
  if (d1 < s(radius1) / 2 && pa === 0 && !isSpinning && !isArmMoving){
    color1="white"
  }else{
    color1="black"
  }
  fill(color1)
  triangle(x(0.19), y(0.18), x(0.215), y(0.2), x(0.19), y(0.22))

  let d2 = dist(mouseX, mouseY, x(circleX1), y(circleY1)); // Zweiter Kreis (Stop)
  if (d2 < s(radius2) / 2 && pa === 0 && isSpinning && isArmMoving){
    color2="white"
  }else{
    color2="black"
  }
  fill(color2)
  quad(x(0.185), y(0.33), x(0.195), y(0.33), x(0.195), y(0.37), x(0.185), y(0.37));
  quad(x(0.205), y(0.33), x(0.215), y(0.33), x(0.215), y(0.37), x(0.205), y(0.37));


  // Plattenspieler rechts quad
  //fill("yellow");
  //quad(x(0.6), y(0.75), x(0.85), y(0.75), x(0.85), y(0.8), x(0.6), y(0.8));

  // Untergrund Platte
  fill("#9e9e9e");
  circle(x(0.5), y(0.5), s(0.49));

  // Platte
  push()
  translate(width / 2, height / 2); 
  rotate(angle); 
  imageMode(CENTER); 
  let scaleFactor = width * 0.48; 
  image(img, 0, pa, scaleFactor, scaleFactor); 
  angle += speed;
  pop();

  // Arm
  push();
  translate(x(0.8), y(0.3)); 
  rotate(grad); 

  // Oberer grüner Arm
  fill("black");
  quad(-s(0.05), -s(0.1), s(0.05), -s(0.1), s(0.05), s(0.05), -s(0.05), s(0.05));
  
  // Mittlerer grüner Arm
  fill("#9e9e9e");
  quad(-s(0.01), s(0.05), s(0.01), s(0.05), s(0.01), s(0.4), -s(0.01), s(0.4));
  
  // Unteres grünes Rechteck
  push(); 
  translate(0, s(0.4)); 
  rotate(radians(40)); 
  fill("black");
  quad(-s(0.03), -s(0.05), s(0.03), -s(0.05), s(0.03), s(0.05), -s(0.03), s(0.05));
  pop(); 

  pop(); 
}


function touchStarted() {
  handleInteraction(mouseX, mouseY); // Nutzt dieselbe Logik wie mousePressed
  return false; // Verhindert das Standardverhalten auf mobilen Geräten
}

function mousePressed() {
  handleInteraction(mouseX, mouseY); // Teilt die Logik mit touchStarted
}

let isArmMoving = false; // Kontrolliert, ob der Arm sich bewegt
let isSpinning = false; // Kontrolliert, ob die Platte sich dreht

function handleInteraction(px, py) {
  let d1 = dist(px, py, x(circleX), y(circleY)); // Erster Kreis (Start)
  if (d1 < s(radius1) / 2 && pa === 0) {
    // Aktion nur ausführen, wenn nichts läuft
    if (!isSpinning && !isArmMoving) {
      grad = radians(35); // Bewege den Arm
      speed = 0.02; // Setze eine feste Geschwindigkeit
      isSpinning = true; // Platte dreht sich
      isArmMoving = true; // Arm bewegt sich

      if (!music.isPlaying()) {
        console.log("Music starts playing...");
        music.loop(); // Startet die Musik im Loop
      }
    }
  }

  let d2 = dist(px, py, x(circleX1), y(circleY1)); // Zweiter Kreis (Stop)
  if (d2 < s(radius2) / 2) {
    // Aktion nur ausführen, wenn Platte läuft
    if (isSpinning || isArmMoving) {
      grad = 0; // Setze den Arm zurück
      speed = 0; // Stoppe die Platte
      isSpinning = false; // Platte dreht sich nicht
      isArmMoving = false; // Arm bewegt sich nicht

      if (music.isPlaying()) {
        console.log("Music stops...");
        music.stop(); // Stoppt die Musik
      }
    }
  }

  let d3 = dist(px, py, x(circleX2), y(circleY2)); // Dritter Kreis
  if (d3 < s(radius3) / 2) {
    // Klickzähler erhöhen
    clickCount++;
    // Die Platte auf den Ursprung setzen, basierend auf der Klickanzahl
    pa = clickCount % 2 === 0 ? 600 : 0;
    if (pa===600){
      console.log("Music stops...");
      music.stop(); // Stoppt die Musik
      grad = 0; // Setze den Arm zurück
      speed = 0; // Stoppe die Platte
      isSpinning = false; // Platte dreht sich nicht
      isArmMoving = false; // Arm bewegt sich nicht
    }
  }
}


