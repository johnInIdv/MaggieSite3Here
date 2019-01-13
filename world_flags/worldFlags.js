
/**
 * collage generator of the world using flags of the continents
 * if you use your own footage, make sure to rename the files or adjust the prefixes:
 *
 * KEYS
 * 1-3                  : create a new collage (layer specific)
 */
'use strict';

var img;
var picWidth = 1440;
var picHeight = 850;

var oceans;
var layer1Images = [];//north America
var layer2Images = [];//South America
var layer3Images = [];//Europe
var layer4Images = [];//Africa
var layer5Images = [];//Asia
var layer6Images = [];//Australia

var layer1Items = [];
var layer1aItems = [];
var layer2Items = [];
var layer3Items = [];
var layer4Items = [];
var layer5Items = [];
var layer5aItems = [];
var layer5bItems = [];
var layer6Items = [];

var width = picWidth;
var heigth = picHeight;
var hSizeDistort = 100;//horizontal size of square when distorting
var vSizeDistort = 100;//vertical size of square when distorting
var hSize = 100;//horiontal size when recreating
var vSize = 100;//vertical size when recreating
var hide = 1600;//length to move fresh image off the screen
var destroy = 1400;//size after distortion
var distort = 3000;//amount of distortion to original.
var speed = 10;//speed of reconstruction of original
var chunkSize = 6;
var hRow = [];
var vRow = [];
var apple = width/chunkSize;
var delay = 150;//length of time before reconstruction
for (var h = 0; h < apple; h++){
  hRow.push(h * chunkSize);
  vRow.push(h * chunkSize);
}
var small = 0.4;//small flag size
var large = 0.8;//larger flag size

