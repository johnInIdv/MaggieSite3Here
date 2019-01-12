var data64 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,
              27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,
              51,52,53,54,55,56,57,58,59,60,61,62,63,64];
var dataBrackets = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,
                    9,10,11,12,13,14,15,16,1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,9,10,11,12,13,14,15,16];
var dataSeeds = [1,1,16,16,1,1,16,16]


// Row converter for All games data
    var rowConverter = function(d){
        return {
          Point_Diff: parseFloat(d.Point_Diff),
          Winning_Seed: parseFloat(d.Winning_Seed),
          Winner: d.Winner,
          Loser: d.Loser,
          Losing_Seed: parseFloat(d.Losing_Seed),
          Winning_Score: parseFloat(d.Winning_Score),
          Losing_Score: parseFloat(d.Losing_Score),
          Date: d.Date
        };
    };
// Row converter for Percent of points Data
  var rowConverter2 = function(d){
    return {
      rank: parseFloat(d.rank),
      percentPoints: parseFloat(d.percentPoints),
      losingAve: parseFloat(d.losingAve),
      winningAve: parseFloat(d.winningAve),
      numberGames: parseFloat(d.numberGames)
    };
}
var CXstartPosition = function(d,i){
  if (d < 20){
    return (d * 10);
  }
  if ( d > 19    &&    d < 40 ){
    return ((d-19) * 10)
  }
  else {
    return ((d-40) * 10)
  }
}
var CYstartPosition = function(d,i){
  if (d < 20){
    return 20;
  }
  if ( d > 19    &&    d < 40 ){
    return 40;
  }
  else {
    return 60;
  }
}


// Force Layout with Collision Detection of 351 teams
var simulation;
function update1(){

  var t = d3.select('#svg')
    .selectAll('text').remove();

  var width = 500, height = 500

  var numNodes = 351
  var nodes = d3.range(numNodes).map(function(d) {
    return {radius: 12}
  })

  var x = d3.scaleLinear()
      .rangeRound([0, width]);

  simulation = d3.forceSimulation(nodes)
    .force('charge', d3.forceManyBody().strength(.0002))
    .force('center', d3.forceCenter(width / 1.2, height / 1.5))
    .force('collision', d3.forceCollide().radius(function(d) {
      return d.radius
    }))
    .on('tick', ticked);

  function ticked() {
    var u = d3.select('#svg')
      .selectAll('circle')
      .data(nodes)

    u.enter()
      .append('circle')
      .attr('r', function(d) {
        return d.radius
      })
      .merge(u)
      .attr('cx', function(d) {
        return d.x
      })
      .attr('cy', function(d) {
        return d.y
      })
        .attr('fill', "rgb(245, 143, 0)")
        .attr('stroke-width', "2")
        .attr('stroke', 'black');
  }

    // Set up the explanation text

    var t = d3.select('#svg').append('text');
      t.text('351 teams start the season')
      .style('font-size','0px')
      .attr('class','shoutOut')
      .attr('x',190)
      .attr('y',630)
      .transition().duration(2000)
      .style("font-size","40px");


}
// End of Collision Detection

// Setting up the Circles
      // Starting X position
    var XcircleStart = function (d, i){
      if (d < 17) {
        return (d * 35 + 125);
      }
      if ( d > 16    &&    d < 33 ) {
        return (((d-17)+1)*35 + 125);
      }
      if ( d > 32    &&    d < 49 ) {
        return (((d-33)+1)*35 + 125);
      }
      else {
        return (((d-49)+1)*35 + 125);
      }
    }
    // Starting Y position
    var YcircleStart = function (d, i){
      if (i < 16) {
        return 250;
      }
      if ( i > 15    &&    i < 32 ) {
        return 350;
      }
      if ( i > 31    &&    i < 48 ) {
        return 450;
      }
      else {
        return 550;
      }
    }
