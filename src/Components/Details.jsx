import React from 'react';
import './Details.scss';
import { validateStrings } from '../Helpers/helpers';
// import PropTypes from 'prop-types';

export default function Details(props) {
  const { obj } = props;
  const objeto = {
    title:
      'La compañia no cuenta formalizado en actas la distribución de dividendos',
    description:
      'La compañia no cuenta formalizado en actas la distribución de dividendos',
    fsli: 'Share capital and other equity accounts',
    auditUnit: 'Empresa B1',
    finalConclusionOnSeverity: 'Deficiency in Internal Control',
    status: 'Pendiente',
    recomendation: 'Ver recomendaciones',
  };

  return (
    <div className="details-info">
      {Object.entries(objeto).map(([keys, value]) => (
        <div key={keys} className="details-info-obj">
          <h5>{validateStrings(keys)}</h5>
          <p>{value}</p>
        </div>
      ))}
    </div>
  );
}
// Details.propTypes = {
//   obj: PropTypes.object,
// };
