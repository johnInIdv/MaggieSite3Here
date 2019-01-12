/**
 *
 * LINE CHART
 *
 */
//These variables set the colors for the data lines.
var sparkLineWeight = 2;//sets weight of the sparkslines
var perPacksColor = "rgb(210, 4, 6)";
var consumptionColor = "rgb(0, 57, 230)";
var fedStatePercentColor = "rgb(70, 162, 166)";
var stateColor = "rgb(205,122,231)";
var grossTaxColor = "rgb(255, 128, 0)";
var fedStatePackColor = "rgb(15, 189, 82)";

var perPack = [];//"Average Cost per pack "
var perFedStatePercent = [];//"Federal and State tax as a Percentage of Retail Price "
var perConsumption = [];//"Cigarette Consumption (Pack Sales Per Capita)"
var perState = [];//"State Tax per pack "
var perGrossTax = [];//"Gross Cigarette Tax Revenue "
var perFedStatePack = [];//"Fede

//data is loading into these variables. They separate the data into states and then into the 6 categories for each state
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

var coPerPack = [];
var coConsumption = [];
var coFedStatePercent = [];
var coState = [];
var coGrossTax = [];
var coFedStatePack = [];

var ctPerPack = [];
var ctConsumption = [];
var ctFedStatePercent = [];
var ctState = [];
var ctGrossTax = [];
var ctFedStatePack = [];

var dcPerPack = [];
var dcConsumption = [];
var dcFedStatePercent = [];
var dcState = [];
var dcGrossTax = [];
var dcFedStatePack = [];

var dePerPack = [];
var deConsumption = [];
var deFedStatePercent = [];
var deState = [];
var deGrossTax = [];
var deFedStatePack = [];

var flPerPack = [];
var flConsumption = [];
var flFedStatePercent = [];
var flState = [];
var flGrossTax = [];
var flFedStatePack = [];

var gaPerPack = [];
var gaConsumption = [];
var gaFedStatePercent = [];
var gaState = [];
var gaGrossTax = [];
var gaFedStatePack = [];

var hiPerPack = [];
var hiConsumption = [];
var hiFedStatePercent = [];
var hiState = [];
var hiGrossTax = [];
var hiFedStatePack = [];

var iaPerPack = [];
var iaConsumption = [];
var iaFedStatePercent = [];
var iaState = [];
var iaGrossTax = [];
var iaFedStatePack = [];

var idPerPack = [];
var idConsumption = [];
var idFedStatePercent = [];
var idState = [];
var idGrossTax = [];
var idFedStatePack = [];

var ilPerPack = [];
var ilConsumption = [];
var ilFedStatePercent = [];
var ilState = [];
var ilGrossTax = [];
var ilFedStatePack = [];

var inPerPack = [];
var inConsumption = [];
var inFedStatePercent = [];
var inState = [];
var inGrossTax = [];
var inFedStatePack = [];

var ksPerPack = [];
var ksConsumption = [];
var ksFedStatePercent = [];
var ksState = [];
var ksGrossTax = [];
var ksFedStatePack = [];

var kyPerPack = [];
var kyConsumption = [];
var kyFedStatePercent = [];
var kyState = [];
var kyGrossTax = [];
var kyFedStatePack = [];

var laPerPack = [];
var laConsumption = [];
var laFedStatePercent = [];
var laState = [];
var laGrossTax = [];
var laFedStatePack = [];

var maPerPack = [];
var maConsumption = [];
var maFedStatePercent = [];
var maState = [];
var maGrossTax = [];
var maFedStatePack = [];

var mdPerPack = [];
var mdConsumption = [];
var mdFedStatePercent = [];
var mdState = [];
var mdGrossTax = [];
var mdFedStatePack = [];

var mePerPack = [];
var meConsumption = [];
var meFedStatePercent = [];
var meState = [];
var meGrossTax = [];
var meFedStatePack = [];

var miPerPack = [];
var miConsumption = [];
var miFedStatePercent = [];
var miState = [];
var miGrossTax = [];
var miFedStatePack = [];

var mnPerPack = [];
var mnConsumption = [];
var mnFedStatePercent = [];
var mnState = [];
var mnGrossTax = [];
var mnFedStatePack = [];

var moPerPack = [];
var moConsumption = [];
var moFedStatePercent = [];
var moState = [];
var moGrossTax = [];
var moFedStatePack = [];

