import React from 'react';
import PieChart2 from './PieChart2';
import Barchart from './Barchart';
import './Dashboard.scss';

function DashboardContent() {
  return (
    <div className="content">
      <Barchart />
      <PieChart2 />
    </div>
  );
}

export default DashboardContent;
