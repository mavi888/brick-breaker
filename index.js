// Variables --------------------

var ballXPosition = 50;
var ballYPosition = 50;
var ballRadius = 25;

var ballXSpeed = random(25); // Defines the initial speed of the ball as a random number between 0 and 25.
var ballYSpeed = random(25);

// Functions ---------------------

var bounceBall = function() {
  //Make the ball bounce
  ellipse(ballXPosition, ballYPosition, 50,50);
  if(ballXPosition + ballRadius >= width || ballXPosition - ballRadius <= 0){
      ballXSpeed = ballXSpeed * -1; // Everytime we get to an edge it make the speed goes in the oposite direction.
  }
  if(ballYPosition + ballRadius >= height || ballYPosition - ballRadius <= 0){
      ballYSpeed = ballYSpeed * -1;
  }

  ballYPosition = ballYPosition + ballYSpeed; // It will add the current speed (negative or possitive, to our current position making the ball to move)
  ballXPosition = ballXPosition + ballXSpeed;
};

var draw = function() {
    background(241, 252, 234); // Draws the background all the time so the canvas is always clean

    //Make the ball bounce
    bounceBall();
};