// / Setting up the text
    // Starting X position
  var xtext =  function (d, i){
    if (i < 9) {
      return (((i+1) * 35)-6 + 125);
    }
    if ( i > 8    &&    i < 16 ) {
      return (((i+1) * 35)-11 + 125);
    }
    if ( i > 15    &&    i < 32 ) {
      return (((((i+1)-17)+1)*35)-11 + 125);
    }
    if ( i > 31    &&    i < 48 ) {
      return (((((i+1)-33)+1)*35)-11 + 125);
    }
    else {
      return (((((i+1)-49)+1)*35)-11 + 125);
    }
  }
    // Starting Y position
  var ytext = function (d, i){
    if (d < 17) {
      return (250+6);
    }
    if ( d > 16    &&    d < 33 ) {
      return (350+6);
    }
    if ( d > 32    &&    d < 49 ) {
      return (450+6);
    }
    else {
      return (550+6);
    }
  }


function update2(data){
  simulation.stop();
  d3.select('#svg').selectAll('text').remove();

  var u = d3.select('#svg').selectAll('circle').data(data);
    u.enter().append('circle')
      .attr('cx', XcircleStart)
      .attr('cy', YcircleStart)
      .attr('r', 15)
      .attr('fill', 'rgb(245, 143, 0)')
      .attr('stroke-width', "2")
      .attr('stroke', 'black');
    u.transition()
      .duration(2000)
      .attr('cx', XcircleStart)
      .attr('cy', YcircleStart)
      .attr('r', 15)
      .attr('fill', 'rgb(245, 143, 0)')
      .attr('stroke-width', "2")
      .attr('stroke', 'black');
    u.exit().remove();
var t = d3.select('#svg').selectAll('text').data(data);
    t.enter().append('text')
      .attr('x', xtext)
      .attr('y', ytext)
      .transition().delay(500)
      .text(function(d, i){return d;})
      .attr("font-family", "sans-serif")
      .attr("font-size", "0px")
      .attr("fill", "black")
      .transition().style("font-size","20px").duration(1000);
    t.transition()
      .duration(2000)
      .attr('x', xtext)
      .attr('y', ytext);
    t.exit().remove();
}

// Setting up circles
  // Ending X position
  var XcircleEnd = function (d, i) {
    if (i < 8) {
    return ((i + 1) * 35 + 105);
    }
    if ( i > 7    &&    i < 16 ) {
      return ((8*35+200)+(((i + 1)-9)+1)*35);
    }
    if ( i > 15    &&    i < 24 ) {
      return ((((i + 1)-17)+1)* 35 + 105);
    }
    if ( i > 23    &&    i < 32 ) {
      return ((8*35+200)+(((i + 1)-25)+1)*35);
    }
    if ( i > 31    &&    i < 40 ) {
      return ((((i + 1)-33)+1)* 35 + 105);
    }
    if ( i > 39    &&    i < 48 ) {
      return ((8*35+200)+(((i + 1)-41)+1)*35);
    }
    if ( i > 47    &&    i < 56 ) {
      return (((i-48)+1)* 35 + 105);
    }
    else {
      return ((8*35+200)+((i-56)+1)*35);
    }
    };
    // Ending Y position
  var YcircleEnd = function (d,i){
    if (i < 16) {
      return 225;
    }
    if ( i > 15    &&    i < 32 ) {
      return 275;
    }
    if ( i > 31    &&    i < 48 ) {
      return 425;
    }
    else {
      return 475;
    }
    };

  // Setting up text
      // Ending X postion
    var xtextEnd =  function (d, i){
      if (i < 8) {
        return ((i + 1) * 35 + 105-5);
      }
      if ( i == 8 ) {
        return ((8*35+200)+(((i + 1)-9)+1)*35-6);
      }
      if ( i > 8    &&    i < 16 ) {
        return ((8*35+200)+(((i + 1)-9)+1)*35-12);
      }
      if ( i > 15    &&    i < 24 ) {
        return ((((i + 1)-17)+1)* 35 + 105-12);
      }
      if ( i > 23    &&    i < 32 ) {
        return ((8*35+200)+(((i + 1)-25)+1)*35-12);
      }
      if ( i > 31    &&    i < 40 ) {
        return ((((i + 1)-33)+1)* 35 + 105-12);
      }
      if ( i > 39    &&    i < 48 ) {
        return ((8*35+200)+(((i + 1)-41)+1)*35-12);
      }
      if ( i > 4   &&    i < 56 ) {
        return ((((i + 1)-49)+1)* 35 + 105-12);
      }
      else {
        return ((8*35+200)+(((i + 1)-57)+1)*35-12)
      }}
      // Ending Y position
    var ytextEnd = function (d, i){
      if (i < 16) {
        return (225+6);
      }
      if ( i > 15    &&    i < 32 ) {
        return (275+6);
      }
      if ( i > 31    &&    i < 48 ) {
        return (425+6);
      }
      else {
        return (475+6);
      }
    }

  var xTextEnd16 = function (d, i){
      if (i < 8) {
        return ((i+1) * 35-5+105);
      }
      if ( i == 8 ) {
        return ((8*35+200)+((i-8)+1)*35-6);
      }
      if ( i > 8    &&    i < 16 ) {
        return ((8*35+200)+((i-8)+1)*35-6);
      }
      if ( i == 16 ) {
        return (((i-16)+1)*35-6+105);
      }
      if ( i > 15    &&    i < 24 ) {
        return (((i-16)+1)*35-12+105);
      }
      if ( i == 24 ) {
        return (((i-23)+1)*35+440);
      }
      if ( i > 24    &&    i < 32 ) {
        return ((8*35+200)+((i-24)+1)*35-12);
      }
// 1-8 bottom left
      if ( i > 31    &&    i < 40 ) {
        return (((i-32)+1)*35-5+105);
      }
// 1-8 bottom right
      if ( i > 39    &&    i < 48 ) {
        return ((8*35+200)+((i-40)+1)*35-6);
      }
      if (i == 48){
        return (((i-48)+1)*35-6+105);
      }
      if ( i > 47    &&    i < 56 ) {
        return (((i-48)+1)*35-12+105);
      }
      if ( i == 56 ) {
        return (((i-55)+1)*35+440);
      }
  // 10-16 bottom right
      else {
        return ((8*35+200)+((i-56)+1)*35-12)
      }}

