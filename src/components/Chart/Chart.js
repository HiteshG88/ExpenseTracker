import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  // calculate the max of all the value in dataPoints array.
  const maxValueArr = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...maxValueArr);

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
