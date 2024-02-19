import './SimpleRadarChart.css';
import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const data = [
    {
        kind: 'Intensité',
        performance: 120,
        fullMark: 150,
    },
    {
        kind: 'Vitesse',
        performance: 98,
        fullMark: 150,
    },
    {
        kind: 'Force',
        performance: 86,
        fullMark: 150,
    },
    {
        kind: 'Endurance',
        performance: 99,
        fullMark: 150,
    },
    {
        kind: 'Energie',
        performance: 85,
        fullMark: 150,
    },
    {
        kind: 'Cardio',
        performance: 65,
        fullMark: 150,
    },
];

export default class SimpleRadarChart extends PureComponent {
    render() {
        return (
            <div className="container-simple-radar-chart">
                <ResponsiveContainer width = "100%" height = "100%">
                    <RadarChart outerRadius ={ 70 }  data = { data }>
                        <PolarGrid radialLines = { false }/>
                        <PolarAngleAxis dataKey = "kind" stroke = "white" tickLine = { false } fontSize = { 12 } />
                        <Radar name = "performance" dataKey = "performance" stroke = "#FF0101" fill = "#FF0101" fillOpacity = { 0.7 } />
                    </RadarChart>
                </ResponsiveContainer>
            </div>    
        );
    }
}
