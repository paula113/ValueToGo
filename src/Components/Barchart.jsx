import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    name: 'MON',
    value: 1500,
  },
  {
    name: 'TUE',
    value: 2000,
  },
  {
    name: 'WED',
    value: 3000,
  },
  {
    name: 'THU',
    value: 4000,
  },
  {
    name: 'FRI',
    value: 1000,
  },
  {
    name: 'SAT',
    value: 2100,
  },
  {
    name: 'SUN',
    value: 1900,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';

  render() {
    return (
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" stackId="a" fill="#EB8C00" />
        {/* <Bar dataKey="uv" stackId="a" fill="#82ca9d" /> */}
      </BarChart>
    );
  }
}
