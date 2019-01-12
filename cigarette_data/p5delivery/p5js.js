function setup() {
createCanvas(2120, 3000);
}

function draw() {
background(255);
noStroke();
for(var j=0; j<(3000-200)/60; j++){
for(var i=0; i<(2120-200)/60; i++){
var r=map(i,0,(2120-200)/60,255+100,0);
var g=map(j,0,(3000-200)/60,255+100,0);
fill(r*j/20, g*j/20, g*j/20);
rect(100+i*60,100+j*60,50,50,5,10,5,5);
}
}
}
