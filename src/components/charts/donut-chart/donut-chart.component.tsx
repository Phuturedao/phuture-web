import "./donut-chart.scss";

import * as d3 from "d3";

import React, { FunctionComponent, useEffect, useRef } from "react";

const DonutChart: FunctionComponent = () => {
  const chartRef: any = useRef(null);

  useEffect(() => {
    let width: number = 80;
    let height: number = 80;
    let margin: number = 1;

    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    let radius: number = Math.min(width, height) / 2 - margin;
    // append the svg object to the div called 'my_dataviz'
    const svg: any = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Create dummy data
    const data: any = { a: 6, b: 3, c: 3 };

    // set the color scale
    const color = d3
      .scaleOrdinal()
      .domain(data)
      .range(["#0092CC", "#33C5FF", "#99E2FF"]);

    // Compute the position of each group on the pie:
    const pie = d3.pie().value((d: any) => {
      return d.value;
    }) as any;

    const data_ready = pie(d3.entries(data));

    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    svg
      .selectAll("whatever")
      .data(data_ready)
      .enter()
      .append("path")
      .attr(
        "d",
        d3
          .arc()
          .innerRadius(radius - 10) // This is the size of the donut hole
          .outerRadius(radius)
      )
      .attr("fill", (d: any) => {
        return color(d.data.key);
      })
      .attr("stroke", "white")
      .style("stroke-width", "2px")
      .style("opacity", 1);
  }, []);

  return (
    <div className="donut-chart">
      <div ref={chartRef}></div>
    </div>
  );
};

export default DonutChart;
