// Variables --------------------

var ballXPosition = 250;
var ballYPosition = 250;
var ballRadius = 20;
var ballXSpeed = 7;
var ballYSpeed = 7;

var paddleWidth = 200;
var paddleHeight = 20;
var paddleYPosition = 370;

var numberOfBlocks = 5;
var blockHeight = 40;
var blockWidth = width / numberOfBlocks;
var blocks = [];

// Functions ---------------------

var bounceBall = function() {
  //Make the ball bounce
  fill(255, 255, 255);
  ellipse(ballXPosition, ballYPosition, ballRadius * 2, ballRadius * 2);
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

var hitBlocks = function() {
  // we are going to start with only one line of blocks
  for (var i = 0; i < numberOfBlocks; i++) {
    // If the block is visible
    if (blocks[i] === true) {
      if ((ballYPosition - ballRadius < blockHeight) &&
      (ballXPosition - ballRadius >= blockWidth * i) &&
      (ballXPosition - ballRadius <= blockWidth * (i + 1))) {
        blocks[i] = false;
        ballYSpeed *= -1;
      } else {
        fill(155 / i, 0, 122);
        rect(i * blockWidth, 0, blockWidth, blockHeight);
      }
    }
  }
};

// Main block of execution

// Initalize blocks to the number of blocks
for (var i = 0; i < numberOfBlocks; i++) {
  blocks.push(true);
}

var draw = function() {
    background(241, 252, 234); // Draws the background all the time so the canvas is always clean

    hitBlocks();

    //Make the ball bounce
    bounceBall();

    //Draw paddle
    hitPaddle();

    //Change the ball position for next frame
    ballYPosition = ballYPosition + ballYSpeed; // It will add the current speed (negative or possitive, to our current position making the ball to move)
    ballXPosition = ballXPosition + ballXSpeed;
};
