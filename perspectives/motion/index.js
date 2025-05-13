const x = (n) => width * n;
const y = (n) => height * n;
const s = (n) => (height > width ? height * n : width * n);


function setup(){
 createCanvas (400,400)
 strokeWeight(0)
  
 colorMode(HSL, 360, 100, 100, 100);
	const myPrimaryColor = color(80, 30, 50);
  
 background (myPrimaryColor)
  
 const secondaryColor = color((hue(myPrimaryColor) + 180) % 360, 100,  50);
 console.log(hue(myPrimaryColor) + 180); 
  
  
  let h = hue(secondaryColor)
   let h1 = hue(myPrimaryColor)
  let sat = saturation(secondaryColor)
  let l = lightness(secondaryColor)
   let l1 = lightness(secondaryColor)+20
  
  fill(h1,20,40)
  ellipse(x(0.22),y(0.555),x(0.1),y(0.05))
  //ellipse(x(0.42),y(0.555),x(0.1),y(0.05))
  //ellipse(x(0.62),y(0.555),x(0.1),y(0.05))
  //ellipse(x(0.82),y(0.555),x(0.1),y(0.05))
  
  
  fill(h,sat,l,100)
  ellipse(x(0.2),y(0.5),s(0.15))
  fill(h,sat,l,80)
  ellipse(x(0.4),y(0.5),s(0.15))
  fill(h,sat,l,60)
  ellipse(x(0.6),y(0.5),s(0.15))
  fill(h,sat,l,40)
  ellipse(x(0.8),y(0.5),s(0.15))
  
  fill(h,sat,l1,100)
  ellipse(x(0.23),y(0.53),s(0.05))
  fill(h,sat,l1,80)
  ellipse(x(0.43),y(0.53),s(0.05))
  fill(h,sat,l1,60)
  ellipse(x(0.63),y(0.53),s(0.05))
  fill(h,sat,l1,40)
  ellipse(x(0.83),y(0.53),s(0.05))
}

 //save images 
  function keyPressed(){
    if(key==="s"){
      save("motion");
    }
  }


