class Segmentor {
  centerX
  centerY;
  angle;
  speed;
  positions = []
  segmentCount;
  constructor({ x, y, segmentCount = 8, speed = 0.1 }) {
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
      radius += width * 0.05;
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
      circle(this.positions[i].x, this.positions[i].y, 10)
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
    speed: 0.01,
    segmentCount: 10
  }))

  linethings.push(new Segmentor({
    x: width / 4,
    y: height / 2,
    speed: 0.1,
    segmentCount: 5
  }))

  linethings.push(new Segmentor({
    x: (width / 4 )* 3,
    y: height / 4,
    speed: 0.02,
    segmentCount: 6
  }))
  // linethings.push(new Segmentor(width / 8, height / 2))
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