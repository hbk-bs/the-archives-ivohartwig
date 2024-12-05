let radius = 50;
let speed1 = 1;


let x1 = 0;
let angle1 = 0;
let centerY1;



function setup() {
  const canvas = createCanvas(500, 500);
  canvas.parent("sketch");

  centerY1 = height / 2; // Erster Kreis in der Mitte
  
  strokeWeight(0);
}

function draw() {
  background("black");

  // Erster Kreis (Sinus)
  fill("white");
  let y1 = centerY1 + radius * sin(angle1); // Sinusbewegung
  circle(x1, y1, radius);
  speed1 *= 1.0;
  x1 += speed1;
  angle1 += 0.07;
  if (x1 > width -50) {
    let y1 = centerY1 + radius * -sin(angle1);
    speed1 *= -1 
    
  }
  if (x1 < width -450) {
    let y1 = centerY1 + radius * sin(angle1);
    speed1 = 1
  }


 // if(speed1  > 550){
 //   speed1 = 1
    
 // }
}
