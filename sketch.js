//comentario
var x;
x = 10

var diametro;
diametro = 1

function miFuncionBacan() {
  //esto fue una declaracion
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,255,0);
}

function draw() {
  //background(0, 255,0);
  //miElipse();
  //if () {}
  //if (){}
  muchasElipses();
  
}

function miElipse(){
  strokeWeight(1);
  stroke(100, 0, 255);
  fill(255, 255, 0, 100);
  ellipse(mouseX, mouseY, diametro, diametro);
  diametro = diametro + 1;
  diametro = random(100);
  
}
  
function muchasElipses() {
  
  fill(255,255,0,100)
  noStroke()
  ellipse(random(width), random(height), 100, 100);
  //for(var i = 0; i < cuantas; i++) {
    //ellipse(random(width), random(height), 100, 100);
    
  //}
}
  