function update3(data){

  var u = d3.select('#svg').selectAll('circle').data(data);
    u.enter().append('circle')
    .transition()
    .duration(2000)
    .attr('r', 15)
    .attr('fill', 'rgb(245, 143, 0)')
    .attr('stroke-width', "2")
    .attr('stroke', 'black')
    .attr('cx', XcircleEnd)
    .attr('cy', YcircleEnd)
  ;
    u.transition()
      .duration(2000)
      .attr('cx', XcircleEnd)
      .attr('cy', YcircleEnd)
      // .attr('r', 15)
      ;
      // .attr('fill', 'orange')
      // .attr('stroke-width', "2")
      // .attr('stroke', 'black');
    u.exit().remove();



var t = d3.select('#svg').selectAll('text').data(data);
    t.enter().append('text')
    .text(function(d, i){return d;})
    .attr('x', xtextEnd)
    .attr('y', ytextEnd);

    t.transition()
      .duration(2000)
      .text(function(d, i){return d;})
      .attr('x', xtextEnd)
      .attr('y', ytextEnd)
      .attr("font-family", "sans-serif")
      .attr("font-size", "0px")
      .attr("fill", "black")
      .transition().style("font-size","20px").duration(2000);

    t.exit().remove();

// Set up the Region Labels
    d3.select('#svg').append('text')
        .text('East')
        .style('font-size','0px')
        .attr('class','shoutOut')
        .attr('x',230)
        .attr('y',190)
        .transition().duration(2000)
        .style("font-size","40px");

    d3.select('#svg').append('text')
        .text('West')
        .style('font-size','0px')
        .attr('class','shoutOut')
        .attr('x',590)
        .attr('y',190)
        .transition().duration(2000)
        .style("font-size","40px");

    d3.select('#svg').append('text')
        .text('North')
        .style('font-size','0px')
        .attr('class','shoutOut')
        .attr('x',230)
        .attr('y',400)
        .transition().duration(2000)
        .style("font-size","40px");

    d3.select('#svg').append('text')
        .text('South')
        .style('font-size','0px')
        .attr('class','shoutOut')
        .attr('x',590)
        .attr('y',400)
        .transition().duration(2000)
        .style("font-size","40px");

}
function update4(data){
  var u = d3.select('#svg').selectAll('circle').data(data);
  u.transition()
  // .duration(2000)
  .attr('r', 15)
  .attr('fill', 'rgb(245, 143, 0)')
  .attr('stroke-width', "2")
  .attr('stroke', 'black')
  .attr('cx', XcircleEnd)
  .attr('cy', YcircleEnd)
  .style('opacity', 1);
 u.exit().remove();

// var t = d3.select('#svg').selectAll('text.shoutOut').data(data);

var t = d3.select('#svg').selectAll('text').data(data);
    t.transition().style("font-size","5px").duration(300)
    .transition().text(function(d, i){return d;})
    .attr('x', xTextEnd16)
    .attr('y', ytextEnd)
    .transition().style("font-size","20px").duration(300)
    .style('fill-opacity', 1);
    // t.exit().remove();
    // // Set up the explanation text
    //

    // Set up the Region Labels
        d3.select('#svg').append('text')
            .text('East')
            .style('font-size','0px')
            .attr('class','shoutOut')
            .attr('x',230)
            .attr('y',190)
            .style("font-size","40px");

        d3.select('#svg').append('text')
            .text('West')
            .style('font-size','0px')
            .attr('class','shoutOut')
            .attr('x',590)
            .attr('y',190)
            .style("font-size","40px");

        d3.select('#svg').append('text')
            .text('North')
            .style('font-size','0px')
            .attr('class','shoutOut')
            .attr('x',230)
            .attr('y',400)
            .style("font-size","40px");

        d3.select('#svg').append('text')
            .text('South')
            .style('font-size','0px')
            .attr('class','shoutOut')
            .attr('x',590)
            .attr('y',400)
            .style("font-size","40px");
}

