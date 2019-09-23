function setup() {
  createCanvas(400, 400);
  frameRate(29.7);
}
var ballX = 0;
var ballY = 0;
var ballSpeed = 3;
var ballSpeedY = 4;
var ballSpeed2 = 7;
var ballx2 = 0;

function draw() {
  background(mouseX, mouseY, 150);

  fill(100, mouseX, 0);
  ellipse(ballX, ballY, 30);
  fill(ballX, mouseY, 20);
  ellipse(ballx2, mouseY, 30);

  ballX = ballX + ballSpeed;
  ballY = ballY + ballSpeedY;
  ballx2 = ballx2 + ballSpeed2;

  if (ballX >= 500, ballY >= 400) {
    ballSpeed = -3;
    ballSpeedY = -4;
  }

  if (ballX <= 0, ballY <=0) {
    ballSpeed = 3;
    ballSpeedY = 4;
  }

  if (ballx2 >= 400) {
    ballSpeed2 = -7;
  }

  if (ballx2 <= 0) {
    ballSpeed2 = 7;
  }

  noStroke();


}
