import './PieBarChart.css';
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer} from 'recharts';
import { DataGet } from '../../Services/DataGet.js';
import { getUserData } from '../../Services/DataGet.js';
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
                const { userId, mock, dataType } = getUserData('USER_MAIN_DATA');
                const userData = await DataGet(dataType, userId, mock);

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

    const checkUserMainData = (data) => {
        // Vérifie si les données ne sont pas définies ou si certaines propriétés essentielles sont absentes //
        if (!data || !data.id || !data.userInfos || !data.keyData || (!data.todayScore && data.todayScore !== 0 && !data.score && data.score !== 0)) {
            console.error("Données utilisateur manquantes ou incorrectes", data);
            return false;
        }
    
        // Vérifie le modèle global UserMainDataModel //
        const globalValidation = PropTypes.checkPropTypes(UserMainDataModel, data, 'data', 'checkUserMainData');
        
        // Vérifie les types de données pour l'objet keyData //
        const scoreSchema = {
            todayScore: PropTypes.number,
            score: PropTypes.number.isRequired
        };
        const scoreData = {
            todayScore: data.todayScore,
            score: data.score
        };
        const keyDataValidation = PropTypes.checkPropTypes(scoreSchema, scoreData, 'score', 'checkUserMainData');
    
        // Si les deux validations sont réussies, retourne true, sinon retourne false //
        return globalValidation && keyDataValidation;
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




