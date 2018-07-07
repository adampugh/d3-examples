import React, { Component } from "react";
import * as d3 from "d3";

class Basic5 extends Component {
    componentDidMount() {
        var data = [80, 100, 56, 120, 180, 30, 40, 120, 160];
        
        var svgWidth = 500, svgHeight = 300;
        
        var svg3 = d3.select(".bar-chart-3")
            .attr("width", svgWidth)
            .attr("height", svgHeight)

        var xScale = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([0, svgWidth]);

        var yScale = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([svgHeight, 0]);
        
        var x_axis = d3.axisBottom().scale(xScale);
        var y_axis = d3.axisLeft().scale(yScale);

        svg3.append("g")
            .attr("transform", "translate(50, 10)")
            .call(y_axis);
        
        var xAxisTranslate = svgHeight - 20;

        svg3.append("g")
            .attr("transform", "translate(50, " + xAxisTranslate + ")")
            .call(x_axis);
        
    }

    render() {
        return (
            <section id="basic5">
                <h1 className="heading">Basic 5 - Axes</h1>
                <svg className="bar-chart-3"></svg>
                <hr className="hr-style" />
            </section>
        )
    }
}

export default Basic5;