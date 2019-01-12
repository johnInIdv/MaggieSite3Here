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
        .attr('stroke', 'black')

    // u  .transition()
    //   .duration(2000).exit()
    //
    // .remove()
  }
}
// End of Collision Detection

function update2(data){
  simulation.stop();
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
        if (d < 17) {
          return 250;
        }
        if ( d > 16    &&    d < 33 ) {
          return 350;
        }
        if ( d > 32    &&    d < 49 ) {
          return 450;
        }
        else {
          return 550;
        }
      }
// / Setting up the text
      // Starting X position
    var xtext =  function (d, i){
      if (d < 10) {
        return ((d * 35)-6 + 125);
      }
      if ( d > 9    &&    d < 17 ) {
        return ((d * 35)-11 + 125);
      }
      if ( d > 16    &&    d < 33 ) {
        return ((((d-17)+1)*35)-11 + 125);
      }
      if ( d > 32    &&    d < 49 ) {
        return ((((d-33)+1)*35)-11 + 125);
      }
      else {
        return ((((d-49)+1)*35)-11 + 125);
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
  var u = d3.select('#svg').selectAll('circle').data(data);
    u.enter().append('circle')
    u.transition()
      .duration(2000)
      .attr('cx', XcircleStart)
      .attr('cy', YcircleStart)
      .attr('r', 15)
      // .attr('fill', 'url(#img1)')
      .attr('stroke-width', "2")
      .attr('stroke', 'black');
    u.exit().remove();
var t = d3.select('#svg').selectAll('text').data(data);
    t.enter().append('text')
      .transition()
      .delay(1800)
      .attr('x', xtext)
      .attr('y', ytext)
      .text(function(d, i){return d;})
      .attr("font-family", "sans-serif")
      .attr("font-size", "20px")
      .attr("fill", "black")
      ;
    t.exit().remove();
}
function update3(data){
// Setting up circles
  // Ending X position
  var XcircleEnd = function (d, i) {
    if (d < 9) {
    return (d * 35 + 105);
    }
    if ( d > 8    &&    d < 17 ) {
      return ((8*35+200)+((d-9)+1)*35);
    }
    if ( d > 16    &&    d < 25 ) {
      return (((d-17)+1)* 35 + 105);
    }
    if ( d > 24    &&    d < 33 ) {
      return ((8*35+200)+((d-25)+1)*35);
    }
    if ( d > 32    &&    d < 41 ) {
      return (((d-33)+1)* 35 + 105);
    }
    if ( d > 40    &&    d < 49 ) {
      return ((8*35+200)+((d-41)+1)*35);
    }
    if ( d > 48    &&    d < 57 ) {
      return (((d-49)+1)* 35 + 105);
    }
    else {
      return ((8*35+200)+((d-57)+1)*35);
    }
    };
    // Ending Y position
  var YcircleEnd = function (d, i){
    if (d < 17) {
      return 225;
    }
    if ( d > 16    &&    d < 33 ) {
      return 275;
    }
    if ( d > 32    &&    d < 49 ) {
      return 425;
    }
    else {
      return 475;
    }
    };



    // Setting up text
        // Ending X postion
      // var xtextEnd =  function (d, i){
      //   if (i < 8) {
      //     return ((i + 1) * 35 + 105-5);
      //   }
      //   if ( i == 8 ) {
      //     return ((8*35+200)+(((i + 1)-9)+1)*35-6);
      //   }
      //   if ( i > 8    &&    i < 16 ) {
      //     return ((8*35+200)+(((i + 1)-9)+1)*35-12);
      //   }
      //   if ( i > 15    &&    i < 24 ) {
      //     return ((((i + 1)-17)+1)* 35 + 105-12);
      //   }
      //   if ( i > 23    &&    i < 32 ) {
      //     return ((8*35+200)+(((i + 1)-25)+1)*35-12);
      //   }
      //   if ( i > 31    &&    i < 40 ) {
      //     return ((((i + 1)-33)+1)* 35 + 105-12);
      //   }
      //   if ( i > 39    &&    i < 48 ) {
      //     return ((8*35+200)+(((i + 1)-41)+1)*35-12);
      //   }
      //   if ( i > 4   &&    i < 56 ) {
      //     return ((((i + 1)-49)+1)* 35 + 105-12);
      //   }
      //   else {
      //     return ((8*35+200)+(((i + 1)-57)+1)*35-12)
      //   }}
      //   // Ending Y position
      // var ytextEnd = function (d, i){
      //   if (i < 16) {
      //     return (225+6);
      //   }
      //   if ( i > 15    &&    i < 32 ) {
      //     return (275+6);
      //   }
      //   if ( i > 31    &&    i < 48 ) {
      //     return (425+6);
      //   }
      //   else {
      //     return (475+6);
      //   }
      // }




// Setting up text
    // Ending X postion
  var xtextEnd =  function (d, i){
    if (d < 9) {
      return (d * 35 + 105-5);
    }
    if ( d == 9 ) {
      return ((8*35+200)+((d-9)+1)*35-6);
    }
    if ( d > 9    &&    d < 17 ) {
      return ((8*35+200)+((d-9)+1)*35-12);
    }
    if ( d > 16    &&    d < 25 ) {
      return (((d-17)+1)* 35 + 105-12);
    }
    if ( d > 24    &&    d < 33 ) {
      return ((8*35+200)+((d-25)+1)*35-12);
    }
    if ( d > 32    &&    d < 41 ) {
      return (((d-33)+1)* 35 + 105-12);
    }
    if ( d > 40    &&    d < 49 ) {
      return ((8*35+200)+((d-41)+1)*35-12);
    }
    if ( d > 48    &&    d < 57 ) {
      return (((d-49)+1)* 35 + 105-12);
    }
    else {
      return ((8*35+200)+((d-57)+1)*35-12)
    }}
    // Ending Y position
  var ytextEnd = function (d, i){
    if (d < 17) {
      return (225+6);
    }
    if ( d > 16    &&    d < 33 ) {
      return (275+6);
    }
    if ( d > 32    &&    d < 49 ) {
      return (425+6);
    }
    else {
      return (475+6);
    }
  }
  var u = d3.select('#svg').selectAll('circle').data(data);
    u.enter().append('circle')
    u.transition()
      .duration(2000)
      .attr('cx', XcircleEnd)
      .attr('cy', YcircleEnd)
      .attr('r', 15);
      // .attr('fill', 'orange')
      // .attr('stroke-width', "2")
      // .attr('stroke', 'black');
    u.exit().remove();
var t = d3.select('#svg').selectAll('text').data(data);
    t.enter().append('text')
    t.transition()
      .duration(2000)
      .attr('x', xtextEnd)
      .attr('y', ytextEnd)
      ;
    t.exit().remove();
}
function update4(data){
  d3.select('#svg').selectAll('text').data(data).exit().remove();
var t = d3.select('#svg').selectAll('text').data(data);
    t.enter().append('text')
    t.transition()
    .duration(2000)
    t.text(function(d, i){return d;})

    .attr('x', function (d, i){
        if (i < 8) {
          return (d * 35-5+105);
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
        }});
    t.exit().remove();
}
function update5(data){
  var u = d3.select('#svg').selectAll('circle').data(data);
    u.enter().append('circle')
    // u.transition()
    //   .duration(2000)
      u.attr('cx', function(d,i){
        if (i == 0){
          return 140;
        }
        else if (i == 1){
          return 515;
        }
        else if (i == 2){
          return 385;
        }
        else if (i == 3){
          return 760;
        }
        else if (i == 4){
          return 140;
        }
        else if (i == 5){
          return 515;
        }
        else if (i == 6){
          return 385;
        }
        else if (i == 7){
          return 760;
        }
      })
      .attr('cy', function (d,i){
        if (i == 0){
          return 225;
        }
        else if (i == 1){
          return 225;
        }
        else if (i == 2){
          return 275;
        }
        else if (i == 3){
          return 275;
        }
        else if (i == 4){
          return 425;
        }
        else if (i == 5){
          return 425;
        }
        else if (i == 6){
          return 475;
        }
        else if (i == 7){
          return 475;
        }
      })
    u.exit().remove();
var t = d3.select('#svg').selectAll('text').data(data);
    t.enter().append('text')
    t.attr('x', function(d,i){
        if (i == 0){
          return 135;
        }
        else if (i == 1){
          return 508;
        }
        else if (i == 2){
          return 373;
        }
        else if (i == 3){
          return 748;
        }
        else if (i == 4){
          return 135;
        }
        else if (i == 5){
          return 508;
        }
        else if (i == 6){
          return 373;
        }
        else if (i == 7){
          return 748;
        }
      })
      .attr('y', function (d,i){
        if (i == 0){
          return 232;
        }
        else if (i == 1){
          return 232;
        }
        else if (i == 2){
          return 282;
        }
        else if (i == 3){
          return 282;
        }
        else if (i == 4){
          return 432;
        }
        else if (i == 5){
          return 432;
        }
        else if (i == 6){
          return 482;
        }
        else if (i == 7){
          return 482;
        }
      })
      .text(function(d, i){return d;})
      ;
    t.exit().remove();
}

// Set up the 1 versus 16 match ups
function update6(data){
  var u = d3.select('#svg').selectAll('circle').data(data);
    u.enter().append('circle')
    u.transition()
    .duration(2000)
    .attr('cx', function(d,i){
      if (i == 0){
        return 210;
      }
      else if (i == 1){
        return 583;
      }
      else if (i == 2){
        return 310;
      }
      else if (i == 3){
        return 688;
      }
      else if (i == 4){
        return 210;
      }
      else if (i == 5){
        return 583;
      }
      else if (i == 6){
        return 310;
      }
      else if (i == 7){
        return 688;
      }
    })
    .attr('cy', function (d,i){
      if (i == 0){
        return 248;
      }
      else if (i == 1){
        return 248;
      }
      else if (i == 2){
        return 248;
      }
      else if (i == 3){
        return 248;
      }
      else if (i == 4){
        return 452;
      }
      else if (i == 5){
        return 452;
      }
      else if (i == 6){
        return 452;
      }
      else if (i == 7){
        return 452;
      }
    })
    var t = d3.select('#svg').selectAll('text').data(data);
        t.enter().append('text')
        t.transition()
          .duration(2000).attr('x', function(d,i){
          if (i == 0){
            return 205;
          }
          else if (i == 1){
            return 577;
          }
          else if (i == 2){
            return 298;
          }
          else if (i == 3){
            return 676;
          }
          else if (i == 4){
            return 205;
          }
          else if (i == 5){
            return 577;
          }
          else if (i == 6){
            return 298;
          }
          else if (i == 7){
            return 676;
          }
        })
        .attr('y', function (d,i){
          if (i == 0){
            return 254;
          }
          else if (i == 1){
            return 254;
          }
          else if (i == 2){
            return 254;
          }
          else if (i == 3){
            return 254;
          }
          else if (i == 4){
            return 459;
          }
          else if (i == 5){
            return 459;
          }
          else if (i == 6){
            return 459;
          }
          else if (i == 7){
            return 459;
          }
          })

          ;
        t.exit().remove();
    }



// All games Scatterplot
  function update7() {
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
                  .range([padding,500]);
            d3.select("#svg2")
                  // .attr("width", window.innerWidth)
                  // .attr("height", window.innerHeight);
            var xAxis = d3.axisBottom(xScale);
                  d3.select('g#xAxis')
                    .attr("transform", "translate(0, 500)")
                    .call(xAxis);
      // y-Axis which is the losing score
            var maxLosingScore = d3.max(data, function(d){
              return d.Losing_Score;
            });
            var yScale = d3.scaleLinear()
                  .domain([maxLosingScore + 10, 0])
                  .range([padding,500]);
            d3.select("#svg2")
                  // .attr("width", window.innerWidth)
                  // .attr("height", window.innerHeight);
            var yAxis = d3.axisLeft()
                        .scale(yScale);
                  d3.select('g#yAxis')
                    .attr("transform", "translate(50, 0)")
                    .call(yAxis);
// Making the Scatterplot
    var u = d3.select('#svg2').selectAll('circle').data(data);
             u.enter()
              .append('circle')
              .attr('cx', function(d,i){
                return xScale(d.Winning_Score);
              })
              .attr('cy', function(d){
                return yScale(d.Losing_Score);
              })
              .attr('r', function(d){
                if (d.Winning_Seed == 16){
                  return 4;
                }
                else {
                  return 4;
                };
              })
              .attr('fill', function(d, i){
                if (d.Winning_Seed < 16){
                  return "blue";
                }
                else {
                  return "red";
                }
              })

    // Setting up the Tooltip
              .on("mouseenter", function(d){
                d3.select("#tooltip")
                  .style("display", "block")
                  // .style("top","20px")
                  // .style("left", "20px")
                  .text("Date: " + d.Date + "; Losing Team: " + "#" + d.Losing_Seed + " " + d.Loser +
                   "; Winning Team: " + "#"
                        + d.Winning_Seed + " " + d.Winner + "; Score: " + d.Losing_Score + " to " + d.Winning_Score);
              })
              .on("mouseleave", function(d){
                d3.select("#tooltip")
                .style("display", "none");
              })
              // .exit().remove();
          });

        }

  // Bar graphs
    var barPadding = 3;
    var w = 200;
    var h = 200;

    // Number of Games X and Y Scales
    var xScaleNumGames = d3.scaleBand()
            .domain(d3.range(14))
            .range([0,400])
            .paddingInner(0.05);

    var xScaleSeeds = d3.scaleBand()
            .domain([1,2,3,4,5,6,7,8,9,10,11,12,13,16])
            .range([0,400])
            .paddingInner(0.05);

    var yScaleNumGames = d3.scaleLinear()
            .domain([0,140])
            .range([0,500])

