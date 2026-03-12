function setup() {
  createCanvas(400, 400);
  background(200);

  noStroke();
}

function drawObject(x,y,s){
  push();
  translate(0,0);
  scale(1);
  
  background(200);
  fill(0);
  triangle(12.5, 100, 50, 0, 72, 58);
  
  fill(0);
  triangle(87.5, 100, 50, 0, 28, 58);
  
  fill(0);
  triangle(0, 37.5, 100, 37.5, 50, 72);
  
  pop();
}

function draw(){
  drawObject(0,0,1);
  drawObject(0,0,1);

}