function update5(data){
  var u = d3.select('#svg').selectAll('circle').data(data);
  // u.enter().append('circle')
  // .attr('r', 15)
  // .attr('fill', 'red')
  // .attr('stroke-width', "2")
  // .attr('stroke', 'black')
  // .attr('cx', XcircleEnd)
  // .attr('cy', YcircleEnd)
  // .style('opacity', 1);
    u.transition()
    .duration(1000)
    .attr('fill', 'rgb(245, 143, 0)')
    .attr('cx', XcircleEnd)
    .attr('cy', YcircleEnd)
    .style('opacity', function(d,i){
      if (i == 0){
        return 1;
      }
      if (i == 8){
        return 1;
      }
      if (i == 23){
        return 1;
      }
      if (i == 31){
        return 1;
      }
      if (i == 32){
        return 1;
      }
      if (i == 40){
        return 1;
      }
      if (i == 55){
        return 1;
      }
      if (i == 63){
        return 1;
      }
      else {
        return 0.2;
      }
    })
    ;

var t = d3.select('#svg').selectAll('text').data(data);
      t.enter().append('text')
      t.text(function(d, i){return d;})
      .transition()
      .duration(1000)
      .attr('x', xTextEnd16)
      .attr('y', ytextEnd)
      .style('fill-opacity', function(d,i){
        if (i == 0){
          return 1;
        }
        if (i == 8){
          return 1;
        }
        if (i == 23){
          return 1;
        }
        if (i == 31){
          return 1;
        }
        if (i == 32){
          return 1;
        }
        if (i == 40){
          return 1;
        }
        if (i == 55){
          return 1;
        }
        if (i == 63){
          return 1;
        }
        else {
          return 0.2;
        }
      })
      ;
    t.exit().remove();


// Set up the Region Labels
    d3.select('#svg').append('text')
        .text('East')
        .style('font-size','0px')
        .attr('class','shoutOut')
        .attr('x',230)
        .attr('y',190)
        .style("font-size","40px");

    d3.select('#svg').append('text')
        .text('West')
        .style('font-size','0px')
        .attr('class','shoutOut')
        .attr('x',590)
        .attr('y',190)
        .style("font-size","40px");

    d3.select('#svg').append('text')
        .text('North')
        .style('font-size','0px')
        .attr('class','shoutOut')
        .attr('x',230)
        .attr('y',400)
        .style("font-size","40px");

    d3.select('#svg').append('text')
        .text('South')
        .style('font-size','0px')
        .attr('class','shoutOut')
        .attr('x',590)
        .attr('y',400)
        .style("font-size","40px");
}