// Bar Graph of Number of games
function update8(){
  var numGames = d3.csv("1seedsvAll.csv", rowConverter2, function(error,data) {
      console.log(data)

d3.select('#svg2').selectAll('circle').remove().exit()
// d3.select('#svg2').selectAll('xAxis').remove().exit()
// d3.select('yAxis').remove().exit();

  // Number of games X and Y axis
      var xAxisNumGames = d3.axisBottom()
                            .scale(xScaleSeeds);

        d3.select('#svg2').append('g')
              .attr('class','axis')
              .attr('class','axis7')
              .attr('transform','translate(95,400)')
                // .attr("transform", "translate(50, 0)")
              .call(xAxisNumGames);

      var u = d3.select('#svg2').selectAll('rect').data(data);
            u.enter()
            .append('rect')
            .attr('x',function(d,i){
              return (xScaleNumGames(i) + 100);
  // use xScale here
  // use an ordinal scale to use specific number for bottom of scale
            })
            .attr('y', function(d){
              return ((h - d.numberGames) + 200);
            })
            // .attr('width', w / data.length - barPadding)
            .attr('width', 20)
            .attr('height', function(d){
              return (d.numberGames);
            })
            // .attr('fill', function (d){
            //   return 'rgb (255,165, " + Math.round(d * 10) + ")';
            // })
            .attr("fill", "black")
            // .attr('fill','orange')
            ;
            u.exit().remove();
  // Adding labels to Number of games
d3.select('#svg2').selectAll('text').remove().exit();
  var textNumGames = d3.select('#svg2').selectAll('text').data(data).enter().append('text');

  var textNumGamesLabelTop = textNumGames

            .attr('x', function(d,i){
              return xScaleNumGames(i) + 10 + 100;
            })
            .attr("text-anchor", "middle")
            .attr('y', function(d){
              return (h - (d.numberGames + 2) + 200);
            })
            .text(function(d,i){
                          return (d.numberGames);})
            .attr('fill','white')
            .attr("font-family", 'san-serif')
            .attr('font-size', '15px');
            })

  // d3.select('#svg2').selectAll('rect').remove().exit();
}

