import './TinyLineChart.css';
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { getUserAverageSessions } from '../../Services/UseApiSportSee'; 
import PropTypes from 'prop-types';
import { UserAverageSessionsModel } from '../../Models/userAverageSessionsModel.js'; 


// Fonction pour mapper les nombres de 1 à 7 aux lettres des jours de la semaine sur l'axe X //
const mapDayToLetter = (day) => {
    const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    return daysOfWeek[day - 1];
};

export default function TinyLineChart() {
    const [sessionData, setSessionData] = useState([]);

    useEffect(() => {
        const fetchUserAverageSessions = async () => {
            try {
                const params = new URLSearchParams(window.location.search);
                let userId = params.get('user') ?? 12;
                userId = parseInt(userId);
                const userData = await getUserAverageSessions(userId);
                setSessionData(userData.data.sessions);
                checkUserAverageSessionsData(userData); // Appel de la fonction de validation //
            } catch (error) {
                console.error('Erreur lors de la récupération des données de session moyenne de l\'utilisateur :', error);
            }
        };
        fetchUserAverageSessions();
    }, []);

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
        console.log("Modèle de données de sessions moyennes utilisateur :", UserAverageSessionsModel); 
        console.log("Données de sessions moyennes utilisateur validées :", data); 
    };
    
    return (
        <div className="container-tiny-line-chart">
            <h3 className="title-tiny-line-chart">Durée moyenne des sessions</h3>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart margin={{ left: 15, right: 15, bottom: 20, top: 140 }} data={sessionData}>
                    <Line type="monotone" dataKey="sessionLength" stroke="#ffffff7f" strokeWidth={2.5} dot={false} />
                    <XAxis dataKey="day" stroke="#ffffff7f" width="100%" tickLine={false} axisLine={false} tickFormatter={(value) => mapDayToLetter(value)}/>
                    <Tooltip cursor={false} wrapperStyle={{ outline: "none", fontWeight: 500, color: "black" }} labelFormatter={() => `min`} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
