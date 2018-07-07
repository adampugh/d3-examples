 import React, { Component } from "react";
 import * as d3 from "d3";

 class Basic7 extends Component {
    componentDidMount() {
        var data = [
            {"platform": "Android", "percentage": 40.11},
            {"platform": "Windows", "percentage": 36.69},
            {"platform": "Android", "percentage": 13.06}
        ];

        var svgWidth = 500, svgHeight = 300, radius = Math.min(svgWidth, svgHeight) / 2;
        var svg = d3.select(".pie-chart")
            .attr("width", svgWidth)
            .attr("height", svgHeight);

        // create group element to hold pie chart - transform to center of container
        var g = svg.append("g")
            .attr("transform", "translate(" + radius + "," + radius + ")");
        
        var color = d3.scaleOrdinal(d3.schemeCategory10);
        // makes pie chart - pass callback to data
        var pie = d3.pie().value(d => d.percentage);

        // will create arc elements
        var path = d3.arc()
            .outerRadius(radius)
            .innerRadius(0);
        
        var arc = g.selectAll("arc")
            .data(pie(data))
            .enter()
            .append("g");
        
        arc.append("path")
            .attr("d", path)
            .attr("fill", d => color(d.data.percentage));
    }

     render() {
         return (
            <section>
                <h1 className="heading">Basic 7 - Pie Chart</h1>
                <svg className="pie-chart"></svg>
                <hr className="hr-style" />
            </section>
         )
     }
 }

 export default Basic7;