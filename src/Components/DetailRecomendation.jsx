import React, { useEffect } from 'react';
// import readXlsxFile from 'read-excel-file';
import Details from './Details';
import Activity from './Activity';
import Breadcrumb from './BreadCrumb';
// import './socio.scss';
// import firebase from '../firebase.config';

function DetailRecomendation() {
  return (
    <div className="detalle-recomedaciones">
      <Breadcrumb />
      <p>Lee la Carta de Recomendación y responde con las siguientes acciones</p>
      <section className="detalle-features">
        <Details />
        <Activity />
      </section>
    </div>
  );
}

export default DetailRecomendation;
