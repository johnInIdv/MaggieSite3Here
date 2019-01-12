var beginX = 20.0; // Initial x-coordinate
var beginY = 10.0; // Initial y-coordinate
var endX = 570.0; // Final x-coordinate
var endY = 320.0; // Final y-coordinate
var distX; // X-axis distance to move
var distY; // Y-axis distance to move
var exponent = 4; // Determines the curve
var x = 0.0; // Current x-coordinate
var y = 0.0; // Current y-coordinate
var step = .08; // Size of each step along the path
var pct = 0.0; // Percentage traveled (0.0 to 1.0)
var xStep = 100; //width of step
var yStep = 100; //height of step

function setup() {
  createCanvas(720, 400);
  noStroke();
  distX = xStep - beginX;
  distY = yStep - beginY;
}

function draw() {
  fill(169,4);
  rect(0, 0, width, height);
  pct += step;
  if (pct < 1.0) {
    x = beginX + pct * distX;
    y = beginY + pow(pct, exponent) * distY;
  }
  noFill();
  strokeWeight(4);
  stroke('gold');
for (var i = 0; i <= 5; i++){
  ellipse(x * i, y * i, 20, 20);
  // print(y)
  print(y)
}
i}
// function mousePressed() {
//   pct = 0.0;
//   beginX = x;
//   beginY = y;
//   endX = mouseX;
//   endY = mouseY;
//   distX = xStep - beginX;
//   distY = yStep - beginY;
// }
