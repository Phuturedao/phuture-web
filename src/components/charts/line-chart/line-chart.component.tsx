import "./line-chart.scss";

import * as d3 from "d3";

import React, { FunctionComponent, useEffect, useRef } from "react";
import { head, last, maxBy } from "lodash";

import { v4 as uuid } from "uuid";

type Props = {
  height?: number;
};

const LineChart: FunctionComponent<Props> = ({ height: _height }) => {
  const chartRef: any = useRef(null);

  useEffect(() => {
    let width: number = chartRef.current?.parentElement.offsetWidth || 500;
    let height: number = _height || 150;
    let margin: number = 30;

    const svg: any = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin + 10}, ${5})`);

    const data: Array<any> = [
      { price: 50, date: new Date("06/12/2019") },
      { price: 50, date: new Date("06/13/2019") },
      { price: 110, date: new Date("06/14/2019") },
      { price: 40, date: new Date("06/15/2019") },
      { price: 140, date: new Date("06/16/2019") },
      { price: 130, date: new Date("06/17/2019") },
      { price: 90, date: new Date("06/18/2019") },
      { price: 120, date: new Date("06/19/2019") },
    ];

    // Add X axis --> it is a date format
    const x = d3
      .scaleTime()
      .domain([head(data).date, last(data).date])
      .range([5, width]);

    svg
      .append("g")
      .attr("class", "axis-x")
      .attr("transform", `translate(${0}, ${height - margin})`)
      .call(d3.axisBottom(x).ticks(5));

    // Add Y axis
    const y = d3
      .scaleLinear()
      .domain([0, maxBy(data, "price").price + 10])
      .range([height - margin, 0]);

    svg
      .append("g")
      .attr("class", "axis-y")
      .call(
        d3
          .axisLeft(y)
          .ticks(4)
          .tickFormat((d: any) => `$${d}`)
      );

    // Add the line
    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#00A8E8")
      .attr("stroke-width", 1.5)
      .attr(
        "d",
        d3
          .line()
          .curve(d3.curveBasis)
          .x((d: any) => x(d.date))
          .y((d: any) => y(d.price))
      );

    const gradientId = `id${uuid()}`;

    //make defs and add the linear gradient
    const gradient = svg
      .append("defs")
      .append("linearGradient")
      .attr("id", gradientId)
      .attr("x1", "0%")
      .attr("x2", "0%")
      .attr("y1", "0%")
      .attr("y2", "100%"); //since its a vertical linear gradient
    gradient
      .append("stop")
      .attr("offset", "0%")
      .style("stop-color", "rgb(0, 168, 232)")
      .style("stop-opacity", 0.1);
    gradient
      .append("stop")
      .attr("offset", "100%")
      .style("stop-color", "white")
      .style("stop-opacity", 0.1);

    const area = d3
      .area()
      .curve(d3.curveBasis)
      .x((d: any) => x(d.date))
      .y0(height - margin)
      .y1((d: any) => y(d.price));

    svg
      .append("path")
      .datum(data)
      .attr("class", "area")
      .style("fill", `url(#${gradientId})`)
      .attr("d", area);
  });

  return (
    <div className="line-chart">
      <div ref={chartRef}></div>
    </div>
  );
};

export default LineChart;
