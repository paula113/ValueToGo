import React from 'react';
import Details from '../Components/Details';
import Activity from '../Components/Activity';
import Breadcrumb from '../Components/BreadCrumb';
// import DetailRecomendation from '../Components/DetailRecomendation';
import './Recomendation.scss';

export default function Recomendation() {
  console.log(
    'esta es la vista de recomendacion, incluir los componentes aquí, por favor. grcias <3',
  );
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
