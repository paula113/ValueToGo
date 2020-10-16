import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ComposedChart,
  Line,
  Legend,
} from 'recharts';
import { dataFsli } from '../API/dataDashboard';

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';

  render() {
    return (
      <ComposedChart width={730} height={250} data={dataFsli}>
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <CartesianGrid stroke="#f5f5f5" />
  {/* <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
  <Bar dataKey="Total" barSize={20} fill="rgb(208, 74, 2)" />
  {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" /> */}
</ComposedChart>)}
    //   <BarChart
    //     width={1000}
    //     height={400}
    //     data={dataFsli}
    //     // barGap={}
    //     margin={{
    //       top: 20,
    //       right: 30,
    //       left: 20,
    //       bottom: 5,
    //       // font-size:10;
    //     }}
    //   >
    //     <CartesianGrid strokeDasharray="3 3" />
    //     <XAxis dataKey="name" />
    //     <YAxis />
    //     <Tooltip />
    //     <Legend />
    //     <Bar dataKey="value" stackId="a" fill="#EB8C00" />
    //   </BarChart>
    // );
  // }
}
