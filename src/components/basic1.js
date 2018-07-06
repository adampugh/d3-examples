import React, { Component } from "react";
import * as d3 from "d3";
import "../styles/basic1.css";
import dataSet from "../data/dataSet1";


class Basic1 extends Component {
    state = {
        dataSet: [12, 34, 55, 22, 65]
    }

    componentDidMount() {
        d3.select("h2").style("color", "#d283de")
            .attr("class", "heading")
            .text(" Basic 1 - Data Set")
            
        dataSet.map((v, i) =>
            d3.select("#chart1").append("button")
                .attr("class", "btn-grey")
                .text(`Value ${i + 1}:${v}`)
                .style("color", "grey")
        );

        d3.select("#chart1")
            .append("hr")
            .attr("class", "hr-style")
    }


    render() {
        return (
            <section id="chart1">
                <h2>Chart 1</h2>
            </section>
        )
    }
}

export default Basic1;
