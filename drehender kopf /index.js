let img; // Variable für das PNG-Bild
let angle = 0; // Anfangswinkel für die Rotation

function preload() {
  // Lade dein Bild hier. Ersetze 'deinBild.png' durch den Pfad zu deinem Bild.
  img = loadImage("https://hbk-bs.github.io/the-archives-ivohartwig/assets/images/3B8B0451-FC46-4D64-A7A2-7B395852DCAE_1_201_a.png");
}

function setup() {
  createCanvas(400, 400); // Größe der Zeichenfläche
  background("black"); // Weißer Hintergrund
}

function draw() {
  background("black"); // Weißer Hintergrund bei jedem Frame
  
  translate(width / 2, height / 2); // Verschiebt den Ursprung in die Mitte
  rotate(angle); // Rotiert das Bild um den Ursprung
  imageMode(CENTER); // Setzt den Modus, sodass das Bild von der Mitte aus gezeichnet wird
  image(img, 0, 0, 150, height/2); // Zeichnet das Bild in der Mitte
  
  angle += 0.02; // Winkel inkrementieren, um die Rotation zu erzeugen
}

function keyPressed() {
  if (key === 'g') {
    saveGif('loop', 5);
  }
}

