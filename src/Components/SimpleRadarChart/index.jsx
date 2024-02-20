import './SimpleRadarChart.css';
import React, { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { USER_PERFORMANCE } from '../../Services/DataMock';

export default function SimpleRadarChart() {
    const [ performanceData, setPerformanceData ] = useState([]);
    useEffect(() => {
        // Fetch performance data Cecilia //
        const fetchUserPerformanceData = async () => {
            const userData = USER_PERFORMANCE.find( user => user.userId === 18 );
            if (userData) {
                setPerformanceData(userData.data.map( item => ({
                    kind: userData.kind[ item.kind ],
                    performance: item.value
                })));
            }
        };
        fetchUserPerformanceData();
    }, []);
    return (
        <div className="container-simple-radar-chart">
            <ResponsiveContainer width = "100%" height = "100%">
                <RadarChart outerRadius ={ 70 }  data = { performanceData }>
                    <PolarGrid radialLines = { false }/>
                    <PolarAngleAxis dataKey = "kind" stroke = "white" tickLine = { false } fontSize = { 12 } />
                    <Radar name = "performance" dataKey = "performance" stroke = "#FF0101" fill = "#FF0101" fillOpacity = { 0.7 } />
                </RadarChart>
            </ResponsiveContainer>
        </div>    
    );
}