var msPerPack = [];
var msConsumption = [];
var msFedStatePercent = [];
var msState = [];
var msGrossTax = [];
var msFedStatePack = [];

var mtPerPack = [];
var mtConsumption = [];
var mtFedStatePercent = [];
var mtState = [];
var mtGrossTax = [];
var mtFedStatePack = [];

var ncPerPack = [];
var ncConsumption = [];
var ncFedStatePercent = [];
var ncState = [];
var ncGrossTax = [];
var ncFedStatePack = [];

var nePerPack = [];
var neConsumption = [];
var neFedStatePercent = [];
var neState = [];
var neGrossTax = [];
var neFedStatePack = [];

var nhPerPack = [];
var nhConsumption = [];
var nhFedStatePercent = [];
var nhState = [];
var nhGrossTax = [];
var nhFedStatePack = [];

var njPerPack = [];
var njConsumption = [];
var njFedStatePercent = [];
var njState = [];
var njGrossTax = [];
var njFedStatePack = [];

var nmPerPack = [];
var nmConsumption = [];
var nmFedStatePercent = [];
var nmState = [];
var nmGrossTax = [];
var nmFedStatePack = [];

var nvPerPack = [];
var nvConsumption = [];
var nvFedStatePercent = [];
var nvState = [];
var nvGrossTax = [];
var nvFedStatePack = [];

var nyPerPack = [];
var nyConsumption = [];
var nyFedStatePercent = [];
var nyState = [];
var nyGrossTax = [];
var nyFedStatePack = [];

var ndPerPack = [];
var ndConsumption = [];
var ndFedStatePercent = [];
var ndState = [];
var ndGrossTax = [];
var ndFedStatePack = [];

var ohPerPack = [];
var ohConsumption = [];
var ohFedStatePercent = [];
var ohState = [];
var ohGrossTax = [];
var ohFedStatePack = [];

var okPerPack = [];
var okConsumption = [];
var okFedStatePercent = [];
var okState = [];
var okGrossTax = [];
var okFedStatePack = [];

var orPerPack = [];
var orConsumption = [];
var orFedStatePercent = [];
var orState = [];
var orGrossTax = [];
var orFedStatePack = [];

var paPerPack = [];
var paConsumption = [];
var paFedStatePercent = [];
var paState = [];
var paGrossTax = [];
var paFedStatePack = [];

var riPerPack = [];
var riConsumption = [];
var riFedStatePercent = [];
var riState = [];
var riGrossTax = [];
var riFedStatePack = [];

var scPerPack = [];
var scConsumption = [];
var scFedStatePercent = [];
var scState = [];
var scGrossTax = [];
var scFedStatePack = [];

var sdPerPack = [];
var sdConsumption = [];
var sdFedStatePercent = [];
var sdState = [];
var sdGrossTax = [];
var sdFedStatePack = [];

var tnPerPack = [];
var tnConsumption = [];
var tnFedStatePercent = [];
var tnState = [];
var tnGrossTax = [];
var tnFedStatePack = [];

var txPerPack = [];
var txConsumption = [];
var txFedStatePercent = [];
var txState = [];
var txGrossTax = [];
var txFedStatePack = [];

var utPerPack = [];
var utConsumption = [];
var utFedStatePercent = [];
var utState = [];
var utGrossTax = [];
var utFedStatePack = [];

var vaPerPack = [];
var vaConsumption = [];
var vaFedStatePercent = [];
var vaState = [];
var vaGrossTax = [];
var vaFedStatePack = [];

var vtPerPack = [];
var vtConsumption = [];
var vtFedStatePercent = [];
var vtState = [];
var vtGrossTax = [];
var vtFedStatePack = [];

var waPerPack = [];
var waConsumption = [];
var waFedStatePercent = [];
var waState = [];
var waGrossTax = [];
var waFedStatePack = [];

var wiPerPack = [];
var wiConsumption = [];
var wiFedStatePercent = [];
var wiState = [];
var wiGrossTax = [];
var wiFedStatePack = [];

var wvPerPack = [];
var wvConsumption = [];
var wvFedStatePercent = [];
var wvState = [];
var wvGrossTax = [];
var wvFedStatePack = [];

var wyPerPack = [];
var wyConsumption = [];
var wyFedStatePercent = [];
var wyState = [];
var wyGrossTax = [];
var wyFedStatePack = [];

