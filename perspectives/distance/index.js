let toggle =true

function setup() {
  createCanvas(400, 400);
  
  
  background("#e8dd9e")
  
  strokeWeight(0)

  fill("#1d7c80")
   quad(0,0,400,0,400,200,0,200)
  
   
  fill("#58595c")
   quad(0, 200, 400, 200, 400, 400, 0, 400);
  
  strokeWeight(2)
  
  fill("black")
  line (30,135,30,290)
  
  line (100,150,100,250)
  
  line (140,165,140,240)
  
  line (160,173,160,230)
  
  strokeWeight(0)
  
  fill("#98999e")
   quad(200,200,250,200,0,400,0,300)
   
}

function draw (){
  
  
  	if (toggle === true) {
		fill("#ebc746");
	} else {
		fill("#f58f22");
	}
	ellipse(30,130,30,30)
  ellipse(100,150,20,20)
  ellipse(140,165,10,10)
  ellipse(160,173,5,5)

	if (frameCount % 50 === 0) {
		toggle = !toggle;
	}
}

//save images 
  function keyPressed(){
    if(key==="s"){
      save("Distance");
    }
  }

//Save as gif
function keyPressed() {
  if (key === 'g') {
    saveGif('Distance', 5);
  }
}


