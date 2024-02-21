import './TinyLineChart.css';
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { getUserAverageSessions } from '../../Services/DataMock.js';


const dayAbbreviations = {
    1: 'L',
    2: 'M',
    3: 'M',
    4: 'J',
    5: 'V',
    6: 'S',
    7: 'D'
};

export default function TinyLineChart() {
    const [ sessionData, setSessionData ] = useState([]);
    useEffect(() => {
        const fetchUserAverageSessions = async () => {
            try {
                const params = new URLSearchParams( window.location.search );
                let userId = params.get( 'user' ) ?? 12;
                userId = parseInt( userId );
                const userData = getUserAverageSessions( userId );
                const modifiedData = userData.sessions.map( session => ({
                    day: dayAbbreviations[session.day],
                    sessionLength: session.sessionLength,
                }));
                setSessionData( modifiedData );
            } catch ( error ) {
                console.error( 'Erreur lors de la récupération des données de session moyenne de l\'utilisateur :', error );
            }
        };
        fetchUserAverageSessions();
    }, []);
    return (
        <div className = "container-tiny-line-chart">
            <h3 className = "title-tiny-line-chart">Durée moyenne des sessions</h3>
            <ResponsiveContainer width = "100%" height = "100%">
                <LineChart margin = {{ left: 15, right: 15, bottom: 20, top: 140 }} data = { sessionData }>
                    <Line type = "monotone" dataKey = "sessionLength" stroke = "#ffffff7f" strokeWidth = { 2.5 } dot = { false } />
                    <XAxis dataKey = "day" stroke = "#ffffff7f" width = "100%" tickLine = { false } axisLine = { false } />
                    <Tooltip cursor = { false } wrapperStyle= {{ outline: "none", fontWeight: 500, color: "black" }} labelFormatter = {() => `min`} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