function preload() {
  img = loadImage('finalPic2.png');
  oceans = loadImage('oceans.png');
  layer1Images.push(loadImage('flags/northAmerica/ag.png'));
  layer1Images.push(loadImage('flags/northAmerica/bb.png'));
  layer1Images.push(loadImage('flags/northAmerica/bs.png'));
  layer1Images.push(loadImage('flags/northAmerica/bz.png'));
  layer1Images.push(loadImage('flags/northAmerica/ca.png'));
  layer1Images.push(loadImage('flags/northAmerica/cr.png'));
  layer1Images.push(loadImage('flags/northAmerica/cu.png'));
  layer1Images.push(loadImage('flags/northAmerica/dm.png'));
  layer1Images.push(loadImage('flags/northAmerica/do.png'));
  layer1Images.push(loadImage('flags/northAmerica/gd.png'));
  layer1Images.push(loadImage('flags/northAmerica/gt.png'));
  layer1Images.push(loadImage('flags/northAmerica/hn.png'));
  layer1Images.push(loadImage('flags/northAmerica/ht.png'));
  layer1Images.push(loadImage('flags/northAmerica/jm.png'));
  layer1Images.push(loadImage('flags/northAmerica/kn.png'));
  layer1Images.push(loadImage('flags/northAmerica/lc.png'));
  layer1Images.push(loadImage('flags/northAmerica/mx.png'));
  layer1Images.push(loadImage('flags/northAmerica/ni.png'));
  layer1Images.push(loadImage('flags/northAmerica/pa.png'));
  layer1Images.push(loadImage('flags/northAmerica/sv.png'));
  layer1Images.push(loadImage('flags/northAmerica/tt.png'));
  layer1Images.push(loadImage('flags/northAmerica/us.png'));
  layer3Images.push(loadImage('flags/northAmerica/vc.png'));

  layer2Images.push(loadImage('flags/southAmerica/ar.png'));
  layer2Images.push(loadImage('flags/southAmerica/bo.png'));
  layer2Images.push(loadImage('flags/southAmerica/br.png'));
  layer2Images.push(loadImage('flags/southAmerica/cl.png'));
  layer2Images.push(loadImage('flags/southAmerica/co.png'));
  layer2Images.push(loadImage('flags/southAmerica/ec.png'));
  layer2Images.push(loadImage('flags/southAmerica/gy.png'));
  layer2Images.push(loadImage('flags/southAmerica/uy.png'));
  layer2Images.push(loadImage('flags/southAmerica/ve.png'));

  layer3Images.push(loadImage('flags/europe/ad.png'));
  layer3Images.push(loadImage('flags/europe/al.png'));
  layer3Images.push(loadImage('flags/europe/at.png'));
  layer3Images.push(loadImage('flags/europe/ba.png'));
  layer3Images.push(loadImage('flags/europe/be.png'));
  layer3Images.push(loadImage('flags/europe/bg.png'));
  layer3Images.push(loadImage('flags/europe/by.png'));
  layer3Images.push(loadImage('flags/europe/ch.png'));
  layer3Images.push(loadImage('flags/europe/cz.png'));
  layer3Images.push(loadImage('flags/europe/de.png'));
  layer3Images.push(loadImage('flags/europe/dk.png'));
  layer3Images.push(loadImage('flags/europe/ee.png'));
  layer3Images.push(loadImage('flags/europe/es.png'));
  layer3Images.push(loadImage('flags/europe/fi.png'));
  layer3Images.push(loadImage('flags/europe/fr.png'));
  layer3Images.push(loadImage('flags/europe/gb.png'));
  layer3Images.push(loadImage('flags/europe/ge.png'));
  layer3Images.push(loadImage('flags/europe/gr.png'));
  layer3Images.push(loadImage('flags/europe/hr.png'));
  layer3Images.push(loadImage('flags/europe/hu.png'));
  layer3Images.push(loadImage('flags/europe/ie.png'));
  layer3Images.push(loadImage('flags/europe/is.png'));
  layer3Images.push(loadImage('flags/europe/it.png'));
  layer3Images.push(loadImage('flags/europe/li.png'));
  layer3Images.push(loadImage('flags/europe/lt.png'));
  layer3Images.push(loadImage('flags/europe/lu.png'));
  layer3Images.push(loadImage('flags/europe/lv.png'));
  layer3Images.push(loadImage('flags/europe/mk.png'));
  layer3Images.push(loadImage('flags/europe/mt.png'));
  layer3Images.push(loadImage('flags/europe/nl.png'));
  layer3Images.push(loadImage('flags/europe/no.png'));
  layer3Images.push(loadImage('flags/europe/pl.png'));
  layer3Images.push(loadImage('flags/europe/pt.png'));
  layer3Images.push(loadImage('flags/europe/ro.png'));
  layer3Images.push(loadImage('flags/europe/rs.png'));
  layer3Images.push(loadImage('flags/europe/ru.png'));
  layer3Images.push(loadImage('flags/europe/se.png'));
  layer3Images.push(loadImage('flags/europe/si.png'));
  layer3Images.push(loadImage('flags/europe/sk.png'));
  layer3Images.push(loadImage('flags/europe/sm.png'));
  layer3Images.push(loadImage('flags/europe/tr.png'));
  layer3Images.push(loadImage('flags/europe/ua.png'));
  layer3Images.push(loadImage('flags/europe/va.png'));

  layer4Images.push(loadImage('flags/african/ao.png'));
  layer4Images.push(loadImage('flags/african/bi.png'));
  layer4Images.push(loadImage('flags/african/bj.png'));
  layer4Images.push(loadImage('flags/african/bw.png'));
  layer4Images.push(loadImage('flags/african/cd.png'));
  layer4Images.push(loadImage('flags/african/cf.png'));
  layer4Images.push(loadImage('flags/african/cg.png'));
  layer4Images.push(loadImage('flags/african/cm.png'));
  layer4Images.push(loadImage('flags/african/cv.png'));
  layer4Images.push(loadImage('flags/african/dj.png'));
  layer4Images.push(loadImage('flags/african/dz.png'));
  layer4Images.push(loadImage('flags/african/eg.png'));
  layer4Images.push(loadImage('flags/african/eh.png'));
  layer4Images.push(loadImage('flags/african/er.png'));
  layer4Images.push(loadImage('flags/african/et.png'));
  layer4Images.push(loadImage('flags/african/ga.png'));
  layer4Images.push(loadImage('flags/african/gh.png'));
  layer4Images.push(loadImage('flags/african/gm.png'));
  layer4Images.push(loadImage('flags/african/gn.png'));
  layer4Images.push(loadImage('flags/african/gq.png'));
  layer4Images.push(loadImage('flags/african/gw.png'));
  layer4Images.push(loadImage('flags/african/ke.png'));
  layer4Images.push(loadImage('flags/african/km.png'));
  layer4Images.push(loadImage('flags/african/lr.png'));
  layer4Images.push(loadImage('flags/african/ls.png'));
  layer4Images.push(loadImage('flags/african/ly.png'));
  layer4Images.push(loadImage('flags/african/ma.png'));
  layer4Images.push(loadImage('flags/african/mg.png'));
  layer4Images.push(loadImage('flags/african/ml.png'));
  layer4Images.push(loadImage('flags/african/mr.png'));
  layer4Images.push(loadImage('flags/african/mu.png'));
  layer4Images.push(loadImage('flags/african/mw.png'));
  layer4Images.push(loadImage('flags/african/mz.png'));
  layer4Images.push(loadImage('flags/african/na.png'));
  layer4Images.push(loadImage('flags/african/ne.png'));
  layer4Images.push(loadImage('flags/african/ng.png'));
  layer4Images.push(loadImage('flags/african/rw.png'));
  layer4Images.push(loadImage('flags/african/sc.png'));
  layer4Images.push(loadImage('flags/african/sd.png'));
  layer4Images.push(loadImage('flags/african/sl.png'));
  layer4Images.push(loadImage('flags/african/sn.png'));
  layer4Images.push(loadImage('flags/african/so.png'));
  layer4Images.push(loadImage('flags/african/sz.png'));
  layer4Images.push(loadImage('flags/african/tz.png'));
  layer4Images.push(loadImage('flags/african/td.png'));
  layer4Images.push(loadImage('flags/african/tg.png'));
  layer4Images.push(loadImage('flags/african/ug.png'));
  layer4Images.push(loadImage('flags/african/za.png'));
  layer4Images.push(loadImage('flags/african/zw.png'));
  layer4Images.push(loadImage('flags/african/st.png'));
  layer4Images.push(loadImage('flags/african/zm.png'));

  layer5Images.push(loadImage('flags/asia/ae.png'));
  layer5Images.push(loadImage('flags/asia/af.png'));
  layer5Images.push(loadImage('flags/asia/am.png'));
  layer5Images.push(loadImage('flags/asia/az.png'));
  layer5Images.push(loadImage('flags/asia/bd.png'));
  layer5Images.push(loadImage('flags/asia/bf.png'));
  layer5Images.push(loadImage('flags/asia/bh.png'));
  layer5Images.push(loadImage('flags/asia/bn.png'));
  layer5Images.push(loadImage('flags/asia/bt.png'));
  layer5Images.push(loadImage('flags/asia/ci.png'));
  layer5Images.push(loadImage('flags/asia/cn.png'));
  layer5Images.push(loadImage('flags/asia/cy.png'));
  layer5Images.push(loadImage('flags/asia/fm.png'));
  layer5Images.push(loadImage('flags/asia/id.png'));
  layer5Images.push(loadImage('flags/asia/il.png'));
  layer5Images.push(loadImage('flags/asia/in.png'));
  layer5Images.push(loadImage('flags/asia/iq.png'));
  layer5Images.push(loadImage('flags/asia/ir.png'));
  layer5Images.push(loadImage('flags/asia/jo.png'));
  layer5Images.push(loadImage('flags/asia/jp.png'));
  layer5Images.push(loadImage('flags/asia/kg.png'));
  layer5Images.push(loadImage('flags/asia/kh.png'));
  layer5Images.push(loadImage('flags/asia/kp.png'));
  layer5Images.push(loadImage('flags/asia/kr.png'));
  layer5Images.push(loadImage('flags/asia/ks.png'));
  layer5Images.push(loadImage('flags/asia/kw.png'));
  layer5Images.push(loadImage('flags/asia/kz.png'));
  layer5Images.push(loadImage('flags/asia/mc.png'));
  layer5Images.push(loadImage('flags/asia/md.png'));
  layer5Images.push(loadImage('flags/asia/me.png'));
  layer5Images.push(loadImage('flags/asia/mh.png'));
  layer5Images.push(loadImage('flags/asia/mm.png'));
  layer5Images.push(loadImage('flags/asia/mn.png'));
  layer5Images.push(loadImage('flags/asia/mv.png'));
  layer5Images.push(loadImage('flags/asia/my.png'));
  layer5Images.push(loadImage('flags/asia/np.png'));
  layer5Images.push(loadImage('flags/asia/om.png'));
  layer5Images.push(loadImage('flags/asia/pe.png'));
  layer5Images.push(loadImage('flags/asia/ph.png'));
  layer5Images.push(loadImage('flags/asia/pk.png'));
  layer5Images.push(loadImage('flags/asia/pw.png'));
  layer5Images.push(loadImage('flags/asia/py.png'));
  layer5Images.push(loadImage('flags/asia/qa.png'));
  layer5Images.push(loadImage('flags/asia/sa.png'));
  layer5Images.push(loadImage('flags/asia/sg.png'));
  layer5Images.push(loadImage('flags/asia/sr.png'));
  layer5Images.push(loadImage('flags/asia/sy.png'));
  layer5Images.push(loadImage('flags/asia/th.png'));
  layer5Images.push(loadImage('flags/asia/tj.png'));
  layer5Images.push(loadImage('flags/asia/tl.png'));
  layer5Images.push(loadImage('flags/asia/tm.png'));
  layer5Images.push(loadImage('flags/asia/tw.png'));
  layer5Images.push(loadImage('flags/asia/uz.png'));
  layer5Images.push(loadImage('flags/asia/vn.png'));
  layer5Images.push(loadImage('flags/asia/ye.png'));

  layer6Images.push(loadImage('flags/australia/au.png'));
  layer6Images.push(loadImage('flags/australia/fj.png'));
  layer6Images.push(loadImage('flags/australia/ki.png'));
  layer6Images.push(loadImage('flags/australia/nr.png'));
  layer6Images.push(loadImage('flags/australia/nz.png'));
  layer6Images.push(loadImage('flags/australia/pg.png'));
  layer6Images.push(loadImage('flags/australia/sb.png'));
  layer6Images.push(loadImage('flags/australia/to.png'));
  layer6Images.push(loadImage('flags/australia/tv.png'));
  layer6Images.push(loadImage('flags/australia/vu.png'));
  layer6Images.push(loadImage('flags/australia/ws.png'));

}

