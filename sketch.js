let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y

function setup() {
  createCanvas(400, 400);
  background(color(100, 0, 0));
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}
function draw() {
  function draw() {
  
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical, 50);
  
  posicaoHorizontal+= random(0,3);
  posicaoVertical+= random(-3,3);
  
  if(mouseIsPressed){
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  }
  
}
    fill(cor);
    circle(posicaoHorizontal, posicaoVertical, 50);
    
    posicaoHorizontal+= random(0,3);
    
    if(mouseIsPressed){
        cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
    }
}