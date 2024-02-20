import './TinyLineChart.css';
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        day: 'L',
        sessionLength: 30,
    },
    {
        day: 'M',
        sessionLength: 40,
    },
    {
        day: 'M',
        sessionLength: 50,
    },
    {
        day: 'J',
        sessionLength: 30,
    },
    {
        day: 'V',
        sessionLength: 30,
    },
    {
        day: 'S',
        sessionLength: 50,
    },
    {
        day: 'D',
        sessionLength: 50,
    },
];

export default class Example extends PureComponent {
    render() {
        return (
            <div className = "container-tiny-line-chart">
                <h3 className = "title-tiny-line-chart">Durée moyenne des sessions</h3>
                <ResponsiveContainer width = "100%" height = "100%">
                    <LineChart margin = {{ bottom: 90, left: 15, right:15 }} data = { data } width = "100%">
                        <Line type = "monotone" dataKey = "sessionLength" stroke = "#ffffff7f" strokeWidth = { 2.5 } dot = { false } />
                        <XAxis dataKey = "day" stroke = "#ffffff7f" width = "100%" tickLine = { false } axisLine = { false }/>
                        <Tooltip cursor = {false} wrapperStyle= {{ outline: "none", fontWeight: 500, color: "black" }}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