//I got the coordinates by placing the map into Photoshop and then getting the points using the cursor. The first point is the
// x coordinate and the second is the y coordinate of the starting point, which is the lower left of the lines. The third point(length)
// adjusts the length of the lines, and the function also uses this to adjust the height. The adjuster variables are used to adjust the
// coordinates in case the map on the visualization needs to change size. I can apply a percent to the adjuster and it will uniformly change
// all the variables. This might be used if I wanted to make the visual responsive?
var xAdjuster = 1;
var yAdjuster = 1;
var lengthAdjuster = 1;
var coordinates = {//give the x and y coordinates and the xLength of each state
  ak: [102*xAdjuster,595*yAdjuster,78*lengthAdjuster],
  al: [718*xAdjuster,493*yAdjuster,47*lengthAdjuster],
  ar: [595*xAdjuster,435*yAdjuster,60*lengthAdjuster],
  az: [212*xAdjuster,442*yAdjuster,68*lengthAdjuster],
  ca: [84*xAdjuster,354*yAdjuster,60*lengthAdjuster],
  co: [325*xAdjuster,335*yAdjuster,105*lengthAdjuster],
  ct: [960*xAdjuster,210*yAdjuster,20*lengthAdjuster],
  dc: [906*xAdjuster,300*yAdjuster,5*lengthAdjuster],
  de: [933*xAdjuster,291*yAdjuster,10*lengthAdjuster],
  fl: [852*xAdjuster,587*yAdjuster,30*lengthAdjuster],
  ga: [790*xAdjuster,489*yAdjuster,47*lengthAdjuster],
  hi: [379*xAdjuster,645*yAdjuster,15*lengthAdjuster],
  ia: [570*xAdjuster,270*yAdjuster,65*lengthAdjuster],
  id: [205*xAdjuster,205*yAdjuster,70*lengthAdjuster],
  il: [658*xAdjuster,305*yAdjuster,45*lengthAdjuster],
  in: [717*xAdjuster,300*yAdjuster,40*lengthAdjuster],
  ks: [455*xAdjuster,358*yAdjuster,100*lengthAdjuster],
  ky: [753*xAdjuster,360*yAdjuster,51*lengthAdjuster],
  la: [610*xAdjuster,506*yAdjuster,37*lengthAdjuster],
  ma: [964*xAdjuster,193*yAdjuster,18*lengthAdjuster],
  md: [903*xAdjuster,280*yAdjuster,11*lengthAdjuster],
  me: [990*xAdjuster,115*yAdjuster,30*lengthAdjuster],
  mi: [736*xAdjuster,230*yAdjuster,40*lengthAdjuster],
  mn: [552*xAdjuster,165*yAdjuster,52*lengthAdjuster],
  mo: [590*xAdjuster,370*yAdjuster,63*lengthAdjuster],
  ms: [660*xAdjuster,490*yAdjuster,45*lengthAdjuster],
  mt: [285*xAdjuster,143*yAdjuster,110*lengthAdjuster],
  nc: [862*xAdjuster,391*yAdjuster,45*lengthAdjuster],
  ne: [453*xAdjuster,285*yAdjuster,90*lengthAdjuster],
  nh: [969*xAdjuster,170*yAdjuster,17*lengthAdjuster],
  nj: [935*xAdjuster,265*yAdjuster,15*lengthAdjuster],
  nm: [303*xAdjuster,463*yAdjuster,100*lengthAdjuster],
  nv: [145*xAdjuster,300*yAdjuster,70*lengthAdjuster],
  nv: [145*xAdjuster,285*yAdjuster,70*lengthAdjuster],
  ny: [900*xAdjuster,205*yAdjuster,45*lengthAdjuster],
  nd: [435*xAdjuster,140*yAdjuster,100*lengthAdjuster],
  oh: [770*xAdjuster,285*yAdjuster,55*lengthAdjuster],
  ok: [500*xAdjuster,425*yAdjuster,75*lengthAdjuster],
  or: [90*xAdjuster,175*yAdjuster,80*lengthAdjuster],
  pa: [850*xAdjuster,265*yAdjuster,70*lengthAdjuster],
  ri: [989*xAdjuster,204*yAdjuster,9*lengthAdjuster],
  sc: [840*xAdjuster,432*yAdjuster,42*lengthAdjuster],
  sd: [430*xAdjuster,210*yAdjuster,105*lengthAdjuster],
  tn: [700*xAdjuster,404*yAdjuster,60*lengthAdjuster],
  tx: [420*xAdjuster,530*yAdjuster,130*lengthAdjuster],
  ut: [225*xAdjuster,326*yAdjuster,80*lengthAdjuster],
  va: [863*xAdjuster,343*yAdjuster,50*lengthAdjuster],
  vt: [945*xAdjuster,140*yAdjuster,18*lengthAdjuster],
  wa: [135*xAdjuster,88*yAdjuster,70*lengthAdjuster],
  wi: [630*xAdjuster,188*yAdjuster,60*lengthAdjuster],
  wv: [818*xAdjuster,324*yAdjuster,35*lengthAdjuster],
  wy: [302*xAdjuster,238*yAdjuster,100*lengthAdjuster],
}

