import "./SimpleBarChart.css";
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  {
    name: '1',
    Calories: 4000,
    Poids: 2400,
    amt: 2400,
  },
  {
    name: '2',
    Calories: 3000,
    Poids: 1398,
    amt: 2210,
  },
  {
    name: '3',
    Calories: 2000,
    Poids: 9800,
    amt: 2290,
  },
  {
    name: '4',
    Calories: 2780,
    Poids: 3908,
    amt: 2000,
  },
  {
    name: '5',
    Calories: 1890,
    Poids: 4800,
    amt: 2181,
  },
  {
    name: '6',
    Calories: 2390,
    Poids: 3800,
    amt: 2500,
  },
  {
    name: '7',
    Calories: 3490,
    Poids: 4300,
    amt: 2100,
  },
  {
    name: '8',
    Calories: 3490,
    Poids: 4300,
    amt: 2100,
  },
  {
    name: '9',
    Calories: 3490,
    Poids: 4300,
    amt: 2100,
  },
  {
    name: '10',
    Calories: 3490,
    Poids: 4300,
    amt: 2100,
  },
];

export default class SimpleBarChart extends PureComponent {
  render() {
    return (
      <div className = "container-simple-bar-chart">
        <h3 className = "title-simple-bar-chart">Activité quotidienne</h3>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Poids" fill="black" activeBar={<Rectangle fill="black" stroke="black" />} />
          <Bar dataKey="Calories" fill="red" activeBar={<Rectangle fill="red" stroke="red" />} />
        </BarChart>
      </div>
    );
  }
}
