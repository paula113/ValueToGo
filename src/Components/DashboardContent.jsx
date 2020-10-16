import React from 'react';
import Grid from '@material-ui/core/Grid';
import PieChart2 from './PieChart2';
import PieChartDeficiency from './PieChartDeficiency';
import Barchart from './Barchart';
import './Dashboard.scss';

function DashboardContent() {
  return (
    <div className="content">
      <Grid container>
        <Grid item md={6}>
          <PieChart2 />
        </Grid>
        <Grid item md={6}>
          <PieChartDeficiency />
        </Grid>
        <Grid item md={12}>
          <Barchart />
        </Grid>
      </Grid>
    </div>
  );
}

export default DashboardContent;
