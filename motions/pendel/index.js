class Segmentor {
  centerX
  centerY;
  angle;
  speed;
  positions = []
  segmentCount;
  constructor({ x, y, segmentCount = 50, speed = 0.1 }) {
    this.centerX = x;
    this.centerY = y;
    this.speed = speed;
    this.angle = 0;
    this.segmentCount = segmentCount;
  }
  update() {

    let radius = 0;
    this.positions = []
    for (let i = 0; i < this.segmentCount; i++) {
      const x = radius * cos(this.angle * i)
      const y = radius * sin(this.angle * i)
      this.positions.push({ x, y })
      radius += width * 0.007;
      this.angle += this.speed;
      // this.speed += 0.01;
      console.log(this.angle)
    }

    // if(this.speed > 0.05){
    //   this.speed = 0.05
    // }
  }
  display() {
    push()
    noFill()
    stroke(128)
    translate(this.centerX, this.centerY)
    for (let i = 0; i < this.positions.length; i++) {
      if (i === 0) {
        line(0, 0, this.positions[i].x, this.positions[i].y);
      } else {
        line(this.positions[i - 1].x, this.positions[i - 1].y, this.positions[i].x, this.positions[i].y);

      }
      fill(128)
      //circle(this.positions[i].x, this.positions[i].y, 4)
    }
    pop()

  }
}

let linethings = [];
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  linethings.push(new Segmentor({
    x: width / 2,
    y: height / 2,
    speed: 0.002,
    segmentCount: 50
  }))

 
  
  
}

function draw() {
  background(0);
  linethings.forEach((element) => {
    element.display();
    // if (frameCount % 50 === 0) {
    element.update()
    // }
  })
}

function mousePressed() {
  linethings.forEach((segmentor) => {
    segmentor.speed *= -1; // Invertiert die Geschwindigkeit jedes Segmentors
  });
}

function keyPressed() {
  if (key === 'g') {
    saveGif('loop', 5);
  }
}