function update6(data){
  var u = d3.select('#svg').selectAll('circle').data(data);
    u.enter().append('circle');
    u.transition()
    .duration(2000)
    .attr('cx', function(d,i){
      if (i == 0){
        return 210;
      }
      else if (i == 8){
        return 583;
      }
      else if (i == 23){
        return 310;
      }
      else if (i == 31){
        return 688;
      }
      else if (i == 32){
        return 210;
      }
      else if (i == 40){
        return 583;
      }
      else if (i == 55){
        return 310;
      }
      else if (i == 63){
        return 688;
      }
    })
    .attr('cy', function (d,i){
      if (i == 0){
        return 448;
      }
      else if (i == 8){
        return 448;
      }
      else if (i == 23){
        return 448;
      }
      else if (i == 31){
        return 448;
      }
      else if (i == 32){
        return 652;
      }
      else if (i == 40){
        return 652;
      }
      else if (i == 55){
        return 652;
      }
      else if (i == 63){
        return 652;
      }
    })
    .style('opacity', function(d,i){
      if (i == 0){
        return 1;
      }
      if (i == 8){
        return 1;
      }
      if (i == 23){
        return 1;
      }
      if (i == 31){
        return 1;
      }
      if (i == 32){
        return 1;
      }
      if (i == 40){
        return 1;
      }
      if (i == 55){
        return 1;
      }
      if (i == 63){
        return 1;
      }
      else {
        return 0;
      }
    })
    u.exit().remove();
var t = d3.select('#svg').selectAll('text').data(data);
    t.enter().append('text')
    t.transition()
      .duration(2000)
      .attr('x', function(d,i){
      if (i == 0){
        return 205;
      }
      else if (i == 8){
        return 577;
      }
      else if (i == 23){
        return 298;
      }
      else if (i == 31){
        return 676;
      }
      else if (i == 32){
        return 205;
      }
      else if (i == 40){
        return 577;
      }
      else if (i == 55){
        return 298;
      }
      else if (i == 63){
        return 676;
      }
    })
    .attr('y', function (d,i){
      if (i == 0){
        return 454;
      }
      else if (i == 8){
        return 454;
      }
      else if (i == 23){
        return 454;
      }
      else if (i == 31){
        return 454;
      }
      else if (i == 32){
        return 659;
      }
      else if (i == 40){
        return 659;
      }
      else if (i == 55){
        return 659;
      }
      else if (i == 63){
        return 659;
      }
      })
      .transition()
      .duration(1000)
      .style('fill-opacity', function(d,i){
        if (i == 0){
          return 1;
        }
        if (i == 8){
          return 1;
        }
        if (i == 23){
          return 1;
        }
        if (i == 31){
          return 1;
        }
        if (i == 32){
          return 1;
        }
        if (i == 40){
          return 1;
        }
        if (i == 55){
          return 1;
        }
        if (i == 63){
          return 1;
        }
        else {
          return 0;
        }
      })
      ;
    t.exit().remove();

// Setting up the 'v' for versus
  d3.select('#svg').append('text').text('v')
  .transition().style("font-size","0px")
  .delay(1000)
  .attr('x',255)
  .attr('y', 452)
  .transition().style("font-size","20px").duration(800);

  d3.select('#svg').append('text').text('v')
  .transition().style("font-size","0px")
  .delay(1000)
  .attr('x',630)
  .attr('y', 452)
  .transition().style("font-size","20px").duration(800);

  d3.select('#svg').append('text').text('v')
  .transition().style("font-size","0px")
  .delay(1000)
  .attr('x',255)
  .attr('y', 655)
  .transition().style("font-size","20px").duration(800);

  d3.select('#svg').append('text').text('v')
  .transition().style("font-size","0px")
  .delay(1000)
  .attr('x',630)
  .attr('y', 655)
  .transition().style("font-size","20px").duration(800);

// Set up the Region Labels
var e = d3.select('#svg').append('text').text('East')
   e.attr('x',230)
    .attr('y',190)
    .style("font-size","40px");
   e.transition().duration(1800)
    .attr('x',230)
    .attr('y',400)
    .style("font-size","30px");

var w = d3.select('#svg').append('text').text('West');
      w.attr('x',590)
       .attr('y',190)
       .style("font-size","40px")
      w.transition().duration(1800)
        .attr('x',590)
        .attr('y',400)
        .style("font-size","30px");

var n = d3.select('#svg').append('text').text('North');
          n.attr('x',230)
           .attr('y',400)
           .style("font-size","40px");
         n.transition().duration(1800)
          .attr('x',220)
          .attr('y',610)
          .style("font-size","30px");

var s = d3.select('#svg').append('text').text('South');
        s.attr('x',590)
         .attr('y',400)
         .style("font-size","40px");
        s.transition().duration(1800)
         .attr('x',590)
         .attr('y',610)
         .style("font-size","30px");
}



  // Bar graphs
    var w = 200;
    var h = 200;

    // Number of Games X and Y Scales
    var xScaleNumGames = d3.scaleBand()
            .domain(d3.range(14))
            .range([0,810]);

    var xScaleSeeds = d3.scaleBand()
            .domain([1,2,3,4,5,6,7,8,9,10,11,12,13,16])
            .range([0,830]);


