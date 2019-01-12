/**
 *
 * LINE CHART
 *
 */

var perPacksColor = "rgb(210, 4, 6)";
var consumptionColor = "rgb(0, 57, 230)";
var fedStatePercentColor = "rgb(117, 144, 149)";
var stateColor = "rgb(176, 106, 103)";
var grossTaxColor = "rgb(255, 128, 0)";
var fedStatePackColor = "rgb(15, 189, 82)";

var perPack = [];//"Average Cost per pack "
var perFedStatePercent = [];//"Federal and State tax as a Percentage of Retail Price "
var perConsumption = [];//"Cigarette Consumption (Pack Sales Per Capita)"
var perState = [];//"State Tax per pack "
var perGrossTax = [];//"Gross Cigarette Tax Revenue "
var perFedStatePack = [];//"Fede

var akPerPack = [];
var akConsumption = [];
var akFedStatePercent = [];
var akState = [];
var akGrossTax = [];
var akFedStatePack = [];

var alPerPack = [];
var alConsumption = [];
var alFedStatePercent = [];
var alState = [];
var alGrossTax = [];
var alFedStatePack = [];

var arPerPack = [];
var arConsumption = [];
var arFedStatePercent = [];
var arState = [];
var arGrossTax = [];
var arFedStatePack = [];

var azPerPack = [];
var azConsumption = [];
var azFedStatePercent = [];
var azState = [];
var azGrossTax = [];
var azFedStatePack = [];

var caPerPack = [];
var caConsumption = [];
var caFedStatePercent = [];
var caState = [];
var caGrossTax = [];
var caFedStatePack = [];





var gaPerPack = [];
var gaConsumption = [];
var gaFedStatePercent = [];
var gaState = [];
var gaGrossTax = [];
var gaFedStatePack = [];

var ncPerPack = [];
var ncConsumption = [];
var ncFedStatePercent = [];
var ncState = [];
var ncGrossTax = [];
var ncFedStatePack = [];

var riPerPack = [];
var riConsumption = [];
var riFedStatePercent = [];
var riState = [];
var riGrossTax = [];
var riFedStatePack = [];

var wyPerPack = [];
var wyConsumption = [];
var wyFedStatePercent = [];
var wyState = [];
var wyGrossTax = [];
var wyFedStatePack = [];

var nhPerPack = [];
var nhConsumption = [];
var nhFedStatePercent = [];
var nhState = [];
var nhGrossTax = [];
var nhFedStatePack = [];

var xAdjuster = .85;
var yAdjuster = .85;
var lengthAdjuster = .85;
var coordinates = {//give the x and y coordinates and the xLength of each state
  // ak: [120*xAdjuster,700*yAdjuster,90*lengthAdjuster],
  // al: [845*xAdjuster,580*yAdjuster,55*lengthAdjuster],
  // ar: [776*xAdjuster,576*yAdjuster,53*lengthAdjuster],
  // az: [250*xAdjuster,520*yAdjuster,80*lengthAdjuster],
  // ca: [84*xAdjuster,354*yAdjuster,50*lengthAdjuster],
  //
  //
  // ga: [930*xAdjuster,575*yAdjuster,55*lengthAdjuster],
  // ri: [1163*xAdjuster,240*yAdjuster,10*lengthAdjuster],
  // nh: [1140*xAdjuster,200*yAdjuster,20*lengthAdjuster],

  ak: [102,595,78],
  al: [718,493,47],
  ar: [660,490,45],
  az: [212,442,68],
  ca: [84,354,50],


  ga: [790,489,47],
  nc: [882,390,33],
  ri: [989,204,9],
  nh: [969,170,17],
  wy: [315,245,70],
}

//creates an array of all coordinates and then breaks them into x, y, and x xLength
//must be sure that the order in newVals variable matches the order in corrdinates variable
const corValues = Object.values(coordinates);
var newVals = coordinates.ak.concat(coordinates.al, coordinates.ar,coordinates.az,coordinates.ca,     coordinates.ga,coordinates.nc,coordinates.ri,coordinates.nh,coordinates.wy);

let xCoordinates = newVals.filter((element, index) => {
  return index % 3 === 0;
})
let yCoordinates = newVals.filter((element, index) => {
  return index % 3 === 1;
})
let xLength = newVals.filter((element, index) => {
  return index % 3 === 2;
})

