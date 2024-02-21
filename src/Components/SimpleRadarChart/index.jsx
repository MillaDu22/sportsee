import './SimpleRadarChart.css';
import React, { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { getUserPerformance } from '../../Services/DataMock';

export default function SimpleRadarChart() {
    const [ performanceData, setPerformanceData ] = useState([]);
    useEffect(() => {
        const fetchUserPerformanceData = async () => {
            try {
                const params = new URLSearchParams( window.location.search );
                let userId = params.get( 'user') ?? 12;
                userId = parseInt( userId );
                const userData = getUserPerformance( userId );
                const formattedData = userData.data.map( item => ({
                    kind: userData.kind[ item.kind ],
                    performance: item.value
                }));
                setPerformanceData( formattedData );
            } catch ( error ) {
                console.error( 'Erreur lors de la récupération des données de performance de l\'utilisateur :', error );
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