// Bar Graph of Number of games
function update7(){

  d3.select('#svg2').selectAll('circle').remove().exit();
  d3.select('#svg2').selectAll('text').remove().exit();
  d3.select('g#xAxis').html('');
  d3.select('g#yAxis').html('');

  var numGames = d3.csv("1seedsvAll.csv", rowConverter2, function(error,data) {
      console.log(data)

// Circle for 136 dots
  var circles16 = d3.range(136)

      d3.select('#svg2').selectAll('circle').data(circles16).enter().append('circle')
      .transition().duration(1000)
      .attr('cx', 838)
      .attr('cy', 44)
      .attr('r', '20')
      .attr('fill', 'orange')
      .attr('stroke-width', "1")
      .attr('stroke', 'black');

// Making the bars
      var u = d3.select('#svg2').selectAll('rect').data(data);
            u.enter()
            .append('rect')
            .attr('x',function(d,i){
              return (xScaleNumGames(i) + 60);
  // use xScale here
  // use an ordinal scale to use specific number for bottom of scale
            })
            .attr('y', function(d){
              return ((h - d.numberGames*4) + 400);
            })
            .transition().duration(700)
            .attr('width', 50)
            .attr('height', function(d){
              return (d.numberGames*4);
            })
            .attr("fill", "rgb(144, 125, 99)")
            ;
            u.exit().remove();

// Adding labels to Number of games
// Add new text
  var t = d3.select('#svg2').selectAll('text').data(data);
            t.enter().append('text')
            .attr('x', function(d,i){
              return xScaleNumGames(i) + 10 + 75;
            })
            .attr("text-anchor", "middle")
            .attr('y', function(d){
              return ((h - d.numberGames*4) + 395);
            })
            .text(function(d,i){
                          return (d.numberGames);})
            .attr('font-size', '0px')
            .attr('fill','black')
            .attr("font-family", 'san-serif')
            .transition().style("font-size","20px").duration(2000);
            // t.transition()
            // .attr('x', function(d,i){
            //   return xScaleNumGames(i) + 10 + 75;
            // })
            // .attr("text-anchor", "middle")
            // .attr('y', function(d){
            //   return ((h - d.numberGames*4) + 395);
            // })
            // .text(function(d,i){
            //               return (d.numberGames);})
            // .attr('font-size', '0px')
            // .attr('fill','black')
            // .attr("font-family", 'san-serif')
            // .transition().style("font-size","20px").duration(2000);
});

// Seeds X axis
      var xAxisNumGames = d3.axisBottom()
                            .scale(xScaleSeeds);
        d3.select('#xAxisFirstGraph')
              .attr('transform','translate(50,600)')
              .call(xAxisNumGames);
// Seeds X axis
      var xAxisNumGames = d3.axisBottom()
                            .scale(xScaleSeeds);

        d3.select('#xAxisFirstGraph')
              .attr('transform','translate(50,600)')
              .call(xAxisNumGames);

// Below the bar graph
d3.select('#svg2').append('text')
.text('The seeds that play against the #1 seed')
.style("font-size","0px")
.attr('class','shoutOut')
.attr('x',275)
.attr('y', 650)
.transition().style("font-size","20px").duration(2000);

// Above the bar graph
d3.select('#svg2').append('text')
.text('The number of games each seed has played against a #1 seed...')
.style("font-size","0px")
.attr('class','shoutOut')
.attr('x',75)
.attr('y', 150)
.transition().style("font-size","20px").duration(2000);

}

