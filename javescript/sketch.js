var movement;
var letterPoints;
var fontSize = 300;
var p = 0;
var mic;


function preload(){
  movement = loadFont('fonts/Starjedi.ttf');

}

function setup() {
  createCanvas(1000,1000);
  background(150, 212,122);
  textSize(500);
  textFont(movement);
  text('K', 500, 500);
  frameRate(5);

  letterPoints = movement.textToPoints("K", 500, 500, fontSize);
  console.log(letterPoints);
  
  userStartAudio();
  mic = new p5.AudioIn();
  mic.start();
}

function draw(){

  background(66, 135, 245);
  noFill();
  stroke(255, 0, 0); 
  textSize(300);
  textFont(movement);

  var micLevel = mic.getLevel();
  var scaleLevel = micLevel * 100;
  console.log(scaleLevel);
  //heart(500, 500, 200, 5);

  for (var i = 0; i < letterPoints.length; i++){

      push();
      translate(letterPoints[i].x, letterPoints[i].y);
      fill(247, 215, 84);
      rotate(45 * p);
      p++;
      heart(2, 2, 10 * scaleLevel, 0.5);
      pop();
  }
}