function setup() {
  createCanvas(picWidth*2.5, picHeight*2.5);
  // imageMode(CENTER);
  background('rgb(12,86,157)');

  layer1Items = generateCollageItems(layer1Images, 5000, 35, 430,10,340, width, height, small, large, 0, 0);//northAmerica
  layer1aItems = generateCollageItems(layer1Images, 500, 430, 500,100,240, width, height, small, large, 0, 0);//northAmerica
  layer2Items = generateCollageItems(layer2Images, 4000, 350, 600,340,675, width, height, small, large, 0, 0);//southAmerica
  layer3Items = generateCollageItems(layer3Images, 2000, 620, 950,80,255, width, height, small, large, 0, 0);//europe
  layer4Items = generateCollageItems(layer4Images, 4000, 650, 950,255,600, width, height, small, large, 0, 0);//african
  layer5Items = generateCollageItems(layer5Images, 5000, 950, 1500,25,450, width, height, small, large, 0, 0);//asia
  layer5aItems = generateCollageItems(layer5Images, 5000, 0, 40,70,130, width, height, small, large, 0, 0);//asia
  layer5bItems = generateCollageItems(layer5Images, 5000, 855, 1000,250,350, width, height, small, large, 0, 0);//asia
  layer6Items = generateCollageItems(layer6Images, 3000, 1100, 1500,450,650, width, height, small, large, 0, 0);//australia

  drawCollageItems(layer1Items);
  drawCollageItems(layer1aItems);
  drawCollageItems(layer2Items);
  drawCollageItems(layer3Items);
  drawCollageItems(layer4Items);
  drawCollageItems(layer5Items);
  drawCollageItems(layer5aItems);
  drawCollageItems(layer5bItems);
  drawCollageItems(layer6Items);
  fill(200);
  noStroke();
  rect(0,680,1440,200);
  rect(310,0,400,100);
  rect(500,100,100,100);
  image(oceans,0,0,picWidth,picHeight);
  fill('rgb(12,86,157)');
  // rect(picWidth,0,400,picHeight);//rect on the side to hide spill over from flags

  set(hide, 0, get(0,0,picWidth,picHeight));
  //   // // //arrays used to scatter the picture
      var aa = Array.from({length: distort}, () => Math.floor(Math.random() * destroy));
      var bb = Array.from({length: distort}, () => Math.floor(Math.random() * destroy));
      var cc = Array.from({length: distort}, () => Math.floor(Math.random() * destroy));
      var dd = Array.from({length: distort}, () => Math.floor(Math.random() * destroy));

    for(var k = 0; k < distort; k++){
      set(cc[k], dd[k], get(aa[k],bb[k],hSizeDistort,vSizeDistort));
    }

    layer1Items = generateCollageItems(layer1Images, 20000, 0, 1500,0,1000, width, height, 0.4, 1, 0, 0);//northAmerica
    drawCollageItems(layer1Items);
}

