// Variables --------------------

var ballXPosition = 50;
var ballYPosition = 50;
var ballRadius = 25;
var ballXSpeed = random(15); // Defines the initial speed of the ball as a random number between 0 and 25.
var ballYSpeed = random(15);

var paddleWidth = 200;
var paddleHeight = 20;
var paddleYPosition = 370;

var numberOfBlocks = 4;
var blockHeight = 40;
var blockWidth = width / numberOfBlocks;

// Functions ---------------------

var bounceBall = function() {
  //Make the ball bounce
  fill(255, 255, 255);
  ellipse(ballXPosition, ballYPosition, 50,50);
  if(ballXPosition + ballRadius >= width || ballXPosition - ballRadius <= 0){
      ballXSpeed = ballXSpeed * -1; // Everytime we get to an edge it make the speed goes in the oposite direction.
  }
  if(ballYPosition + ballRadius >= height || ballYPosition - ballRadius <= 0){
      ballYSpeed = ballYSpeed * -1;
  }
};

var hitPaddle = function() {
  fill(255, 255, 255);
  rect(mouseX - (paddleWidth / 2), paddleYPosition, paddleWidth, paddleHeight);
  if(((ballXPosition + ballRadius) > (mouseX - paddleWidth / 2)) &&
    ((ballXPosition - ballRadius) < (mouseX + paddleWidth / 2)) &&
    ((ballYPosition + ballRadius) > paddleYPosition)){
      ballYSpeed = ballYSpeed * -1;
  }
};

var drawBlocks = function() {
  // we are going to start with only one line of blocks
  for (var i = 0; i < numberOfBlocks; i++) {
    fill(155 / i, 0, 122);
    rect(i * blockWidth, 0, blockWidth, blockHeight);
  }


};

var draw = function() {
    background(241, 252, 234); // Draws the background all the time so the canvas is always clean

    drawBlocks();

    //Make the ball bounce
    bounceBall();

    //Draw paddle
    hitPaddle();

    //Change the ball position for next frame
    ballYPosition = ballYPosition + ballYSpeed; // It will add the current speed (negative or possitive, to our current position making the ball to move)
    ballXPosition = ballXPosition + ballXSpeed;
};
