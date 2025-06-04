import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./Chart.scss";

const data = [
  {
    name: '2025',
    nombre: 4000,
  },
  {
    name: '2024',
    nombre: 3000,
  },
  {
    name: '2023',
    nombre: 2000,
  },
  {
    name: '2022',
    nombre: 2780,
  },
  {
    name: '2021',
    nombre: 1890,
  },
  {
    name: '2020',
    nombre: 2390,
  },
  {
    name: '2019',
    nombre: 3490,
  },
];

const Chart = () => {
  return (
    <div className="chart">
      <div className="title">Le nombre d'étudiants inscrits sur les 6 dernières années</div>
      <ResponsiveContainer width="100%" height="100%" aspect={2 / 1}>
        <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="nombre" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
