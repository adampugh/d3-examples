import React, { Component } from "react";
import * as d3 from "d3";

class Basic8 extends Component {
    componentDidMount() {
        const api = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-12-31&end=2018-04-01';
    
        fetch(api)
            .then(function(response) { return response.json(); })
            .then(function(data) {
                var parsedData = parseData(data);
                drawChart(parsedData);
                console.log(parsedData);
            })
            .catch(function(err) { console.log(err); })
        
        // {date : "", value: 10 }
        function parseData(data) {
            var arr = [];
            for (var i in data.bpi) {
                arr.push({
                    date: new Date(i), //date
                    value: +data.bpi[i] //convert string to number
                });
            }
            return arr;
        }

        function drawChart(data) {
            var svgWidth = 600, svgHeight = 400;
            var margin = { top: 20, right: 20, bottom: 30, left: 50};
            var width = svgWidth - margin.left - margin.right;
            var height = svgHeight - margin.top - margin.bottom;

            var svg = d3.select(".line-chart")
                .attr("width", svgWidth)
                .attr("height", svgHeight)

            var g = svg.append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            // scales
            var x = d3.scaleTime()
                .rangeRound([0, width]);
            var y = d3.scaleLinear()
                .rangeRound([height, 0]);

            var line = d3.line()
                .x(d => x(d.date))
                .y(d => y(d.value))
            // lets d3 know of scope of the data
            x.domain(d3.extent(data, d => d.date));
            y.domain(d3.extent(data, d => d.value));

            g.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x))
                .select("domain")
                .remove()

            g.append("g")
                .call(d3.axisLeft(y))
                .append("text")
                .attr("fill", "#000")
                .attr("transform", "rotate(-90)")
                .attr("y", 6)
                .attr("dy", "0.71em")
                .attr("text-anchor", "end")
                .text("Price ($)");

            g.append("path")
                .datum(data)
                .attr("fill", "none")
                .attr("stroke", "steelblue")
                .attr("stoke-linejoin", "round")
                .attr("stroke-linecap", "round")
                .attr("stroke-width", 1.5)
                .attr("d", line);
        }
    
    }

    render() {
        return (
            <section>
                <h1 className="heading">Basic 8 - Line Chart</h1>
                <svg className="line-chart"></svg>
                <hr className="hr-style" />
            </section>
        )
    }
}

export default Basic8;