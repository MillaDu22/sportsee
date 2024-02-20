import './PieBarChart.css';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Score',
        score: 30,
    }
];
const data01 = [
    { name: 'Group A', value: 2400 },
]

export default class Example extends PureComponent {
    render() {
        return (
            <div className = "container-pie-bar-chart">
                <h3 className = "title-pie-chart">Score</h3>
                <h4 className = "percentage-score">30%</h4><p className = "objectif-score">de votre objectif</p>
                <ResponsiveContainer height = "100%" width = "100%">
                    <PieChart width = { 130 } height = { 130 } margin = {{ bottom: 35, top: -35 }} fill="#8884d8">
                    <Pie data = { data01 } dataKey = "value" cx = "50%" cy = "50%" outerRadius = {70} fill = "white" isAnimationActive = { false } />
                        <Pie data = { data } dataKey = "score"  startAngle = { 180 } endAngle = { 72 } innerRadius = { "60%"} outerRadius = { "70%" } cornerRadius ={ 10 } >
                            <Cell fill = "red" cornerRadius = "50%"/>
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        );
    }
}