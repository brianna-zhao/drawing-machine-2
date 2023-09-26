function setup() {
  createCanvas(windowWidth, windowHeight);
  background(140,240,240);
  
}
//make varaibles
let a;
let b;
let x;
let y;
let h;
let p;
let t;


function draw() {
  //define varavibe
  a =mouseX;
  b =mouseY;
  x = random(10,100);
  y = random(150,255); 
  h = random(50,200);
  p = random(150,255);
  t = random(50,100);
  //draw when key is press
  if(mouseIsPressed){
    fill(y,h,p,t);
    circle(a,b,x);
  }
  if (keyIsPressed){
    background(140,240,240);
  }
}