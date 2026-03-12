function setup() {
  createCanvas(400, 400);
  background(200);
  noStroke();
}

function drawObject(x,y,s){
  push();
  translate(x,y);
  scale(s);
  
  fill(0);
  triangle(12.5, 100, 50, 0, 72, 58);
  triangle(87.5, 100, 50, 0, 28, 58);
  triangle(0, 37.5, 100, 37.5, 50, 72);

  pop();
}

function draw(){
  background(200);
  
  drawObject(0,0,1); 
  drawObject(0,0,1);
}

function draw(){

  let cols = 4;
  let rows = 4;

  let cellW = width/cols;
  let cellH = height/rows;

  for(let i=0;i<cols;i++){
  for(let j=0;j<rows;j++){
    
  let x = i * cellW
  let y = j * cellH

  let s = cellW / 100
    
  drawObject(x, y, s);
    }
  }
}