

let toggle =true
const x = (n) => width * n;
const y = (n) => height * n;
const s = (n) => (height > width ? height * n : width * n);


function draw (){
    createCanvas(400, 400);
  
    colorMode(HSL, 360, 100, 100, 100);
	const myPrimaryColor = color(10, 30, 50);
  
    background(myPrimaryColor)
  
    const secondaryColor = color((hue(myPrimaryColor) + 20) % 360,         60,  50);
    console.log(hue(myPrimaryColor) + 180); 
  
    fill(secondaryColor)
    strokeWeight(0)
  
  	if (toggle === true) {
		
        ellipse (x(0.5),y(0.5),s(0.1))
	} else {
		
        ellipse (x(0.5),y(0.5),s(1.1))
	}
	ellipse(x(0.5),y(0.5),s(0.1))
 

	if (frameCount % 50 === 0) {
		toggle = !toggle;
	}
}

 //save images 
  function keyPressed(){
    if(key==="s"){
      save("Scale");
    }
  }

//Save as gif
function keyPressed() {
  if (key === 'g') {
    saveGif('Scale', 5);
  }
}


