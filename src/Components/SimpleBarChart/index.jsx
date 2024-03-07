import React, { useState, useEffect } from 'react';
import './SimpleBarChart.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Legend from '../../assets/images/legend.png';
import { DataGet } from '../../Services/DataGet.js';
import PropTypes from 'prop-types';
import { UserActivityModel } from '../../Models/userActivityModel.js'; 

/**
 * Composant React représentant un graphique à barres simple affichant l'activité quotidienne de l'utilisateur.
 * @returns {JSX.Element} - Élément JSX représentant le graphique à barres de l'activité quotidienne de l'utilisateur.
 */
export default function SimpleBarChart() {
  const [activityData, setActivityData] = useState(Array.from({ length: 7 }, (_, index) => ({
    day: index + 1,
    Calories: 0,
    Kilogram: 0,
  })));

  useEffect(() => {
    const fetchUserActivity = async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const userId = parseInt(params.get('user') ?? 12);

        const mock = params.get('mock') === '1' ? true: false;
        const userData = await DataGet ('USER_ACTIVITY', userId, mock);

        checkUserActivityData(userData); // Appel de la fonction de validation //

        // Vérifie si les données renvoyées par l'API sont valides et contiennent des sessions //
        if (userData && userData.data && userData.data.sessions && Array.isArray(userData.data.sessions)) {
          // Transforme les données pour les adapter au format attendu par le composant BarChart //
          const modifiedData = userData.data.sessions.map((session, index) => ({
            day: index + 1, // Utilise l'index + 1 comme valeur de day //
            Calories: session.calories,
            Kilogram: session.kilogram,
          }));
          setActivityData(modifiedData);
        } else {
          console.error('Les données d\'activité utilisateur ne sont pas conformes :', userData);
          setActivityData(Array.from({ length: 7 }, (_, index) => ({
            day: index + 1,
            Calories: 0,
            Kilogram: 0,
          })));
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données d\'activité utilisateur :', error);
      }
    };
    fetchUserActivity();
  }, []);

  // Fonction de validation des données d'activité utilisateur //
  const checkUserActivityData = (data) => {
    // Vérifie si les données ne sont pas définies ou si les sessions sont absentes //
    if (!data.data || !data.data.userId || !data.data.sessions || !Array.isArray(data.data.sessions)) {
      console.error("Données d'activité utilisateur manquantes ou incorrectes :", data);
      return; // Arrête l'exécution de la fonction si les données sont incorrectes //
    }
    if (data.data && data.data.userId && data.data.sessions && Array.isArray(data.data.sessions)) {
      PropTypes.checkPropTypes(UserActivityModel, data, 'data', 'SimpleBarChart');
    }
  };

  return (
    <div className="container-simple-bar-chart">
      <h3 className="title-simple-bar-chart">Activité quotidienne</h3>
      <img src={Legend} className="legend" alt="legend" />
      <ResponsiveContainer height="100%" width="100%">
        <BarChart width={702} height={145} data={activityData} margin={{ top: 5, right: 30, left: 30, bottom: 5 }} barGap={8} barCategoryGap="35%">
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" stroke="#989EAC" tickLine={false} tickMargin={15} padding={{ left: 0, right: 0 }} tick={{ fontSize: 14, fontWeight: 500 }} />
          <YAxis yAxisId="calories" dataKey="Calories" hide="true" orientation="left" stroke="#9B9EAC" tickLine={false} axisLine={false} tickMargin={10} allowDataOverflow={true} minTickGap={10} allowDecimals={false} />
          <YAxis dataKey="Kilogram" yAxisId="kilogram" orientation="right" stroke="#9B9EAC" tickLine={false} axisLine={false} tickMargin={30} allowDataOverflow={true} minTickGap={10} allowDecimals={false} domain={["dataMin -1", "dataMax +1"]} />
          <Tooltip cursor={{ fill: 'rgba(196, 196,196, 0.4)'}} contentStyle={{  lineHeight: "20px", textAlign: "center", paddingTop: "20px", backgroundColor: "red", height: "63px", width: "39px", fontSize:12}} formatter={(value, name) => [`${value} ${name === 'Kilogram' ? 'Kg' : 'Kcal'}`]} labelFormatter={() => ""} itemStyle={{color:"white"}} position={{y:-50}} offset = {30} />
          <Bar yAxisId="kilogram" dataKey="Kilogram" fill="black" radius={[50, 50, 0, 0]} barSize={8}/>
          <Bar yAxisId="calories" dataKey="Calories" fill="red" radius={[50, 50, 0, 0]} barSize={8} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}


