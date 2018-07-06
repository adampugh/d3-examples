import React, { Component } from "react";
import * as d3 from "d3";

class Basic4 extends Component {
    componentDidMount() {
        var dataSet = [1, 2, 3, 4, 5]

        var svgWidth = 500, svgHeight = 300, barPadding = 5;
        var barWidth = (svgWidth / dataSet.length);

        var svg2 = d3.select(".bar-chart2")
            .attr("width", svgWidth)
            .attr("height", svgHeight);
    
        var yScale = d3.scaleLinear()
            .domain([0, d3.max(dataSet)])
            .range([0, svgHeight]);

        var barChart = svg2.selectAll("rect")
            .data(dataSet)
            .enter()
            .append("rect")
            .attr("class", "rect-1")
            .attr("y", function(d) {
                return svgHeight - d
            })
            .attr("height", function(d) {
                return d;
            })
            .attr("width", barWidth - barPadding)
            .attr("transform", function(d, i) { // moves data along each iteration
                var translate = [barWidth * i, 0];
                return "translate(" + translate + ")";
            });
    }


    render() {
        return (
            <section id="basic4">
                <h1 className="heading">Basic 4 - Scales</h1>
                <svg className="bar-chart2"></svg>
            </section>
        )
    }
}

export default Basic4;