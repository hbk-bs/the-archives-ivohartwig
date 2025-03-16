function setup() {
    createCanvas(400, 400);
    background("#e8dd9e")
    
    strokeWeight (0)
   
    //x+30 y-30
    
    //1.
    fill("#9737bf")
     quad(50,50,370,50,370,370,50,370)
     triangle(360,40,370,50,360,50)  
     triangle(40,360,50,370,50,360)
    
    fill("#a975bf")
     quad(40,40,360,40,360,360,40,360)
    
    //2.
    fill("#9737bf")
     quad(80,80,340,80,340,340,80,340)
     triangle(330,70,340,80,330,80)
     triangle(70,330,80,340,80,330)
    
    fill("#a975bf")
     quad(70,70,330,70,330,330,70,330)
    
    //3.
    fill("#9737bf")
     quad(110,110,310,110,310,310,110,310)
     triangle(300,100,310,110,300,110)
     triangle(100,300,110,310,110,300)
    
    fill("#a975bf")
     quad(100,100,300,100,300,300,100,300)
    }
  
    //save images 
    function keyPressed(){
      if(key==="s"){
        save("Shadow");
      }
    }
  


