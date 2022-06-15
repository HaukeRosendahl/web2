

let x;
let y;
let stars;
let scroll;
let isUp;
let isDown;
let isRight;
let isLeft;

class Particle {
  offset = 2;
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
 display(){
   fill(255, 50, 0);
   strokeWeight(0);
   ellipse(this.x, this.y, random(20, 30), random(40,60));
 } 
  update(){
    this.x += random(-this.offset-2, this.offset+2);
    this.y += random(this.offset-3, this.offset+3);
    //this.x = constrain(this.x, 0, width);
    //this.y = constrain(this.y, 0, 4000);
  }
}
const particles = [];

function setup() {
  createCanvas(600, 700);
  scroll = 0;
  
  isUp = false;
  isDown = false;
  isRight = false;
  isLeft = false;
 
  x = 300;
  y = 640;

  stars = [500, 300, 0, -200, -400, -600, -800, -1000, -1200, -1400, -1600, -1800, -2000, -2400, -2800, -3000, -3200, -3600, -3800, -4000,  -4200, -4400, -4600, -4800, -5000]
}





function draw() {
  background(20,20,30);

frameRate (30)


  
  push()
  translate(0,scroll)
  text("UP_ARROW = Up",450,400)
  text("LEFT_ARROW = Left",450,420)
  text("RIGHT_ARROW = Right",450,440)
  text("DOWN_ARROW = Down",450,460)
  text("Save Image = s",450,500)
  
  for (let i = 0; i < stars.length; i++) {
    strokeWeight(0);
    fill(230, 255, 100)
    ellipse(50, stars[i] - 730, 5, 5)
    ellipse(150 + i, stars[i] - 850, 3, 3)
    ellipse(220, stars[i] - 350, 2, 2)
    ellipse(350 - i, stars[i] - 450, 4, 4)
    ellipse(450, stars[i] - 250, 3, 3)
    ellipse(580, stars[i] - 680, 3, 3)

    
    
    particles.forEach((p) => {
  p.display();
  p.update();
});

  }


  pop()


  particles.push(new Particle(x, (y-scroll)+50));
  



stroke(30);
  
  fill(255, 0, 50);
  arc(x, y + 36, 40, 40, PI, 0, CHORD);
 
  fill(255, 255, 255);
  ellipse(x, y, 30, 80);
 
  fill(100, 200, 255);
  ellipse(x, y - 12, 15, 15);
  
 
  fill(255, 0, 50);
  ellipse(x, y + 32, 5, 30);

  triangle(x-1.5, y-39, x+1.5, y-39, x, y-60);

  triangle(x-5, y-38, x+5, y-38, x, y-45);

  
  
  if(isUp == true)
  {
    if( y > height * 0.4)
    {
       y -= 5;
    }else{
       scroll += 5
    }
  }
  
  if(isDown == true)
  {
    if( y < height * 0.8)
    {
       y += 5;
    }else{
       scroll += 5
    }
  }
  
  if(isRight == true)
  {
    if( x < width * 0.8)
    {
       x += 5;
    }else{
       scroll += 5
    }
  }
  if(isLeft == true)
  {
    if( x > width * 0.2)
    {
       x -= 5;
    }else{
       scroll += 5
    }
  }
  
}

function keyPressed()
{
  if(keyCode == UP_ARROW)
  {
     isUp = true;
  }
  if(keyCode == DOWN_ARROW)
  {
     isDown = true;
  }
  if(keyCode == RIGHT_ARROW)
  {
     isRight = true;
  }
  if(keyCode == LEFT_ARROW)
  {
     isLeft = true;
  }
}

function keyReleased()
{
  if(keyCode == UP_ARROW)
  {
     isUp = false;
  }
  if(keyCode == DOWN_ARROW)
  {
     isDown = false;
  }
  if(keyCode == RIGHT_ARROW)
  {
     isRight = false;
  }
  if(keyCode == LEFT_ARROW)
  {
     isLeft = false;
  }
}


function keyTyped(){
  if(key === 's'){
    saveCanvas("outfile","png")
  }
}