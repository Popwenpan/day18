
var ftn;

function setup() {
    createCanvas(1000,1000,WEBGL);
    background(247, 202, 67);

    var t ={
        name:"Test",
        colors: ["blue", "red", "green", "coral","purple","mediumspringgreen","blue", "red", "green", "coral","purple","mediumspringgreen"],
        lifetime: 800,
        angle: [30, 360],
        gravity: 0.01,
        x:0.05,
        y:0.1,
    }
    ftn = new Fountain(null, t, );
}

function draw() {
    background(247, 202, 67);
    ftn.Draw();
    ftn.Create();
    ftn.Step();
    translate(-100, 0, 0);
  push();
  
  rotateY(frameCount * 0.01);
  box(70, 500, 70);
  pop();

  translate(150, -100, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  sphere(90);
  pop();

  translate(20,200, 0);
  push();
  
  rotateX(frameCount * 0.01);
  rotateZ(90);
  box(100, 260, 100);
  pop();
}

