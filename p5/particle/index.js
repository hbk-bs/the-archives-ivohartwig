class Particle{
  
 x=0;

 y=0;

  lifetime = 100

  isDead = false;


  
 x=0;

 y=0;



  constructor(_x,_y,_lifetime = 100){
   this.x = _x;
   this.y = _y;
   this.lifetime = _lifetime;
  }
  
  display(){
    circle(this.x,this.y,10)
  }
  
  update(){
    if (this.isDead === true)return;
    //this.x = this.x + random (-1,1)
    //this.y = this.y + random (-1,1)
    this.lifetime = this.lifetime - 1
    if (this.lifetime <= 0){
      this.isDead = true;
    }
  }
  
}
const particles = [];



function setup(){
  const canvas = createCanvas(500,500);
  canvas.parent("sketch");
  background("white")
  
}

function draw() {
  background("white")
  for (let i = 0 ; i<particles.length ; i++){
    const p = particles[i];
    p.display();
    p.update();
  }
  for (let j = particles.length -1; j >= 0; j--){
    if (particles[j].isDead){
      particles.splice(j,1);
    }
  }
}

function mouseDragged(){
  const oneParticle = new Particle (mouseX,mouseY);
  particles.push(oneParticle)
}