function runArrays(hSize,vSize){
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
}

function draw(){
  console.log(frameCount);
    if (frameCount > delay){
        runArrays(10,10);//these change the size of the chunk putting back together
    }
    if (frameCount > 150){
        runArrays(20,20);
    }
    if (frameCount > 280){
        runArrays(30,30);
    }
    if (frameCount > 320){
        runArrays(40,40);
    }
    if (frameCount > 440){
        runArrays(50,50);
    }
    if(frameCount > 890){
        noLoop();
    set(0, 0, get(hide,0,width,height));//clears any remaining distortion
    }
}

function mousePressed() {
  noLoop();
}


function keyReleased() {
  if (key == '1') {
    layer1Items = generateCollageItems(layer1Images, 8000, 35, 450,10,340, width, height, small, large, 0, 0);
    layer1aItems = generateCollageItems(layer1Images, 500, 430, 500,100,240, width, height, small, large, 0, 0);
  }
  if (key == '2') layer2Items = generateCollageItems(layer2Images, 4000, 350, 600,340,675, width, height, small, large, 0, 0);
  if (key == '3') layer3Items = generateCollageItems(layer3Images, 2000, 620, 950,80,255, width, height, small, large, 0, 0);
  if (key == '4') layer4Items = generateCollageItems(layer4Images, 4000, 650, 950,255,600, width, height, small, large, 0, 0);
  if (key == '5') {
    layer5Items = generateCollageItems(layer5Images, 8000, 950, 1500,25,450, width, height, small, large, 0, 0);
    layer5aItems = generateCollageItems(layer5Images, 500, 0, 40,70,130, width, height, small, large, 0, 0);//asia
    layer5bItems = generateCollageItems(layer5Images, 5000, 875, 1000,250,350, width, height, small, large, 0, 0);//asia
  }
  if (key == '6') layer6Items = generateCollageItems(layer6Images, 3000, 1100, 1500,450,650, width, height, small, large, 0, 0);


  clear();
  background('rgb(12,86,157)');
  drawCollageItems(layer1Items);//North America
  drawCollageItems(layer1aItems);
  drawCollageItems(layer2Items);//South America
  drawCollageItems(layer3Items);//Europe
  drawCollageItems(layer4Items);//Africa
  drawCollageItems(layer5Items);//Asia
  drawCollageItems(layer5aItems);
  drawCollageItems(layer5bItems);
  drawCollageItems(layer6Items);//Australia
  fill(230);
  rect(0,680,1440,200);
  rect(310,0,400,100);
  rect(500,100,100,100);
  image(oceans,0,0,picWidth,picHeight);
}

function generateCollageItems(layerImages, count, posX1, posX2, posY1,posY2, rangeX, rangeY, scaleStart, scaleEnd, rotationStart, rotationEnd) {
  var layerItems = [];
  for (var i = 0; i < count; i++) {
    var index = i % layerImages.length;//every time size of picture
    var item = new CollageItem(layerImages[index]);
    item.x = random(posX1,posX2);
    item.y = random(posY1,posY2);
    item.scaling = random(scaleStart, scaleEnd);
    item.rotation = random(rotationStart, rotationEnd);
    layerItems.push(item);
  }
  return layerItems;
}

function CollageItem(image) {
  this.image = image;
  this.x = 0;
  this.y = 0;
  this.rotation = 0;
  this.scaling = 1;
}

function drawCollageItems(layerItems) {
  for (var i = 0; i < layerItems.length; i++) {
    push();
    translate(layerItems[i].x, layerItems[i].y);
    rotate(layerItems[i].rotation);
    scale(layerItems[i].scaling);
    image(layerItems[i].image, 0, 0);
    pop();
  }
}
