/*import './SimpleRadarChart.css';
import React, { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { UseApiMockSportSee } from '../../Services/UseApiMockSportSee';

export default function SimpleRadarChart() {
    const [performanceData, setPerformanceData] = useState([]);
    const useApiMockSportSee = new UseApiMockSportSee();
    useEffect(() => {
        const fetchUserPerformanceData = async () => {
            try {
                const params = new URLSearchParams(window.location.search);
                let userId = params.get('user') ?? 12;
                userId = parseInt(userId);
                const userData = useApiMockSportSee.getActivitiesById(userId);
                const formattedData = userData.map(item => ({
                    kind: item.activity,
                    performance: item.value
                }));
                setPerformanceData(formattedData);
            } catch (error) {
                console.error('Erreur lors de la récupération des données de performance de l\'utilisateur :', error);
            }
        };
        fetchUserPerformanceData();
    }, []);
    return (
        <div className="container-simple-radar-chart">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius={70} data={performanceData}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis dataKey="kind" stroke="white" tickLine={false} fontSize={12} />
                    <Radar name="performance" dataKey="performance" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}*/

import './SimpleRadarChart.css';
import React, { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { getUserPerformance } from '../../Services/UseApiSportSee'; 

export default function SimpleRadarChart() {
    const [performanceData, setPerformanceData] = useState([]);

    useEffect(() => {
        const fetchUserPerformanceData = async () => {
            try {
                const params = new URLSearchParams(window.location.search);
                let userId = params.get('user') ?? 12;
                userId = parseInt(userId);
                const userData = await getUserPerformance(userId);
                const kindData = userData.data.kind; // Récupére les noms des kinds à partir des data API //
                const performanceData = userData.data.data.map(item => ({
                    kind: kindData[item.kind], // Utilise l'objet kind pour obtenir le nom du kind //
                    performance: item.value
                }));
                setPerformanceData(performanceData);
            } catch (error) {
                console.error('Erreur lors de la récupération des données de performance de l\'utilisateur :', error);
            }
        };
        fetchUserPerformanceData();
    }, []);

    return (
        <div className="container-simple-radar-chart">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius={70} data={performanceData}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis dataKey="kind" stroke="white" tickLine={false} fontSize={12} />
                    <Radar name="performance" dataKey="performance" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}




