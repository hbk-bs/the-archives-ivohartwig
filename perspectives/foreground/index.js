const x = (n) => width * n;
const y = (n) => height * n;
const s = (n) => (height > width ? height * n : width * n);


function draw() {
    frameRate(5)
	colorMode(HSL, 360, 100, 100, 100);
    createCanvas(500, 500);
	const myPrimaryColor = color(180, 30, 50);
	
    strokeWeight(0)
	background(myPrimaryColor);
  
    const secondaryColor = color((hue(myPrimaryColor) + 180) % 360,       100,  50);
    console.log(hue(myPrimaryColor) + 180); 
  
    const thirdColor = color((hue(myPrimaryColor)),                                                 (saturation(myPrimaryColor)),
                              (lightness(myPrimaryColor)+4))
    
	const step = 25;

	for (let x = step;
         x < width;
         x = x + step) {
      
      
	for (let y = step;
         y < height;
         y = y + step) {
      
    let h = hue(secondaryColor)
    let sat = saturation(secondaryColor)
    let l = lightness(secondaryColor)
      
      
    fill(h, random(0,100),l);
		
	circle(x, y, random(5,10));
		}
	}
  
  
    
    fill(thirdColor)

    ellipse(x(0.5),y(0.5),s(0.3))
  
}
  
//Save as gif
function keyPressed() {
  if (key === 'g') {
    saveGif('loop', 5);
  }
}


