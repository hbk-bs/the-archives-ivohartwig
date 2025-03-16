class Particle {
  x = 0; // x-Koordinate
  y = 0; // y-Koordinate
  angle = 0; // Startwinkel
  radius = 100; // Abstand vom Zentrum
  size = 20; // Größe des Partikels

  constructor(_angle, _radius) {
    this.angle = _angle; // Startwinkel
    this.radius = _radius; // Abstand vom Zentrum
  }

  update(centerX, centerY) {
    // Berechne die aktuelle Position basierend auf Winkel und Radius
    this.x = centerX + cos(this.angle) * this.radius;
    this.y = centerY + sin(this.angle) * this.radius;

    // Aktualisiere den Winkel, um eine kontinuierliche Bewegung zu erzeugen
    this.angle += 0.02; // Geschwindigkeit der Drehung
  }

  hasCompletedRotation() {
    // Überprüfe, ob der Winkel einen vollen Kreis überschritten hat
    return this.angle >= TWO_PI * 0.9 ;
  }

  display() {
    fill("black")
    circle(this.x, this.y, this.size); // Zeichne das Partikel
  }
}

const particles = [];

function setup() {
  const canvas = createCanvas(500, 500);
  canvas.parent("sketch");
  background("white");
  

  // Erzeuge die Partikel, gleichmäßig verteilt auf dem Kreis
  const totalParticles = 12; // Anzahl der Partikel
  for (let i = 0; i < totalParticles; i++) {
    const angle = (TWO_PI / totalParticles) * i; // Gleichmäßige Winkelverteilung
    particles.push(new Particle(angle, 100)); // Radius 100
  }
}

function draw() {
  background("white"); // Leinwand löschen
  const centerX = width / 2;
  const centerY = height / 2;

  // Aktualisiere und zeichne jedes Partikel
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];

    // Überprüfe, ob das Partikel eine vollständige Rotation abgeschlossen hat
    if (p.hasCompletedRotation()) {
      particles.splice(i, 1); // Entferne das Partikel aus dem Array
      continue;
    }

    p.update(centerX, centerY); // Aktualisiere die Position
    p.display(); // Zeichne das Partikel
  }

  // Wenn alle Partikel entfernt sind, erstelle einen neuen Satz
  if (particles.length === 10) {
    const totalParticles = 1;
    for (let i = 0; i < totalParticles; i++) {
      const angle = (TWO_PI / 12) * i; // Gleichmäßige Winkelverteilung
      particles.push(new Particle(angle, 100)); // Radius 100
    }
  }
}



