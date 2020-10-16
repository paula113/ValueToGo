import React from 'react';
import './Details.scss';
import { validateStrings } from '../Helpers/helpers';
// import PropTypes from 'prop-types';

export default function Details(props) {
  const { obj } = props;

  return (
    <div className="details-info">
      <section className="details-info-container">
        <div className="details-info-obj">
          <h5>Title</h5>
          <p>{obj.title}</p>
          <h5>Audit Unit</h5>
          <p>{obj.auditUnit}</p>
          <h5>Rubro</h5>
          <p>{obj.fsli}</p>
          <h5>Status</h5>
          <p>{obj.status}</p>
          <h5>Description</h5>
          <p>{obj.description}</p>
          <h5>Final Conclusion On Severity</h5>
          <p>{obj.finalConclusionOnSeverity}</p>
          <h5>Example</h5>
          <p>{obj.example}</p>
          <h5>Recomendation</h5>
          <p>{obj.recomendation}</p>
        </div>
      </section>

      {/* <section> */}
      {/* <h6>Sustento</h6>
        <button type="submit" onClick={() => console.log('descarga file')}>
          Descargar Sustento
        </button> */}
      {/* </section> */}
    </div>
  );
}
// Details.propTypes = {
//   obj: PropTypes.object,
// };
