var paddle, ball;
var wallTop, wallBottom, wallLeft, wallRight;
var bricks;

function setup() {
  createCanvas(450, 400);

  //paddle sprite
  paddle = createSprite(200, 380, 100, 5);
  paddle.shapeColor = "black";
  paddle.immovable = true;

  bricks = new Group();

  //ball sprite
  ball = createSprite(150, 250, 15, 15);
  ball.shapeColor = "orange";

  //Top edge
  wallTop = createSprite(225, 0, 450, 5);
  wallTop.shapeColor = "gray";
  wallTop.immovable = true;

  //Bottom edge
  wallBottom = createSprite(225, 400, 450, 5);
  wallBottom.shapeColor = "gray";
  wallBottom.immovable = true;

  //Left edge
  wallLeft = createSprite(0, 200, 5, 400);
  wallLeft.shapeColor = "gray";
  wallLeft.immovable = true;

  //Right edge
  wallRight = createSprite(450, 200, 5, 400);
  wallRight.shapeColor = "gray";
  wallRight.immovable = true;

  //draw bricks
  function createBrickRow(y) {
    for (var x = 55; x < 400; x = x + 55) {
      var brick = createSprite(x, y, 50, 20);
      brick.shapeColor = "brown";
      brick.immovable = true;
      bricks.add(brick);
    }
  }

  //Row 1 : y : 75
  createBrickRow(75);
  //Row 2 : y : 100
  createBrickRow(100);
  //Row 3 : y : 125
  createBrickRow(125);
}

function draw() {
  background("honeydew");

  paddle.position.x = mouseX;

  if (mouseIsPressed) {
    ball.velocity.x = 1; // Left or Right
    ball.velocity.y = 1; // Top to Bottom
    ball.setSpeed(4);
  }

  ball.bounce(wallLeft);
  ball.bounce(wallRight);
  ball.bounce(wallBottom);
  ball.bounce(wallTop);
  ball.bounce(paddle);

  ball.bounce(bricks, brickHit);

  drawSprites();
}

function brickHit(ball, brick) {
  brick.remove();
}
