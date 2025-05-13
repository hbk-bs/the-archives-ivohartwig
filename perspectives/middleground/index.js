const x = (n) => width * n;
const y = (n) => height * n;
const s = (n) => (height > width ? height * n : width * n);

function setup() {
  createCanvas(400, 400);
  strokeWeight(0)
  
  colorMode(HSL, 360, 100, 100, 100);
	const myPrimaryColor = color(180, 30, 50);
  
  background (myPrimaryColor)
  
  const secondaryColor = color((hue(myPrimaryColor) + 180) % 360, 80,   50);
  console.log(hue(myPrimaryColor) + 180); 
  
  const thirdColor = color((hue(myPrimaryColor) -1) % 360, 65,           50);
  console.log(hue(myPrimaryColor) + 180); 
  
  fill(secondaryColor)
  ellipse(x(0.5),y(0.5),s(0.3))
  
  
  fill(thirdColor)
  quad(x(0),y(0.5),x(1),y(0.5),x(1),y(1),x(0),y(1),)
}

//save images 
  function keyPressed(){
    if(key==="s"){
      save("middleground relativ");
    }
  }


