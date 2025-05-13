// Variablen für Timer
let startTime = null; // Speichert die Startzeit
let isTiming = false; // Gibt an, ob der Timer aktiv ist
let elapsed = 0; // Verstrichene Zeit

// Variablen für Interaktion
let x = (n) => width * n;
let y = (n) => height * n;
let s = (n) => (height > width ? height * n : width * n);

let circleX = 0.5;
let circleY = 0.5;
let circleRadius = 0.3;

let circleImage; // Bild für normalen Zustand
let circleImage2; // Bild für Wand-Zustand

let isAtWall = false; // Zustand, ob der Kreis die Wand berührt

let noiseOffsetX = 0;
let noiseOffsetY = 1000; // Verschiedene Offsets für X und Y

let cooldown = false; // Cooldown für mousePressed

// Bilder vorladen
function preload() {
    circleImage = loadImage("https://hbk-bs.github.io/the-archives-ivohartwig/assets/images/Happy.png");
    circleImage2 = loadImage("https://hbk-bs.github.io/the-archives-ivohartwig/assets/images/Dead.png");
}

// Canvas initialisieren
function setup() {
    createCanvas(330, 330);
    noStroke();
}

// Prüft, ob der Kreis eine Wand berührt
function isNearWall() {
    return (
        circleX < 0.16 || // Linke Wand
        circleX > 0.84 || // Rechte Wand
        circleY < 0.16 || // Obere Wand
        circleY > 0.84   // Untere Wand
    );
}

// Zeichnet die Szene
function draw() {
    background("black");

    // Kreisfarbe basierend auf Position des Kreises
    fill(isNearWall() ? "red" : "white");
    ellipse(x(circleX), y(circleY), s(circleRadius));

    // Zeigt das passende Bild basierend auf Wand-Zustand
    imageMode(CENTER);
    if (isAtWall) {
        image(circleImage2, x(circleX), y(circleY), s(0.2), s(0.2));
    } else {
        image(circleImage, x(circleX), y(circleY), s(0.2), s(0.2));
    }
  
    // Zeigt die laufende Zeit an 
    if (isTiming) {
        elapsed = Date.now() - startTime; // Zeit seit Start
        document.getElementById("time").textContent = `ELAPSED TIME: ${(elapsed /               1000).toFixed(1)} SECONDS`;
    }

    // Zeitanzeige, wenn der Timer gestoppt wurde und der Kreis die Wand berührt
    if (!isTiming && isNearWall()) {
        document.getElementById("time").textContent = `ELAPSED TIME: ${(elapsed / 1000).toFixed(1)} SECONDS`;
    }
}

// Reagiert auf Mausklicks
function mousePressed() {
    if (cooldown) return; // Ignoriert Klicks während des Cooldowns

    // Überprüft, ob der Klick auf den Kreis erfolgt ist
    let d2 = dist(mouseX, mouseY, x(circleX), y(circleY));
    if (d2 < s(circleRadius) / 2) {
        // Timer starten, wenn nicht aktiv
        if (!isTiming) {
            startTime = Date.now();
            isTiming = true;
            elapsed = 0;
            document.getElementById("time").textContent = "ELAPSED TIME: 0.0 SECONDS";
        }

        // Neue zufällige Position für den Kreis
        circleX = noise(noiseOffsetX);
        circleY = noise(noiseOffsetY);

        noiseOffsetX += 0.3; // Offset für glattere Übergänge erhöhen
        noiseOffsetY += 0.3;
        // Aktualisiert den Zustand, ob der Kreis eine Wand berührt
        isAtWall = isNearWall();

        // Timer stoppen, wenn der Kreis die Wand berührt
        if (isNearWall()) {
            isTiming = false;
            elapsed = Date.now() - startTime;

            // Cooldown aktivieren
            cooldown = true;
            setTimeout(() => {
                cooldown = false; // Cooldown deaktivieren nach 5 Sekunden
            }, 1000); // 1 Sekunden warten
        }
    }
}

//Save as gif
function keyPressed() {
    if (key === 'g') {
      saveGif('loop', 5);
    }
  }

