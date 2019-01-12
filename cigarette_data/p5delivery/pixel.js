
var img1;
var img2;
function preload() {
  img1 = loadImage('Modigliani.jpg');

  img2 = loadImage('yoga.png');
}

function setup() {
  var cnv = createCanvas(600, 1000);
  cnv.parent('myContainer');

}

function draw(){
  // image(img1, 0, 0);

  image(img1, 0, 0);
  img1.loadPixels();
  var firstImage = pixels;
  // var firstImageUpdate = img1.updatePixels();
  var imgData = createImage(500,500);
  console.log(imgData);
if (frameCount > 60){
  image(img2, 0, 0);
  loadPixels();
  var secondImage = pixels;
}
  if (frameCount > 100){

  imgData.updatePixels();
//
}

  console.log(firstImage);
  console.log(secondImage);
  console.log(frameCount);
}
//   var d = pixelDensity(1000);
//   var halfImage = 4 * (img2.width * d) * (img2.height * d / 2);
//   loadPixels();
// //     // var pixelsBack = pixels.reverse();
// //   for (var i = 0; i < pixels.length; i++) {
// //     if (pixels[i] == 255){
// // console.log("I'm 255")
// //     }
// updatePixels();
//     // var pixelsBack = pixels.reverse();
//     // var pixelsRandom = pixelsBack[Math.floor(Math.random()*pixels.length)];
//   }


  // console.log(pixelsRandom);



// noLoop();

function mousePressed() {
  noLoop();
}
