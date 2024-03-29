import './TinyLineChart.css';
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';
import { DataGet } from '../../Services/DataGet.js';
import { getUserData } from '../../Services/DataGet.js';
import PropTypes from 'prop-types';
import { UserAverageSessionsModel } from '../../Models/userAverageSessionsModel.js'; 
import CustomToolTip from './CustomToolTip.jsx';

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
                const { userId, mock, dataType } = getUserData('USER_AVERAGE_SESSIONS');
                const userData = await DataGet(dataType, userId, mock);

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
        // Vérifie si les données ne sont pas définies ou si certaines propriétés essentielles sont absentes //
        if (!data || !data.data || !data.data.userId || !data.data.sessions || !Array.isArray(data.data.sessions)) {
            console.error("Données de sessions moyennes utilisateur manquantes ou incorrectes :", data);
            return false;
        }
        // Vérifie le modèle global UserActivityModel //
        const globalValidation = PropTypes.checkPropTypes(UserAverageSessionsModel, data, 'data', 'checkUserAverageSessionsData');

        // Vérifie les types de données pour chaque session //
        const sessionsValidation = data.data.sessions.every(session => {
            return PropTypes.checkPropTypes({
                day: PropTypes.number.isRequired,
                sessionLength: PropTypes.number.isRequired,
            }, session, 'session', 'checkUserAverageSessionsData');
        });

        // Si les deux validations sont réussies, retourne true, sinon retourne false //
        return globalValidation && sessionsValidation;
    };

    /**
     * Gère les événements de déplacement de la souris sur TinyLineChart.
     * Ajuste le fond de l'élément '.container-tiny-line-chart' en fonction de la position horizontale de la souris.
     * @param {MouseEvent} e - L'objet événement MouseEvent.
     */
    function customMouseMove(e) {
        let sessionWrap = document.querySelector('.container-tiny-line-chart')
        if (e.isTooltipActive) {
            let windowWidth = sessionWrap.offsetWidth;
            let mouseXpercent= Math.floor(
                (e.activeCoordinate.x / windowWidth) * 100
            )
            sessionWrap.style.background = `linear-gradient(90deg, rgba(255, 0, 0, 1) ${mouseXpercent}%, rgba(205, 0, 0, 0.9) ${mouseXpercent}%, rgba(205, 0, 0, 0.9) 100%)`;
        }
        else {
            sessionWrap.style.background = "red"
        }
    }
    
    /**
     * Gère l'événement de sortie de la souris de TinyLineChart.
     * Réinitialise le fond de l'élément '.container-tiny-line-chart' à sa couleur par défaut lorsqu'elle est appelée.
     */
    function customOnMouseOut(){
        let sessionWrap =document.querySelector('.container-tiny-line-chart');
        sessionWrap.style.background = "red"
    }

    return (
        <div className="container-tiny-line-chart">
            <h3 className="title-tiny-line-chart">Durée moyenne des sessions</h3>
            <ResponsiveContainer width="100%" height="100%"  >
                <LineChart margin={{ left: 15, right: 15, bottom: 30, top: 120}} data={sessionData} onMouseMove={(e) => customMouseMove(e)} onMouseOut = {() => customOnMouseOut()} >
                    <Line type="natural" dataKey="sessionLength" stroke="url(#gradientLine)" strokeWidth={2} dot={false} label={false} activeDot = {{stroke:"rgba(255,255,255,0.6)", strokeWidth:4, r:2}} />
                    <XAxis tickMargin={15} dataKey="day" stroke="#ffffff7f" width="100%"  tickLine={false} axisLine={false} tickFormatter={(value) => mapDayToLetter(value)} fontSize = {12} fontFamily="Roboto"/>
                    <YAxis hide domain = {['dataMin-10','dataMax+10']} />
                    <Tooltip cursor={false} content={<CustomToolTip />}  wrapperStyle={{ fontWeight: 500, color: "black" }} contentStyle={{ backgroundColor: "rgba(255, 255, 255, 1)", height: "25px", width: "35px"}} labelFormatter={(value) =>`${value} min`} />
                    <defs>
                        <linearGradient id="gradientLine" x1 = "0%" y1="0%" x2="100%" y2= "0%">
                            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
                            <stop offset="20%" stopColor="rgba(255, 255, 255, 0.4)" />
                            <stop offset="40%" stopColor="rgba(255, 255, 255, 0.5)" />
                            <stop offset="60%" stopColor="rgba(255, 255, 255, 0.6)" />
                            <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
                        </linearGradient>
                    </defs>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
