import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Cell } from 'recharts';
import { dataPieDeficiency } from '../API/dataDashboard';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/3Leoa7f4/';

  render() {
    return (
      <PieChart width={450} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={dataPieDeficiency}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {dataPieDeficiency.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend align="right" verticalAlign="middle" height={10} layout="vertical" />
      </PieChart>
    );
  }
}
