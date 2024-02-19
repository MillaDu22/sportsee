import './RadialBarChart.css';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Score',
        uv: 15,
    }
];

export default class Example extends PureComponent {
    render() {
        return (
            <div className = "container-radial-bar-chart">
                <h3 className = "title-pie-chart">Score</h3>
                <p className = "objectif-score">12% de votre objectif</p>
                <ResponsiveContainer height = "100%" width = "100%">
                    <PieChart width = { 130 } height = { 130 } margin = {{ bottom: 35, top: -35 }}>
                        <Pie data = { data } dataKey = "uv"  startAngle = { 90 } endAngle = { 180 } innerRadius = { "60%"} outerRadius = { "70%" } cornerRadius ={ 10 } >
                            <Cell fill = "red" cornerRadius = "50%"/>
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        );
    }
}