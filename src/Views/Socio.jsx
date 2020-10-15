import React, { useState } from 'react';
// import readXlsxFile from 'read-excel-file';
import Details from '../Components/Details';
import Activity from '../Components/Activity';
import Breadcrumb from '../Components/BreadCrumb';
import './socio.scss';
// import schema from '../API/schema';

function Socio() {
  // const [excelFile, setExcelFile] = useState();

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

export default Socio;
