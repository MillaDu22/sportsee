import './RadialBarChart.css';
import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar} from 'recharts';

const data = [
    {
        name: 'unknow',
        uv: 100,
        pv: 4800,
        fill: 'white',
    },
    {
        name: 'unknow',
        uv: 12,
        pv: 4800,
        fill: '#FF0000',
    },
];

export default class Example extends PureComponent {
    render() {
        return (
            <div className ="container-radial-bar-chart">
                <RadialBarChart 
                    width={730} 
                    height={250} 
                    innerRadius="10%" 
                    outerRadius="80%" 
                    data={data} 
                    startAngle={360} 
                    endAngle={0}
                    className = "radial-bar"
                >
                <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
                </RadialBarChart>
            </div>
        );
    }
}