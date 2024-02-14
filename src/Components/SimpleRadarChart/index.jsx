import './SimpleRadarChart.css';
import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis} from 'recharts';

const data = [
    {
    subject: 'Intensité',
    A: 120,
    B: 110,
    fullMark: 150,
    },
    {
    subject: 'Vitesse',
    A: 98,
    B: 130,
    fullMark: 150,
    },
    {
    subject: 'Force',
    A: 86,
    B: 130,
    fullMark: 150,
    },
    {
    subject: 'Endurance',
    A: 99,
    B: 100,
    fullMark: 150,
    },
    {
    subject: 'Energie',
    A: 85,
    B: 90,
    fullMark: 150,
    },
    {
    subject: 'Cardio',
    A: 65,
    B: 85,
    fullMark: 150,
    },
];

export default class SimpleRadarChart extends PureComponent {
    render() {
        return (
            <div className="container-simple-radar-chart">
                <RadarChart className ="radar-chart" outerRadius={90} width={730} height={250} data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} />
                    <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                </RadarChart>
            </div>    
        );
    }
}