// All games Scatterplot
  function update8() {

    d3.select('#svg2').selectAll('rect').remove().exit();
    d3.select('#svg2').selectAll('text').remove().exit();

 // Label for the x-axis
    d3.select('#svg2').append('text')
    .text('Winning Team Score')
    .style("font-size","0px")
    .attr('class','newShoutOut')
    .attr('x',400)
    .attr('y', 750)
    .transition().style("font-size","20px").duration(800);
    // var u = d3.select('#svg2').selectAll('circle').data([]);
    // u.exit().transition().duration(1000).attr("r", 0).remove();

  // Label for the y-axis
     d3.select('#svg2').append('text')
     .attr("transform", "rotate(-90)")
     .text('Losing Team Score')
     .style("font-size","0px")
     .attr('class','newShoutOut')
     .attr('x',40)
     .attr('y', 400)
     .transition().style("font-size","20px").duration(800);
     // var u = d3.select('#svg2').selectAll('circle').data([]);
     // u.exit().transition().duration(1000).attr("r", 0).remove();

    d3.csv("MarchMadness16v1.csv", rowConverter, function(error,data) {
      console.log(data);

      // x-Axis which is winning score score
            var maxWinningScore = d3.max(data, function(d){
              return d.Winning_Score;
            });
            var padding = 50;
            var xScale = d3.scaleLinear()
                  .domain([0, maxWinningScore + 10])
                  .range([padding,800]);
            // d3.select("#svg2")
                  // .attr("width", window.innerWidth)
                  // .attr("height", window.innerHeight);
            var xAxis = d3.axisBottom(xScale);
                  d3.select('g#xAxis')
                    .attr("transform", "translate(50, 700)")
                    .call(xAxis);
      // y-Axis which is the losing score
            var maxLosingScore = d3.max(data, function(d){
              return d.Losing_Score;
            });
            var yScale = d3.scaleLinear()
                  .domain([maxLosingScore + 14, 0])
                  .range([padding,700]);

            var yAxis = d3.axisLeft()
                        .scale(yScale);
                  d3.select('g#yAxis')
                    .attr("transform", "translate(100,0)")
                    .call(yAxis);
                d3.select('g#xAxisFirstGraph').html('');
// Making the Scatterplot
    var u = d3.select('#svg2').selectAll('circle').data(data)
              u.on("mouseenter", function(d){
                d3.select("#tooltip")
                  .style("display", "block")
                  .style("top","40px")
                  .style("left", "120px")
                  .text("Date: " + d.Date + "; Losing Team: " + "#" + d.Losing_Seed + " " + d.Loser +
                   "; Winning Team: " + "#"
                        + d.Winning_Seed + " " + d.Winner + "; Score: " + d.Losing_Score + " to " + d.Winning_Score);
              })
              .on("mouseleave", function(d){
                d3.select("#tooltip")
                .style("display", "none");
              })
              .transition()
              .duration(2000)
              .attr('cx', function(d,i){
                return xScale(d.Winning_Score);
              })
              .attr('cy', function(d){
                return yScale(d.Losing_Score);
              })
              .attr('r', 8)
              .attr('fill', function(d, i){
                if (d.Winning_Seed < 16){
                  return "rgb(245, 143, 0)";
                }
                else {
                  return "red";
                }
              })
              .attr('stroke-width', "1")
              .attr('stroke', 'black')
    // Setting up the Tooltip

              .attr('x', 200)
              .attr('y',200)

          });

        }


// All games Scatterplot
  function update9() {

// Delete all rects and text
d3.select('#svg2').selectAll('rect').remove().exit();
// d3.select('#svg2').selectAll('text').remove().exit();
d3.select('g#xAxisFirstGraph').html('');

// Label for the x-axis
   d3.select('#svg2').append('text')
   .text('Winning Team Score')
   .style("font-size","0px")
   .attr('class','newShoutOut')
   .attr('x',400)
   .attr('y', 750)
   .transition().style("font-size","20px").duration(800);
   // var u = d3.select('#svg2').selectAll('circle').data([]);
   // u.exit().transition().duration(1000).attr("r", 0).remove();

 // Label for the y-axis
    d3.select('#svg2').append('text')
    .attr("transform", "rotate(-90)")
    .text('Losing Team Score')
    .style("font-size","0px")
    .attr('class','newShoutOut')
    .attr('x',40)
    .attr('y', 400)
    .transition().style("font-size","20px").duration(800);
    // var u = d3.select('#svg2').selectAll('circle').data([]);
    // u.exit().transition().duration(1000).attr("r", 0).remove();

d3.csv("MarchMadness16v1.csv", rowConverter, function(error,data) {

// Making the Scatterplot
    var u = d3.select('#svg2').selectAll('circle').data(data);
              u.transition()
              .duration(2000)
              .attr('r', function(d, i){
                if (d.Winning_Seed < 16){
                  return 8;}
                else  if (d.Winning_Seed == 16){
                    return 50;}
                })
              .attr('cx', function(d,i){
                return xScale(d.Winning_Score);
              })
              .attr('cy', function(d){
                return yScale(d.Losing_Score);
              })

              .attr('fill', function(d, i){
                if (d.Winning_Seed < 16){
                  return "rgb(245, 143, 0)";
                }
                else {
                  return "red";
                }
              })
              .attr('stroke-width', "1")
              .attr('stroke', 'black')
        })}