//creates an array of all coordinates
var corValues = Object.values(coordinates);
var newVals = coordinates.ak.concat(coordinates.al, coordinates.ar,coordinates.az,coordinates.ca,coordinates.co,coordinates.ct,
  coordinates.dc,coordinates.de,coordinates.fl,coordinates.hi,coordinates.ia,coordinates.id,coordinates.il,coordinates.in,
  coordinates.ks,coordinates.ky,coordinates.la,coordinates.ma,coordinates.md,coordinates.me,coordinates.mi,coordinates.mn,
  coordinates.mo,coordinates.ms,coordinates.mt,coordinates.ne,coordinates.nh,coordinates.nj,coordinates.nm,coordinates.nv,
  coordinates.ny,coordinates.oh,coordinates.ok,coordinates.or,coordinates.pa,coordinates.sc,coordinates.sd,coordinates.tn,
  coordinates.tx,coordinates.ut,coordinates.va,coordinates.vt,coordinates.wa,coordinates.wi,coordinates.wv,coordinates.nd,
  coordinates.ga,coordinates.nc,coordinates.ri,coordinates.wy);
 // This takes the long array of coordinates from newVals and breaks them up into three separate variables
var xCoordinates = newVals.filter((element, index) => {
  return index % 3 === 0;
})
var yCoordinates = newVals.filter((element, index) => {
  return index % 3 === 1;
})
var xLength = newVals.filter((element, index) => {
  return index % 3 === 2;
})

//these arrays are used to draw the lines when the buttons are pressed. They create arrays will all 50 states data
// into one array for each category. That is then used to in the function to draw the data for that category.
var allPerPacks = [akPerPack,alPerPack,arPerPack,azPerPack,caPerPack,coPerPack,ctPerPack,dcPerPack,
        dePerPack,flPerPack,hiPerPack,iaPerPack,idPerPack,ilPerPack,inPerPack,ksPerPack,kyPerPack,laPerPack,maPerPack,
        mdPerPack,mePerPack,miPerPack,mnPerPack,moPerPack,msPerPack,mtPerPack,nePerPack,njPerPack,nmPerPack,nvPerPack,
        nyPerPack,ohPerPack,okPerPack,orPerPack,paPerPack,scPerPack,scPerPack,tnPerPack,txPerPack,utPerPack,vaPerPack,
        vtPerPack,waPerPack,wiPerPack,wvPerPack,ndPerPack,gaPerPack,ncPerPack,riPerPack,nhPerPack,wyPerPack];
var allConsumption = [akConsumption,alConsumption,arConsumption,azConsumption,caConsumption,coConsumption,ctConsumption,dcConsumption,
        deConsumption,flConsumption,hiConsumption,iaConsumption,idConsumption,ilConsumption,inConsumption,ksConsumption,kyConsumption,
        laConsumption,maConsumption,mdConsumption,meConsumption,miConsumption,mnConsumption,moConsumption,msConsumption,mtConsumption,
        neConsumption,njConsumption,nmConsumption,nvConsumption,nyConsumption,ohConsumption,okConsumption,orConsumption,paConsumption,
        scConsumption,sdConsumption,tnConsumption,txConsumption,utConsumption,vaConsumption,vtConsumption,waConsumption,
        wiConsumption,wvConsumption,ndConsumption,gaConsumption,ncConsumption,riConsumption,nhConsumption,wyConsumption];
