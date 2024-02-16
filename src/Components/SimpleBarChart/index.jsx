import "./SimpleBarChart.css";
import React, { PureComponent } from 'react';
import {ResponsiveContainer,  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
import Legend from '../../assets/images/legend.png';

const data = [
  {
    day:'1',
    Calories: 230,
    Kilogram: 69,
  },
  {
    day: '2',
    Calories: 300,
    Kilogram: 70,
  },
  {
    day: '3',
    Calories: 350,
    Kilogram: 69.8,
  },
  {
    day: '4',
    Calories: 375,
    Kilogram: 69.7,
  },
  {
    day: '5',
    Calories: 210,
    Kilogram: 69.8,
  },
  {
    day: '6',
    Calories: 205,
    Kilogram: 69.8,
  },
  {
    day: '7',
    Calories: 275,
    Kilogram: 69.6,
  },
  {
    day: '8',
    Calories: 360,
    Kilogram: 69.2,
  },
  {
    day: '9',
    Calories: 250,
    Kilogram: 69.7,
  },
  {
    day: '10',
    Calories: 300,
    Kilogram: 69.6,
  },
];

export default class SimpleBarChart extends PureComponent {
  render() {
    return (
      <div className = "container-simple-bar-chart">
        <h3 className = "title-simple-bar-chart">Activité quotidienne</h3>
        <img src = { Legend } className = "legend" alt= "legend" />
        <ResponsiveContainer height ="100%" width ="100%">
          <BarChart
            width = { 702 }
            height = { 145 }
            data = { data }
            margin = {{ top: 5, right: 30, left: 30, bottom: 5 }}
            barGap = {8}
            barCategoryGap = "35%">
            <CartesianGrid strokeDasharray ="3 3" vertical = {false} />
            <XAxis dataKey ="day" stroke = "#989EAC" tickLine = {false} tickMargin = {15} padding = {{ left: -22, right: -22 }} tick = {{ fontSize:14, fontWeight:500 }}/>
            <YAxis yAxisId = "calories" dataKey = "Calories" hide = "true" orientation = "left" stroke = "#9B9EAC" tickLine = {false} axisLine = {false} tickMargin = {10} allowDataOverflow = {true} minTickGap = {10} allowDecimals = {false}/>
            <YAxis dataKey = "Kilogram" yAxisId = "kilogram" orientation = "right" stroke = "#9B9EAC" tickLine = {false} axisLine = {false} tickMargin = {30} allowDataOverflow = {true} minTickGap = {10} allowDecimals = {false} domain = {["dataMin -1", "dataMax +1"]} />
            <Tooltip />
            <Bar yAxisId = "kilogram" dataKey = "Kilogram" fill = "black" radius = {[50, 50, 0, 0]} barSize = {8} />
            <Bar yAxisId = "calories" dataKey = "Calories" fill = "red" radius = {[50, 50, 0, 0]} barSize = {8} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
