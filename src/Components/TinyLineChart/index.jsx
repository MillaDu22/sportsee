import './TinyLineChart.css';
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { DataGet } from '../../Services/DataGet.js';
import PropTypes from 'prop-types';
import { UserAverageSessionsModel } from '../../Models/userAverageSessionsModel.js'; 

// Fonction pour mapper les nombres de 1 à 7 aux lettres des jours de la semaine sur l'axe X //
const mapDayToLetter = (day) => {
    const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    return daysOfWeek[day - 1];
};

/**
 * Composant React représentant un graphique à ligne minuscule affichant la durée moyenne des sessions.
 * @returns {JSX.Element} - Élément JSX représentant le graphique à ligne minuscule.
 */
export default function TinyLineChart() {
    const [sessionData, setSessionData] = useState([]);

    useEffect(() => {
        const fetchUserAverageSessions = async () => {
            try {
                const params = new URLSearchParams(window.location.search);
                let userId = params.get('user') ?? 12;
                userId = parseInt(userId);

                const mock = params.get('mock') === '1' ? true: false;
                const userData = await DataGet ('USER_AVERAGE_SESSIONS', userId, mock);

                setSessionData(userData.data.sessions);
                checkUserAverageSessionsData(userData); // Appel de la fonction de validation //
            } catch (error) {
                console.error('Erreur lors de la récupération des données de session moyenne de l\'utilisateur :', error);
            }
        };
        fetchUserAverageSessions();
    }, []);

    /**
     * Fonction pour vérifier la validité des données de sessions moyennes de l'utilisateur.
     * @param {Object} data - Les données de sessions moyennes de l'utilisateur.
     */
    const checkUserAverageSessionsData = (data) => {
        // Vérifie si les données ne sont pas définies ou si les sessions sont absentes //
        if (!data.data || !data.data.userId || !data.data.sessions || !Array.isArray(data.data.sessions)) {
            console.error("Données de sessions moyennes utilisateur manquantes ou incorrectes :", data);
            return; // Arrête l'exécution de la fonction si les données sont incorrectes //
        }
        // Vérifie chaque élément de la session pour s'assurer qu'il correspond au modèle //
        if (data.data && data.data.userId && data.data.sessions && Array.isArray(data.data.sessions)) {
            PropTypes.checkPropTypes(UserAverageSessionsModel, data, 'data', 'TinyLineChart');
        }
    };
    
    return (
        <div className="container-tiny-line-chart">
            <h3 className="title-tiny-line-chart">Durée moyenne des sessions</h3>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart margin={{ left: 15, right: 15, bottom: 30, top: 120}} data={sessionData} >
                    <Line type="natural" dataKey="sessionLength" stroke="#ffffff7f" strokeWidth={2} dot={false} label={false} activeDot = {{stroke:"rgba(255,255,255,0.6)", strokeWidth:4, r:2}} height="80%" />
                    <XAxis tickMargin={20} dataKey="day" stroke="#ffffff7f" width="100%"  tickLine={false} axisLine={false} tickFormatter={(value) => mapDayToLetter(value)}/>
                    <Tooltip cursor={false} wrapperStyle={{ outline: "none", fontWeight: 500, color: "black" }} contentStyle={{ backgroundColor: "rgba(255, 255, 255, 1)", height: "25px", width: "35px"}} labelFormatter={(value) =>`${value} min`}  position={{ y:60}} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
