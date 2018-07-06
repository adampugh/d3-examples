import React, { Component } from "react";
import * as d3 from "d3";

import dataSet from "../data/dataSet1";

import "../styles/basic2.css";

class Basic2 extends Component {
    componentDidMount() {
        d3.select(".basic2__buttonBox")
            .selectAll("span") // will be empty as no p tags at present
            .data(dataSet) // this puts data into the waiting state for processing
            .enter() // will take each datum one by one
            .append("button")
            .attr("class", "btn-blue")
            .text((d, i) => `Value ${i + 1}:${d}`);

        d3.select("#basic2")
            .append("hr")
            .attr("class", "hr-style")
    }

    render() {
        return (
            <section id="basic2">
                <h1 className="heading">Basic 2 - Mapping Data</h1>
                <code>
                    <p>d3.select(".basic2__buttonBox").selectAll("p") <span className="comment"> / / will be empty as no p tags present</span></p>
                    <p>.data(dataSet) <span className="comment"> / / puts data into waiting state</span></p>
                    <p>.enter() <span className="comment"> / / will take each datum one by one</span></p>
                    <p>.append("button").attr("class", "btn-blue")</p>
                    <p>.text((d, i) => "Value " + (i + 1) + d) <span className="comment"> / / updates button text</span></p>
                </code>
                <div className="basic2__buttonBox"></div>
            </section>
        )
    }
}

export default Basic2;