
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var imgData = ctx.createImageData(100, 100);

var i;
for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i+0] = 25;
    imgData.data[i+1] = 50;
    imgData.data[i+2] = 0;
    imgData.data[i+3] = 255;
}

ctx.putImageData(imgData, 10, 10);
