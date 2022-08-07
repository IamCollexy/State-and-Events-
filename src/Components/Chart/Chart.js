import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
const Maximum = Math.max(...dataPointValues );

return(<div className="chart">
    {props.dataPoints.map((dataPoint) => (
            <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={Maximum}
            label={dataPoint.label}
           
            />
    ))}
</div>
);
}
export default Chart 