import "./SimpleBarChart.css";
import React, { useState, useEffect } from 'react';
import {ResponsiveContainer,  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
import Legend from '../../assets/images/legend.png';
import { USER_ACTIVITY } from '../../Services/DataMock';

export default function SimpleBarChart() {
  const [ activityData, setActivityData ] = useState([]);
  useEffect(() => {
    // Fetch activité data Cecilia //
    const fetchUserActivity = async () => {
      const userData = USER_ACTIVITY.find( user => user.userId === 18 );
      if ( userData ) {
        const modifiedData = userData.sessions.map(( session, index ) => ({
          day: index + 1, // Remplace les dates par l'index +1 //
          Calories: session.calories,
          Kilogram: session.kilogram,
        }));
        setActivityData( modifiedData );
      }
    };
    fetchUserActivity();
  }, []);
  return (
    <div className = "container-simple-bar-chart">
      <h3 className = "title-simple-bar-chart">Activité quotidienne</h3>
      <img src = { Legend } className = "legend" alt= "legend" />
      <ResponsiveContainer height ="100%" width ="100%">
        <BarChart width = { 702 } height = { 145 } data = { activityData } margin = {{ top: 5, right: 30, left: 30, bottom: 5 }} barGap = {8} barCategoryGap = "35%">
          <CartesianGrid strokeDasharray ="3 3" vertical = {false} />
          <XAxis dataKey ="day" stroke = "#989EAC" tickLine = { false } tickMargin = { 15 } padding = {{ left: -22, right: -22 }} tick = {{ fontSize:14, fontWeight:500 }}/>
          <YAxis yAxisId = "calories" dataKey = "Calories" hide = "true" orientation = "left" stroke = "#9B9EAC" tickLine = { false } axisLine = { false } tickMargin = { 10 } allowDataOverflow = { true } minTickGap = { 10 } allowDecimals = { false }/>
          <YAxis dataKey = "Kilogram" yAxisId = "kilogram" orientation = "right" stroke = "#9B9EAC" tickLine = { false } axisLine = { false } tickMargin = { 30 } allowDataOverflow = { true } minTickGap = { 10 } allowDecimals = { false } domain = {[ "dataMin -1", "dataMax +1" ]} />
          <Tooltip />
          <Bar yAxisId = "kilogram" dataKey = "Kilogram" fill = "black" radius = {[ 50, 50, 0, 0 ]} barSize = { 8 } />
          <Bar yAxisId = "calories" dataKey = "Calories" fill = "red" radius = {[ 50, 50, 0, 0 ]} barSize = { 8 } />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

