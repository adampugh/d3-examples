import React, { Component } from "react";
import * as d3 from "d3";

// import dataSet from "../data/dataSet1";

class Basic3 extends Component {
    componentDidMount() {
        var dataSet = [80, 100, 56, 120, 100, 30, 40, 120, 160];
        // var dataSet = [1, 2, 3, 4, 5];


        var svgWidth = 500, svgHeight = 300, barPadding = 5;
        var barWidth = (svgWidth / dataSet.length);
        
        // var yScale = d3.scaleLinear()
        //     .domain([0, d3.max(dataSet)])
        //     .range([0, svgHeight])

        // builds svg background
        var svg = d3.select(".bar-chart")
            .attr("width", svgWidth)
            .attr("height", svgHeight);
        
        // scales - for scaling data for graph
        
        
        
        // adds bars
        var barChart = svg.selectAll("rect")
            .data(dataSet)
            .enter()
            .append("rect")
            .attr("class", "rect-1")
            .attr("y", function(d) { // places at the bottom of graph
                return svgHeight - d
            }) 
            .attr("height", function(d) { // sets height from data
                return d;
            })
            .attr("width", barWidth - barPadding)
            .attr("transform", function(d, i) { // moves data along each iteration
                var translate = [barWidth * i, 0];
                return "translate(" + translate + ")";
            });
        
        // adds labels
        var text = svg.selectAll("text")
            .data(dataSet)
            .enter()
            .append("text")
            .text(function(d) {
                return d;
            })
            .attr("y", function(d, i) {
                return svgHeight - d - 8;
            })
            .attr("x", function(d, i) {
                return barWidth * i;
            })
            .attr("fill", "#f7f7f7")

        

    }
    
    render() {
        return (
            <section id="basic3">
                <h1 className="heading">Basic 3 - Bar Chart</h1>
                <svg className="bar-chart"></svg>
                <hr className="hr-style" />
            </section>
        )
    }
}

export default Basic3;