//these arrays are used to draw the lines when the buttons are pressed
var allPerPacks = [akPerPack,alPerPack,arPerPack,azPerPack,caPerPack,     gaPerPack,ncPerPack,riPerPack,nhPerPack,wyPerPack];
var allConsumption = [akConsumption,alConsumption,arConsumption,azConsumption,caConsumption,      gaConsumption,ncConsumption,riConsumption,nhConsumption,wyConsumption];
var allFedStatePercent = [akFedStatePercent,alFedStatePercent,arFedStatePercent,azFedStatePercent,caFedStatePercent,    gaFedStatePercent,ncFedStatePercent,riFedStatePercent,nhFedStatePercent,wyFedStatePercent];
var allState = [akState,alState,arState,azState,caState,    gaState,ncState,riState,nhState,wyState];
var allGrossTax = [akGrossTax,alGrossTax,arGrossTax,azGrossTax,caGrossTax,     gaGrossTax,ncGrossTax,riGrossTax,nhGrossTax,wyGrossTax];
var allFedStatePack = [akFedStatePack,alFedStatePack,arFedStatePack,azFedStatePack,caFedStatePack,     gaFedStatePack,ncFedStatePack,riFedStatePack,nhFedStatePack,wyFedStatePack];


function preload() {
  table = loadTable("data/tobaccoDataFinal.csv", 'csv', 'header');
}

function setup() {
  var cnv = createCanvas(1100, 900);
  cnv.parent('canvas1');

  textFont("Muli");

//   var statesAb = [ak,al,ar];
//   var stateNames = ['Alaska','Alabama','Arkansas'];
//   function loading(){
//     for (var i = 0; i < statesAb.length; i++){
//       loadData(stateNames[i],statesAb[i]+PerPack,statesAb[i]+FedStatePercent,statesAb[i]+Consumption,statesAb[i]+State,statesAb[i]+GrossTax,statesAb[i]+FedStatePack);
//     }
//   }
// loading();
  // goes through the entire dataset and loads the data into the arrays created for the states and categories
  // function loadData(state,perPack,perFedStatePercent,perConsumption,perState,perGrossTax,perFedStatePack)
  loadData("Alaska",akPerPack,akFedStatePercent,akConsumption,akState,akGrossTax,akFedStatePack);
  loadData("Alabama",alPerPack,alFedStatePercent,alConsumption,alState,alGrossTax,alFedStatePack);
  loadData("Arkansas",arPerPack,arFedStatePercent,arConsumption,arState,arGrossTax,arFedStatePack);
  loadData("Arizona",azPerPack,azFedStatePercent,azConsumption,azState,azGrossTax,azFedStatePack);
  loadData("California",caPerPack,caFedStatePercent,caConsumption,caState,caGrossTax,caFedStatePack);


  loadData("Georgia",gaPerPack,gaFedStatePercent,gaConsumption,gaState,gaGrossTax,gaFedStatePack);
  loadData("North Carolina",ncPerPack,ncFedStatePercent,ncConsumption,ncState,ncGrossTax,ncFedStatePack);
  loadData("Rhode Island",riPerPack,riFedStatePercent,riConsumption,riState,riGrossTax,riFedStatePack);
  loadData("New Hampshire",nhPerPack,nhFedStatePercent,nhConsumption,nhState,nhGrossTax,nhFedStatePack);
  loadData("Wyoming",wyPerPack,wyFedStatePercent,wyConsumption,wyState,wyGrossTax,wyFedStatePack);
  console.log(riPerPack);
  console.log(nhGrossTax);
}

function draw(){
  //these if statements toggle the canvases as people move between the buttons and the map
  if (mouseX < 1100){
    document.getElementById("canvas1").style.zIndex = "1";
    document.getElementById("map").style.zIndex = "5";
    document.getElementById("mapBackground").style.zIndex = "2";
  } else if (mouseX > 1100){
    document.getElementById("canvas1").style.zIndex = "5";
    document.getElementById("map").style.zIndex = "1";
    document.getElementById("mapBackground").style.zIndex = "3";
    // document.getElementById("map").main_settings.implemaps_usmap_mapdata.hide_labels = "yes";//remove labels when lines are being drawn
  }
}

