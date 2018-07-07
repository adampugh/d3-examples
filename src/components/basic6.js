import React, { Component } from "react";
import * as d3 from "d3";


class Basic6 extends Component {
    componentDidMount() {
        var svgWidth = 500, svgHeight = 300;
        var svg = d3.select(".bar-chart-4")
            .attr("width", svgWidth)
            .attr("height", svgHeight)
            .attr("class", "svg-container");

        var line = svg.append("line")
            .attr("x1", 50)
            .attr("x2", 400)
            .attr("y1", 50)
            .attr("y2", 50)
            .attr("stroke", "pink")
            .attr("stroke-width", 5);

        var rect = svg.append("rect")
            .attr("x", 50)
            .attr("y", 100)
            .attr("width", 200)
            .attr("height", 100)
            .attr("fill", "#9895FF");

        var circle = svg.append("circle")
            .attr("cx", 400)
            .attr("cy", 200)
            .attr("r", 80)
            .attr("fill", "#f7f7f7");
    }

    render() {
        return (
            <section>
                <h1 className="heading">Basic 6 - SVG</h1>
                <svg className="bar-chart-4"></svg>
                <hr className="hr-style" />
            </section>
        )
    }
}

export default Basic6;