import './PieBarChart.css';
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer} from 'recharts';
import { DataGet } from '../../Services/DataGet.js';
import PropTypes from 'prop-types';
import { UserMainDataModel } from '../../Models/userMainDataModel.js';

/**
 * Composant React représentant un graphique circulaire affichant le score de l'utilisateur sous forme de pourcentage.
 * @returns {JSX.Element} - Élément JSX représentant le graphique circulaire du score de l'utilisateur.
 */
export default function PieBarChart() {
    const [scorePercentage, setScorePercentage] = useState(0);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Récupération de l'ID utilisateur depuis les paramètres de l'URL //
                const params = new URLSearchParams(window.location.search);
                const userId = parseInt(params.get('user') ?? 12);

                const mock = params.get('mock') === '1' ? true: false;
                const userData = await DataGet ('USER_MAIN_DATA', userId, mock);

                const scoreKey = userId === 12 ? 'todayScore' : 'score'; // Choix de la clé en fonction de l'ID utilisateur //
                checkUserMainData(userData.data); // Appel de la fonction de validation //
                // Obtention du score pourcentage en fonction de la clé choisie //
                const score = userData.data[scoreKey] ?? 0;
                setScorePercentage(score * 100);
            } catch (error) {
                console.error('Erreur lors de la récupération des données utilisateur :', error);
            }
        };
        fetchUserData();
    }, []);

    const startAngle = 180;
    const endAngle = startAngle - (360 * scorePercentage / 100); // Calcul de l'angle de fin en soustrayant le pourcentage du score à l'angle de début //

    const data = [
        {
            name: 'Score',
            score: scorePercentage,
        }
    ];

    // Fonction de validation des données score utilisateur via Prop-types model //
    const checkUserMainData = (data) => {
        if (!data || !data.id || !data.userInfos || !data.keyData || (!data.todayScore && data.todayScore !== 0 && !data.score && data.score !== 0)) {
            console.error("Données score utilisateur manquantes ou incorrectes");
            return;
        }
        // Vérifie que toutes les propriétés requises sont définies dans les données //
        if (data.id && data.keyData && data.userInfos && ((data.todayScore !== undefined && data.todayScore !== null) || (data.score !== undefined && data.score !== null))) {
            PropTypes.checkPropTypes(UserMainDataModel, data, 'data', 'PieBarChart');
        }
    };

    return (
        <div className="container-pie-bar-chart">
            <h3 className="title-pie-chart">Score</h3>
            <div className ="circle">
                <h4 className="percentage-score">{scorePercentage}%</h4><p className="objectif-score">de votre objectif</p>
            </div>
            <ResponsiveContainer height="100%" width="100%">
                <PieChart width={130} height={130} margin={{ left: -4, bottom: 30, top: -30 }}  >
                    <Pie data={data} dataKey="score" startAngle={startAngle} endAngle={endAngle} innerRadius={"60%"} outerRadius={"70%"} cornerRadius={10} >
                        <Cell fill="red" cornerRadius="50%"/>
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}




