import React from 'react';
import Export from './ExportPPT';
import './Reports.scss';

const Reports = () => {
  const años = [
    'Informe de Recomendaciones 2017',
    'Informe de Recomendaciones 2018',
    'Informe de Recomendaciones 2019',
    'Informe de Recomendaciones 2020',
  ];
  const other = [
    'Otro Reporte 2017',
    'Otro Reporte 2018',
    'Sustentos 2019',
    'Informes 2020',
  ];

  return (
    <div className="container-reports">
      <div className="card-reports">
        <p className="details-info-title">Reportes de Recomendación</p>
        <Export años={años} />
      </div>
      <div className="card-reports">
        <p className="details-info-title">Otros Reportes</p>
        <Export años={other} />
      </div>
    </div>
  );
};
export default Reports;