var allFedStatePercent = [akFedStatePercent,alFedStatePercent,arFedStatePercent,azFedStatePercent,caFedStatePercent,coFedStatePercent,ctFedStatePercent,dcFedStatePercent,
        deFedStatePercent,flFedStatePercent,hiFedStatePercent,iaFedStatePercent,idFedStatePercent,ilFedStatePercent,inFedStatePercent,ksFedStatePercent,
        kyFedStatePercent,laFedStatePercent,maFedStatePercent,mdFedStatePercent,meFedStatePercent,miFedStatePercent,nvFedStatePercent,
        mnFedStatePercent,moFedStatePercent,msFedStatePercent,mtFedStatePercent,neFedStatePercent,njFedStatePercent,nmFedStatePercent,
        nyFedStatePercent,ohFedStatePercent,okFedStatePercent,orFedStatePercent,paFedStatePercent,scFedStatePercent,
        sdFedStatePercent,tnFedStatePercent,txFedStatePercent,utFedStatePercent,vaFedStatePercent,vtFedStatePercent,waFedStatePercent,
        wiFedStatePercent,wvFedStatePercent,ndFedStatePercent,gaFedStatePercent,ncFedStatePercent,riFedStatePercent,nhFedStatePercent,wyFedStatePercent];
var allState = [akState,alState,arState,azState,caState,coState,ctState,dcState,
        deState,flState,hiState,iaState,idState,ilState,inState,ksState,kyState,laState,maState,mdState,meState,
        miState,mnState,moState,msState,mtState,neState,njState,nmState,nvState,nyState,ohState,okState,orState,paState,
        scState,sdState,tnState,txState,utState,vaState,vtState,waState,wiState,wvState,ndState,gaState,ncState,riState,nhState,wyState];
var allGrossTax = [akGrossTax,alGrossTax,arGrossTax,azGrossTax,caGrossTax,coGrossTax,ctGrossTax,dcGrossTax,
        deGrossTax,flGrossTax,hiGrossTax,iaGrossTax,idGrossTax,ilGrossTax,inGrossTax,ksGrossTax,kyGrossTax,laGrossTax,maGrossTax,
        mdGrossTax,meGrossTax,miGrossTax,mnGrossTax,moGrossTax,msGrossTax,mtGrossTax,neGrossTax,njGrossTax,nmGrossTax,nvGrossTax,
        nyGrossTax,ohGrossTax,okGrossTax,orGrossTax,paGrossTax,scGrossTax,sdGrossTax,tnGrossTax,txGrossTax,utGrossTax,vaGrossTax,
        vtGrossTax,waGrossTax,wiGrossTax,wvGrossTax,ndGrossTax,gaGrossTax,ncGrossTax,riGrossTax,nhGrossTax,wyGrossTax];
var allFedStatePack = [akFedStatePack,alFedStatePack,arFedStatePack,azFedStatePack,caFedStatePack,coFedStatePack,ctFedStatePack,dcFedStatePack,
        deFedStatePack,flFedStatePack,hiFedStatePack,iaFedStatePack,idFedStatePack,ilFedStatePack,inFedStatePack,ksFedStatePack,
        kyFedStatePack,laFedStatePack,maFedStatePack,mdFedStatePack,meFedStatePack,miFedStatePack,mnFedStatePack,moFedStatePack,
        msFedStatePack,mtFedStatePack,neFedStatePack,njFedStatePack,nmFedStatePack,nvFedStatePack,nyFedStatePack,ohFedStatePack,
        okFedStatePack,orFedStatePack,paFedStatePack,scFedStatePack,sdFedStatePack,tnFedStatePack,txFedStatePack,utFedStatePack,
        vaFedStatePack,vtFedStatePack,waFedStatePack,wiFedStatePack,wvFedStatePack,ndFedStatePack,gaFedStatePack,ncFedStatePack,riFedStatePack,nhFedStatePack,wyFedStatePack];


function preload() {
  table = loadTable("data/tobaccoDataFinal.csv", 'csv', 'header');
}

