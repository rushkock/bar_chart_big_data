function makeBar(xdata, ydata){

// set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 100, left: 40},
    width =   1000000,
    height = 700 - margin.top - margin.bottom;

// set the ranges
var x = d3.scaleBand()
    .range([0, width])
    .padding(0.5);

var y = d3.scaleLinear()
          .range([height, 0]);

// append the svg object to the body of the page
// append a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");



  // Scale the range of the data in the domains
  x.domain(xdata.map(function(d) {
    return d; }));
  y.domain([0, d3.max(ydata, function(d) { return d; })]);

  // append the rectangles for the bar chart
  svg.selectAll(".bar")
      .data(ydata)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d,i) { return x(xdata[i]); })
      .attr("width", x.bandwidth())
      .attr("y", function(d,i) { return y(d); })
      .attr("height", function(d) { return height - y(d);});

  // add the x Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-65)");

  // add the y Axis
  svg.append("g")
      .call(d3.axisLeft(y));

}
