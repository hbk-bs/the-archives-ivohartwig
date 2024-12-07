let img; // Variable für das PNG-Bild
let angle = 0; // Anfangswinkel für die Rotation
let totalFrames = 60; // Gesamtanzahl der Frames für das GIF (eine vollständige Drehung in 60 Frames)
let angleIncrement = 360 / totalFrames; // Berechnet den Winkel pro Frame für eine vollständige Drehung
let speed = 0.02; // Verlangsamt die Drehgeschwindigkeit

function preload() {
  // Lade dein Bild hier. Ersetze 'deinBild.png' durch den Pfad zu deinem Bild.
  img = loadImage("https://hbk-bs.github.io/the-archives-ivohartwig/assets/images/3B8B0451-FC46-4D64-A7A2-7B395852DCAE_1_201_a.png");
}

function setup() {
  createCanvas(400, 400); // Größe der Zeichenfläche
  background("black"); // Schwarz als Hintergrund
  frameRate(30); // Setzt eine konstante Framerate für eine flüssige GIF-Wiedergabe
}

function draw() {
  background("black"); // Schwarz als Hintergrund bei jedem Frame
  
  translate(width / 2, height / 2); // Verschiebt den Ursprung in die Mitte
  rotate(angle); // Rotiert das Bild um den Ursprung
  imageMode(CENTER); // Setzt den Modus, sodass das Bild von der Mitte aus gezeichnet wird
  image(img, 0, 0, width / 10, height / 8); // Zeichnet das Bild in der Mitte
  
  // Inkrementiere den Winkel um den Wert von `angleIncrement * speed`, um die Drehung zu verlangsamen
  angle += angleIncrement * speed;
}

function keyPressed() {
  if (key === 'g') {
    saveGif('loop.gif', totalFrames); // Speichert das GIF mit der angegebenen Anzahl an Frames
  }
}