// Percent of games bar chart
function update9(){
  d3.csv("1seedsvAll.csv", rowConverter2, function(error,data) {
      console.log(data)


      var xAxisNumGames = d3.axisBottom()
                            .scale(xScaleSeeds);

        // d3.select('#svg2').append('g')
        //       .attr('class','axis')
        //       .attr('transform','translate(-5,' + (h) + ')')
        //       .call(xAxisNumGames);



d3.select('#svg2').selectAll('rect').remove().exit();
d3.select('#svg2').selectAll('text').remove().exit();

  var u = d3.select('#svg2').selectAll('rect').data(data);
      u.enter()
      .append('rect')
      .attr('x',function(d,i){
        return xScaleNumGames(i)+100;
      })
      .attr('y', function(d){
        return (h - d.percentPoints * 100)+200;
      })
      // .attr('width', w / data.length - barPadding)
      .attr('width', 20)
      .attr('height', function(d){
        return (d.percentPoints * 100);
      });
// Add teh exit and update, but not the enter
var textPercentPoint = d3.select('#svg2').selectAll('text').data(data).enter().append('text');

var textPercentPointLabel = textPercentPoint
          // .attr('x', 200)
          // .attr('y', 200)
          .attr('x',function(d,i){
            return xScaleNumGames(i) + 2+100;
          })
          .attr('y', function(d){
            return (h - d.percentPoints * 100 - 3 +200);
          })
          .text(function(d,i){
              return Math.round(d.percentPoints * 100) + "%";
          })
          // .format(".0%")
          .attr('fill','white')
          .attr("font-family", 'san-serif')
          .attr('font-size', '11px');

  });
}