// Percent of games bar chart
function update10(){

  d3.csv("1seedsvAll.csv", rowConverter2, function(error,data) {
      console.log(data)

// Delete all rects and text
d3.select('#svg2').selectAll('rect').remove().exit();
d3.select('#svg2').selectAll('text').remove().exit();
// Remove the scatterplot axis
d3.select('g#xAxis').html('');
d3.select('g#yAxis').html('');

// Circle for 128 text
  var circles16 = d3.range(136);

  var c = d3.select('#svg2').selectAll('circle').data(circles16);
    c.enter().append('circle')
    .attr('cx', 828)
    .attr('cy',360)
    .attr('r', '20')
    .attr('fill', 'orange')
    .attr('stroke-width', "1")
    .attr('stroke', 'black');
    c.transition()
    .duration(1000)
    .attr('cx', 828)
    .attr('cy',360)
    .attr('r', '20')
    .attr('fill', 'orange')
    .attr('stroke-width', "1")
    .attr('stroke', 'black');


// Add new Bars
  var u = d3.select('#svg2').selectAll('rect').data(data);
      u.enter()
      .append('rect')
      .attr('x',function(d,i){
        return xScaleNumGames(i)+50;
      })
      .attr('y', function(d){
        return (h - d.percentPoints * 400)+400;
      })
      // .attr('width', w / data.length - barPadding)
      .transition().duration(2000)
      .attr('width', 50)
      .attr('height', function(d){
        return (d.percentPoints * 400);
      })
      .attr("fill", "rgb(144, 125, 99)");

// Add the exit and update, but not the enter
var t = d3.select('#svg2').selectAll('text').data(data);
          t.enter().append('text')
          .attr('x',function(d,i){
            return xScaleNumGames(i) + 2+65;
          })
          .attr('y', function(d){
            return (h - d.percentPoints * 400) + 395;
          })
          .text(function(d,i){
              return Math.round(d.percentPoints * 100);
          })
          .attr('font-size', '0px')
          .attr('fill','black')
          .attr("font-family", 'san-serif')
          .transition().style("font-size","20px").duration(2000);

          // Below the bar graph
          d3.select('#svg2').append('text')
          .text('The seeds that play against the #1 seed')
          .style("font-size","0px")
          .attr('class','shoutOut')
          .attr('x',275)
          .attr('y', 650)
          .transition().style("font-size","20px").duration(2000);

          // Above the bar graph
          d3.select('#svg2').append('text')
          .text('For every 100 points the #1 seed scores, the opposing team scores this many...')
          .style("font-size","0px")
          .attr('class','shoutOut')
          .attr('x',75)
          .attr('y', 150)
          .transition().style("font-size","20px").duration(2000);

// Seeds X axis
      var xAxisNumGames = d3.axisBottom()
                            .scale(xScaleSeeds);

        d3.select('#xAxisFirstGraph')
              .attr('transform','translate(30,600)')
              .call(xAxisNumGames);
  });
}

function update11(){
  d3.select('#svg2').selectAll('rect').remove().exit();
  d3.select('#svg2').selectAll('text').remove().exit();
  d3.select('#svg2').selectAll('circle').remove().exit();
  // Remove the scatterplot axis
  d3.select('g#xAxisFirstGraph').html('');

  d3.select('#svg2').append('text')
    .text('the #16 seeds now have a 1 game winning streak.')
    .attr('x', 75)
    .attr('y', 300)
    .attr('class','winStreak')
    .transition()
    .duration(3000)
    .attr('y', 700);
}