function PerPacks(){
  for (var n = 0; n < allPerPacks.length; n++){
    drawLinesPerPack(allPerPacks[n],xCoordinates[n],yCoordinates[n],xLength[n],perPacksColor);
  }
}
function Consumption(){
  for (var n = 0; n < allConsumption.length; n++){
    drawLinesConsumption(allConsumption[n],xCoordinates[n],yCoordinates[n],xLength[n],consumptionColor);
  }
}
function FedStatePercent(){
  for (var n = 0; n < allFedStatePercent.length; n++){
    drawLines(allFedStatePercent[n],xCoordinates[n],yCoordinates[n],xLength[n],fedStatePercentColor);
  }
}
function State(){
  for (var n = 0; n < allState.length; n++){
    drawLines(allState[n],xCoordinates[n],yCoordinates[n],xLength[n],stateColor);
  }
}
function GrossTax(){
  for (var n = 0; n < allGrossTax.length; n++){
    drawLines(allGrossTax[n],xCoordinates[n],yCoordinates[n],xLength[n],grossTaxColor);
  }
}
function FedStatePack(){
  for (var n = 0; n < allFedStatePack.length; n++){
    drawLines(allFedStatePack[n],xCoordinates[n],yCoordinates[n],xLength[n],fedStatePackColor);
  }
}

function loadData(state,perPack,perFedStatePercent,perConsumption,perState,perGrossTax,perFedStatePack){
  var cigDataRowCount = table.getRowCount();
  perPack;//"Average Cost per pack "
  perFedStatePercent;//"Federal and State tax as a Percentage of Retail Price "
  perConsumption;//"Cigarette Consumption (Pack Sales Per Capita)"
  perState;//"State Tax per pack "
  perGrossTax;//"Gross Cigarette Tax Revenue "
  perFedStatePack;//"Federal and State Tax per pack "

  for (var n = 0; n < cigDataRowCount; n++){
      // for (var i = 0; i < 51; n++){
    if (table.getString(n,6)==state + "Average Cost per pack "){
    perPack.push(table.getNum(n,8));
    }
    if (table.getString(n,6)==state + "Federal and State tax as a Percentage of Retail Price "){
    perFedStatePercent.push(table.getNum(n,8));
    }
    if (table.getString(n,6)==state + "Cigarette Consumption (Pack Sales Per Capita)"){
    perConsumption.push(table.getNum(n,8));
    }
    if (table.getString(n,6)==state + "State Tax per pack "){
    perState.push(table.getNum(n,8));
    }
    if (table.getString(n,6)==state + "Gross Cigarette Tax Revenue "){
    perGrossTax.push(table.getNum(n,8));
    }
    if (table.getString(n,6)==state + "Federal and State Tax per pack "){
    perFedStatePack.push(table.getNum(n,8));
    }
  }
}

function drawLines(data,xPosition,yPosition,xLength,str){
  noFill();
  colorMode(RGB);
  strokeWeight(2);
  stroke(str);
  beginShape();
  for (var i = 0; i < data.length; i++) {
    var x = map(i, 0, data.length-1, xPosition,xPosition + xLength);
    var y = map(data[i], min(data), max(data), yPosition, yPosition - (xLength));
    vertex(x, y);
  }
  endShape();
}

function drawLinesPerPack(data,xPosition,yPosition,xLength,str){
  noFill();
  colorMode(RGB);
  strokeWeight(2);
  stroke(str);
  beginShape();
  for (var i = 0; i < data.length; i++) {
    var x = map(i, 0, data.length-1, xPosition,xPosition + xLength);
    var y = map(data[i], min(0.287), max(10.376), yPosition, yPosition - (xLength));
    vertex(x, y);
  }
  endShape();
}

function drawLinesConsumption(data,xPosition,yPosition,xLength,str){
  noFill();
  colorMode(RGB);
  strokeWeight(2);
  stroke(str);
  beginShape();
  for (var i = 0; i < data.length; i++) {
    var x = map(i, 0, data.length-1, xPosition,xPosition + xLength);
    var y = map(data[i], min(13.2), max(296.2), yPosition, yPosition - (xLength));
    vertex(x, y);
  }
  endShape();
}

// drawLines(nhPerPack,0.287,10.376,80,260,280,60,perPacksColor);
// //consumption: 13.2 - 296.2
// drawLines(nhConsumption,13.2,296.2,400,260,280,60,consumptionColor);
// //state tax: 0.02 - 4.35
// drawLines(nhState,0.02,4.35,80,490,280,300,stateColor);
// //gross revenue: 2,737,000 - 1,543,947,044
// drawLines(nhGrossTax,2737000,1543947044,400,490,280,300,grossTaxColor);
// //fed and state per pack: 0.10 - 5.36
// drawLines(nhFedStatePack,0.10,5.36,720,260,280,60,fedStatePackColor);
// //Federal State Percent: 10.5 - 89.3
// drawLines(nhFedStatePercent,10.5,89.3,720,490,280,300,fedStatePercentColor);
