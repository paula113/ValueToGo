import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../Components/Details';
import Activity from '../Components/Activity';
import Breadcrumb from '../Components/BreadCrumb';
import { getADocument, time } from '../API/crud';
import './Recomendation.scss';

export default function Recomendation() {
  const { id } = useParams();
  const [cci, setCci] = useState({});
  const ccID = id.split('').slice(1).join('');
  useEffect(() => {
    console.log(
      'esta es la vista de recomendacion, incluir los componentes aquí, por favor. grcias <3',
    );
    // const cciID = id.split('').slice(1).join('');
    console.log(ccID);
    getADocument(ccID, 'puntosDeControl')
      .then((doc) => {
        if (doc.exists) {
          setCci(() => doc.data());
          console.log('Document data:', doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      });
  }, []);

  return (
    <div className="detalle-recomedaciones">
      <Breadcrumb />
      <p>Lee la Carta de Recomendación y responde con las siguientes acciones</p>
      <section className="detalle-features">
        <Details obj={cci} />
        <Activity ccID={ccID} />
      </section>
    </div>
  );
}