function setup() {
  var cnv = createCanvas(1100, 900);
  cnv.parent('canvas1');
  textFont("Muli");
  // goes through the entire dataset and loads the data into the arrays created for the states and categories
  // function. The categories: loadData(state,perPack,perFedStatePercent,perConsumption,perState,perGrossTax,perFedStatePack)
  loadData("Alaska",akPerPack,akFedStatePercent,akConsumption,akState,akGrossTax,akFedStatePack);
  loadData("Alabama",alPerPack,alFedStatePercent,alConsumption,alState,alGrossTax,alFedStatePack);
  loadData("Arkansas",arPerPack,arFedStatePercent,arConsumption,arState,arGrossTax,arFedStatePack);
  loadData("Arizona",azPerPack,azFedStatePercent,azConsumption,azState,azGrossTax,azFedStatePack);
  loadData("California",caPerPack,caFedStatePercent,caConsumption,caState,caGrossTax,caFedStatePack);
  loadData("Colorado",coPerPack,coFedStatePercent,coConsumption,coState,coGrossTax,coFedStatePack);
  loadData("Connecticut",ctPerPack,ctFedStatePercent,ctConsumption,ctState,ctGrossTax,ctFedStatePack);
  loadData("District of Columbia",dcPerPack,dcFedStatePercent,dcConsumption,dcState,dcGrossTax,dcFedStatePack);
  loadData("Delaware",dePerPack,deFedStatePercent,deConsumption,deState,deGrossTax,deFedStatePack);
  loadData("Florida",flPerPack,flFedStatePercent,flConsumption,flState,flGrossTax,flFedStatePack);
  loadData("Georgia",gaPerPack,gaFedStatePercent,gaConsumption,gaState,gaGrossTax,gaFedStatePack);
  loadData("Hawaii",hiPerPack,hiFedStatePercent,hiConsumption,hiState,hiGrossTax,hiFedStatePack);
  loadData("Iowa",iaPerPack,iaFedStatePercent,iaConsumption,iaState,iaGrossTax,iaFedStatePack);
  loadData("Idaho",idPerPack,idFedStatePercent,idConsumption,idState,idGrossTax,idFedStatePack);
  loadData("Illinois",ilPerPack,ilFedStatePercent,ilConsumption,ilState,ilGrossTax,ilFedStatePack);
  loadData("Indiana",inPerPack,inFedStatePercent,inConsumption,inState,inGrossTax,inFedStatePack);
  loadData("Kansas",ksPerPack,ksFedStatePercent,ksConsumption,ksState,ksGrossTax,ksFedStatePack);
  loadData("Kentucky",kyPerPack,kyFedStatePercent,kyConsumption,kyState,kyGrossTax,kyFedStatePack);
  loadData("Louisiana",laPerPack,laFedStatePercent,laConsumption,laState,laGrossTax,laFedStatePack);
  loadData("Massachusetts",maPerPack,maFedStatePercent,maConsumption,maState,maGrossTax,maFedStatePack);
  loadData("Maryland",mdPerPack,mdFedStatePercent,mdConsumption,mdState,mdGrossTax,mdFedStatePack);
  loadData("Maine",mePerPack,meFedStatePercent,meConsumption,meState,meGrossTax,meFedStatePack);
  loadData("Michigan",miPerPack,miFedStatePercent,miConsumption,miState,miGrossTax,miFedStatePack);
  loadData("Minnesota",mnPerPack,mnFedStatePercent,mnConsumption,mnState,mnGrossTax,mnFedStatePack);
  loadData("Missouri",moPerPack,moFedStatePercent,moConsumption,moState,moGrossTax,moFedStatePack);
  loadData("Mississippi",msPerPack,msFedStatePercent,msConsumption,msState,msGrossTax,msFedStatePack);
  loadData("Montana",mtPerPack,mtFedStatePercent,mtConsumption,mtState,mtGrossTax,mtFedStatePack);
  loadData("Nebraska",nePerPack,neFedStatePercent,neConsumption,neState,neGrossTax,neFedStatePack);
  loadData("New Hampshire",nhPerPack,nhFedStatePercent,nhConsumption,nhState,nhGrossTax,nhFedStatePack);
  loadData("New Jersey",njPerPack,njFedStatePercent,njConsumption,njState,njGrossTax,njFedStatePack);
  loadData("New Mexico",nmPerPack,nmFedStatePercent,nmConsumption,nmState,nmGrossTax,nmFedStatePack);
  loadData("Nevada",nvPerPack,nvFedStatePercent,nvConsumption,nvState,nvGrossTax,nvFedStatePack);
  loadData("New York",nyPerPack,nyFedStatePercent,nyConsumption,nyState,nyGrossTax,nyFedStatePack);
  loadData("North Carolina",ncPerPack,ncFedStatePercent,ncConsumption,ncState,ncGrossTax,ncFedStatePack);
  loadData("North Dakota",ndPerPack,ndFedStatePercent,ndConsumption,ndState,ndGrossTax,ndFedStatePack);
  loadData("Ohio",ohPerPack,ohFedStatePercent,ohConsumption,ohState,ohGrossTax,ohFedStatePack);
  loadData("Oklahoma",okPerPack,okFedStatePercent,okConsumption,okState,okGrossTax,okFedStatePack);
  loadData("Oregon",orPerPack,orFedStatePercent,orConsumption,orState,orGrossTax,orFedStatePack);
  loadData("Pennsylvania",paPerPack,paFedStatePercent,paConsumption,paState,paGrossTax,paFedStatePack);
  loadData("Rhode Island",riPerPack,riFedStatePercent,riConsumption,riState,riGrossTax,riFedStatePack);
  loadData("South Carolina",scPerPack,scFedStatePercent,scConsumption,scState,scGrossTax,scFedStatePack);
  loadData("South Dakota",sdPerPack,sdFedStatePercent,sdConsumption,sdState,sdGrossTax,sdFedStatePack);
  loadData("Tennessee",tnPerPack,tnFedStatePercent,tnConsumption,tnState,tnGrossTax,tnFedStatePack);
  loadData("Texas",txPerPack,txFedStatePercent,txConsumption,txState,txGrossTax,txFedStatePack);
  loadData("Utah",utPerPack,utFedStatePercent,utConsumption,utState,utGrossTax,utFedStatePack);
  loadData("Virginia",vaPerPack,vaFedStatePercent,vaConsumption,vaState,vaGrossTax,vaFedStatePack);
  loadData("Vermont",vtPerPack,vtFedStatePercent,vtConsumption,vtState,vtGrossTax,vtFedStatePack);
  loadData("Washington",waPerPack,waFedStatePercent,waConsumption,waState,waGrossTax,waFedStatePack);
  loadData("Wisconsin",wiPerPack,wiFedStatePercent,wiConsumption,wiState,wiGrossTax,wiFedStatePack);
  loadData("West Virginia",wvPerPack,wvFedStatePercent,wvConsumption,wvState,wvGrossTax,wvFedStatePack);
  loadData("Wyoming",wyPerPack,wyFedStatePercent,wyConsumption,wyState,wyGrossTax,wyFedStatePack);
}

