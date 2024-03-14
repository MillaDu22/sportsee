import './SimpleRadarChart.css';
import React, { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { DataGet } from '../../Services/DataGet.js';
import { getUserData } from '../../Services/DataGet.js';
import PropTypes from 'prop-types';
import { UserPerformanceModel } from '../../Models/userPerformanceModel.js';

/**
 * Composant React représentant un graphique radar simple affichant les performances de l'utilisateur.
 * @returns {JSX.Element} - Élément JSX représentant le graphique radar des performances de l'utilisateur.
 */
export default function SimpleRadarChart() {
    const [performanceData, setPerformanceData] = useState([]);

    useEffect(() => {
        const fetchUserPerformanceData = async () => {
            try {
                const { userId, mock, dataType } = getUserData('USER_PERFORMANCE');
                const userData = await DataGet(dataType, userId, mock);

                checkUserPerformanceData(userData); // Appel de la fonction de validation //
                
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

    const checkUserPerformanceData = (data) => {
        // Vérifie si les données ne sont pas définies ou si des propriétés essentielles sont absentes //
        if (!data.data || !data.data.userId || !data.data.kind || !data.data.data || !Array.isArray(data.data.data)) {
            console.error("Données de performance utilisateur manquantes ou incorrectes :", data);
            return false;
        }
    
        // Vérifie le modèle global UserActivityModel //
        const globalValidation = PropTypes.checkPropTypes(UserPerformanceModel, data, 'data', 'checkUserPerformanceData');

        // Vérifie les types de données pour chaque session //
        const sessionsValidation = data.data.data.every(data => {
            return PropTypes.checkPropTypes({
                kind: PropTypes.number.isRequired,
                value: PropTypes.number.isRequired,
            }, data, 'data', 'checkUserPerformanceData');
        });

        // Si les deux validations sont réussies, retourne true, sinon retourne false //
        return globalValidation && sessionsValidation;
    };
    
    return (
        <div className="container-simple-radar-chart">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius={70} data={performanceData}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis dataKey="kind" stroke="white" tickLine={false} fontSize="12px" fontFamily ="Roboto" />
                    <Radar name="performance" dataKey="performance" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}




