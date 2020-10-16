import React from 'react';
import Export from './ExportPPT';

const Reports = () => {
  const años = [2018, 2019, 2020];
  return (
    <div>
      <p>Módulo de reportes</p>
      <div>
        <Export años={años} />
      </div>
    </div>
  );
};
export default Reports;
