//try with the adding numbers to an array
//starts with pixels and ends with complete picture
var img;

function preload() {
  img = loadImage('yoga.png');
}

var timing = [1,1];
function addToArray(){
  timing.push("1");
}
setInterval(addToArray,1000);//adds 1 length to timing every second
var width = 600;
var heigth = 600;
var hSizeDistort = 10;//horizontal size of square when distorting
var vSizeDistort = 10;//vertical size of square when distorting
var hSize = 10;//horiontal size when recreating
var vSize = 10;//vertical size when recreating
var hide = 1600;//length to move fresh image off the screen
var destroy = 600;//size after distortion
var distort = 4000;//amount of distortion to original.
var speed = 10;//speed of reconstruction of original
var chunkSize = 6;
var hRow = [];
var vRow = [];
var apple = width/chunkSize;
var delay = 3;//length of time before reconstruction
for (var h = 0; h < apple; h++){
  hRow.push(h * chunkSize);
  vRow.push(h * chunkSize);
}
console.log(hRow);
//toggle by changing distor and hSize and vSize


function setup() {
  var cnv = createCanvas(3000, 800);
  cnv.parent('myContainer');

  image(img, 0, 0);

  set(hide, 0, get(0,0,width,height));
  //   // // //arrays used to scatter the picture
      var aa = Array.from({length: distort}, () => Math.floor(Math.random() * destroy));
      var bb = Array.from({length: distort}, () => Math.floor(Math.random() * destroy));
      var cc = Array.from({length: distort}, () => Math.floor(Math.random() * destroy));
      var dd = Array.from({length: distort}, () => Math.floor(Math.random() * destroy));

    for(var k = 0; k < distort; k++){
      set(cc[k], dd[k], get(aa[k],bb[k],hSizeDistort,vSizeDistort));
    }
}

function draw(){
//  change frame rate as time goes on
//   if (timing.length < 10){
//   frameRate(10);
// } else if (timing.length < 15){
//     frameRate(70);
//   } else {
//     frameRate(160);}
  frameRate(60);
 if (timing.length > delay){

//multiple allows it to go faster
      var item = hRow[Math.floor(Math.random()*hRow.length)];
      var item2 = vRow[Math.floor(Math.random()*vRow.length)];
      var item3 = hRow[Math.floor(Math.random()*hRow.length)];
      var item4 = vRow[Math.floor(Math.random()*vRow.length)];
      var item5 = hRow[Math.floor(Math.random()*hRow.length)];
      var item6 = vRow[Math.floor(Math.random()*vRow.length)];
      var item7 = hRow[Math.floor(Math.random()*hRow.length)];
      var item8 = vRow[Math.floor(Math.random()*vRow.length)];
      var item9 = hRow[Math.floor(Math.random()*hRow.length)];
      var item10 = vRow[Math.floor(Math.random()*vRow.length)];

      set(item, item2, get(item+hide,item2,hSize,vSize));
      set(item3, item4, get(item3+hide,item4,hSize,vSize));
      set(item5, item6, get(item5+hide,item6,hSize,vSize));
      set(item7, item8, get(item7+hide,item8,hSize,vSize));
      set(item9, item10, get(item9+hide,item10,hSize,vSize));


console.log(timing.length);
console.log(item);

  } else if (timing.length > 20){
      set(0, 0, get(hide,0,600,600));
    }
}

function mousePressed() {
  noLoop();
}
// setInterval(draw,5)
// if (timing.length < 8){
//   setInterval(draw, 10);
// } else if (timing.length < 12){
//   setInterval(draw, 100);
// } else {
//   setInterval(draw, 1000);
// };
// if (timing.length < 10){
// frameRate(1);
// } else if (timing.length < 20){
//   frameRate(10);
// } else {
//   frameRate(50);}
// setTimeout(draw, 5000)