function draw(){
  //these if statements toggle the canvases as people move between the buttons and the map. When the cursor less than
  // x = 1100px (left side of the page), the interactice map (#map) allows users to see pop-ups for each state. When the cursor
  // goes past x = 1100 (right side of the page), the #canvas1 appears as a black map on which the user can draw the lines using
  // the buttons. The #mapBackground covers the #map when the cursor is on the right. The #mapBackground is the same as the #map
  // except that is doesn't contain the state letters, which would interfere with the lines.
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

// These function take all the data and draw the lines using the arrays created above. They also change the Buttons
// to reflect the change and allow the user to see the color of the line and compare it to the color of the button pressed.
function PerPacks(){
  for (var n = 0; n < allPerPacks.length; n++){
    drawLinesPerPack(allPerPacks[n],xCoordinates[n],yCoordinates[n],xLength[n],perPacksColor);
  }
    changePictureOnClick('perPack',"images/perPackDark.png");
}
function Consumption(){
  for (var n = 0; n < allConsumption.length; n++){
    drawLinesConsumption(allConsumption[n],xCoordinates[n],yCoordinates[n],xLength[n],consumptionColor);
  }
    changePictureOnClick('consumption',"images/consumptionDark.png");
}
function FedStatePercent(){
  for (var n = 0; n < allFedStatePercent.length; n++){
    drawLinesFedStatePercent(allFedStatePercent[n],xCoordinates[n],yCoordinates[n],xLength[n],fedStatePercentColor);
  }
    changePictureOnClick('percent',"images/fedStatePercentDark.png");
}
function State(){
  for (var n = 0; n < allState.length; n++){
    drawLinesState(allState[n],xCoordinates[n],yCoordinates[n],xLength[n],stateColor);
  }
    changePictureOnClick('state',"images/stateTaxDark.png");
}
function GrossTax(){
  for (var n = 0; n < allGrossTax.length; n++){
    drawLinesGrossTax(allGrossTax[n],xCoordinates[n],yCoordinates[n],xLength[n],grossTaxColor);
  }
    changePictureOnClick('gross',"images/grossTaxDark.png");
}
function FedStatePack(){
  for (var n = 0; n < allFedStatePack.length; n++){
    drawLinesFedStatePack(allFedStatePack[n],xCoordinates[n],yCoordinates[n],xLength[n],fedStatePackColor);
  }
    changePictureOnClick('fedStatePack',"images/fedStatePerPackDark.png");
}

function changePictureOnClick (id,picture) {
  var x = document.getElementById(id);
  x.setAttribute("src", picture);
}

function refreshPage(){
    window.location.reload();
}

// loads all the data into the arrays but running through the dataset and adding the state to the categories and pushing
// it to the arrays. For example, the first one would run through looking for "AlabamaAverage Cost per Pack" (the 6th column
//   and push the value (8thcolumn) to the perPack array. Then the loaddata function is called individually for every state
//   which creates the state specific arrays.
function loadData(state,perPack,perFedStatePercent,perConsumption,perState,perGrossTax,perFedStatePack){
  var cigDataRowCount = table.getRowCount();
  perPack;//"Average Cost per pack "
  perFedStatePercent;//"Federal and State tax as a Percentage of Retail Price "
  perConsumption;//"Cigarette Consumption (Pack Sales Per Capita)"
  perState;//"State Tax per pack "
  perGrossTax;//"Gross Cigarette Tax Revenue "
  perFedStatePack;//"Federal and State Tax per pack "

  for (var n = 0; n < cigDataRowCount; n++){
      // notice that some have an extra space at the end
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

// The drawLines function take the data for each state and draw the lines. There is a specific function for
// each category because they all have different minimum and maximum values. This means that each state line
// is drawn on scale with other state lines. For example, a state with low conumption will have a line closer
// to the bottom than a state with higher consumption.
// The xPosition and y Position is the starting coordinate of the lower left. These are provided for in the coordinates
// variable. The xLength allows the graph to be shorter or longer horizontally as needed.
function drawLinesPerPack(data,xPosition,yPosition,xLength,str){
  noFill();
  colorMode(RGB);
  strokeWeight(sparkLineWeight);
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
  strokeWeight(sparkLineWeight);
  stroke(str);
  beginShape();
  for (var i = 0; i < data.length; i++) {
    var x = map(i, 0, data.length-1, xPosition,xPosition + xLength);
    var y = map(data[i], min(13.2), max(296.2), yPosition, yPosition - (xLength));
    vertex(x, y);
  }
  endShape();
}

function drawLinesState(data,xPosition,yPosition,xLength,str){
  noFill();
  colorMode(RGB);
  strokeWeight(sparkLineWeight);
  stroke(str);
  beginShape();
  for (var i = 0; i < data.length; i++) {
    var x = map(i, 0, data.length-1, xPosition,xPosition + xLength);
    var y = map(data[i], min(0.02), max(4.35), yPosition, yPosition - (xLength));
    vertex(x, y);
  }
  endShape();
}

function drawLinesGrossTax(data,xPosition,yPosition,xLength,str){
  noFill();
  colorMode(RGB);
  strokeWeight(sparkLineWeight);
  stroke(str);
  beginShape();
  for (var i = 0; i < data.length; i++) {
    var x = map(i, 0, data.length-1, xPosition,xPosition + xLength);
    var y = map(data[i], min(2737000), max(1543947044), yPosition, yPosition - (xLength));
    vertex(x, y);
  }
  endShape();
}

function drawLinesFedStatePack(data,xPosition,yPosition,xLength,str){
  noFill();
  colorMode(RGB);
  strokeWeight(sparkLineWeight);
  stroke(str);
  beginShape();
  for (var i = 0; i < data.length; i++) {
    var x = map(i, 0, data.length-1, xPosition,xPosition + xLength);
    var y = map(data[i], min(0.10), max(5.36), yPosition, yPosition - (xLength));
    vertex(x, y);
  }
  endShape();
}

function drawLinesFedStatePercent(data,xPosition,yPosition,xLength,str){
  noFill();
  colorMode(RGB);
  strokeWeight(sparkLineWeight);
  stroke(str);
  beginShape();
  for (var i = 0; i < data.length; i++) {
    var x = map(i, 0, data.length-1, xPosition,xPosition + xLength);
    var y = map(data[i], min(10.5), max(89.3), yPosition, yPosition - (xLength));
    vertex(x, y);
  }
  endShape();
}
