import './PieBarChart.css';
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { USER_MAIN_DATA } from '../../Services/DataMock';
import { getUserMainData } from '../../Services/DataMock';

const data = [
    {
        name: 'Score',
        score: 30,
    }
];

export default function PieBarChart() {
    const [ scorePercentage, setScorePercentage ] = useState(0);
    useEffect(() => {
        // Fetch data user Cecilia //
        const fetchUserMainData = async () => {
            const userData = USER_MAIN_DATA.find( user => user.id === 18 );
            if ( userData ) {
                setScorePercentage( userData.score * 100 );
            }
        };
        fetchUserMainData();
    }, []);
    return (
        <div className = "container-pie-bar-chart">
            <h3 className = "title-pie-chart">Score</h3>
            <h4 className = "percentage-score">{scorePercentage}%</h4><p className = "objectif-score">de votre objectif</p>
            <ResponsiveContainer height = "100%" width = "100%">
                <PieChart width = { 130 } height = { 130 } margin = {{ bottom: 35, top: -35 }} fill="#8884d8">
                <Pie dataKey = "value" cx = "50%" cy = "50%" outerRadius = { 70 } fill = "white" isAnimationActive = { false } />
                    <Pie data = { data } dataKey = "score"  startAngle = { 180 } endAngle = { 72 } innerRadius = { "60%"} outerRadius = { "70%" } cornerRadius ={ 10 }>
                        <Cell fill = "red" cornerRadius = "50%"  />
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
