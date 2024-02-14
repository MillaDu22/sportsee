import './TinyLineChart.css';
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'L',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'M',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'M',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'J',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'V',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'S',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'D',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

export default class Example extends PureComponent {
    render() {
        return (
            <div className ="container-tiny-line-chart">
                <h3 className="title-tiny-line-chart">Durée moyenne des sessions</h3>
                <LineChart width={300} height={100} data={data}>
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                    <XAxis dataKey="name" />
                </LineChart>
            </div>
        );
    }
}
